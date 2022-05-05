/** @type {import('next').NextConfig} */

const path = require('path')
const { createLoader } = require('simple-functional-loader')
const frontMatter = require('front-matter')
const minimatch = require('minimatch')

const fallbackLayouts = {
  'src/pages/docs/**/*': ['@/layouts/DocumentationLayout', 'DocumentationLayout'],
}

const fallbackDefaultExports = {
  'src/pages/{docs,components}/**/*': ['@/layouts/ContentsLayout', 'ContentsLayout'],
  'src/pages/blog/**/*': ['@/layouts/BlogPostLayout', 'BlogPostLayout'],
}

const fallbackGetStaticProps = {
  'src/pages/blog/**/*': '@/layouts/BlogPostLayout',
}

module.exports = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer, ...options }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    config.module.rules.push({
      test: { and: [/\.mdx$/, /snippets/] },
      resourceQuery: { not: [/rss/, /preview/] },
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [],
          },
        },
      ],
    })

    let mdx = (plugins = []) => [
      {
        loader: '@mdx-js/loader',
        options: {
          remarkPlugins: [
            // withPrevalInstructions,
            // withExamples,
            // withTableOfContents,
            // withSyntaxHighlighting,
            // withNextLinks,
            // withSmartQuotes,
            // ...plugins,
          ],
          rehypePlugins: [
            // withLinkRoles
          ],
        },
      },
      createLoader(function (source) {
        let pathSegments = this.resourcePath.split(path.sep)
        let slug =
          pathSegments[pathSegments.length - 1] === 'index.mdx'
            ? pathSegments[pathSegments.length - 2]
            : pathSegments[pathSegments.length - 1].replace(/\.mdx$/, '')
        return source + `\n\nexport const slug = '${slug}'`
      }),
    ]

    config.module.rules.push({
      test: /\.mdx$/,
      resourceQuery: /preview/,
      use: [
        options.defaultLoaders.babel,
        createLoader(function (src) {
          const [preview] = src.split('<!--/excerpt-->')
          return preview.replace('<!--excerpt-->', '')
        }),
        ...mdx([
          () => (tree) => {
            let firstParagraphIndex = tree.children.findIndex((child) => child.type === 'paragraph')
            if (firstParagraphIndex > -1) {
              tree.children = tree.children.filter((child, index) => {
                if (child.type === 'import' || child.type === 'export') {
                  return true
                }
                return index <= firstParagraphIndex
              })
            }
          },
        ]),
      ],
    })

    config.module.rules.push({
      test: { and: [/\.mdx$/], not: [/snippets/] },
      resourceQuery: { not: [/rss/, /preview/] },
      use: [
        options.defaultLoaders.babel,
        createLoader(function (source) {
          if (source.includes('/*START_META*/')) {
            const [meta] = source.match(/\/\*START_META\*\/(.*?)\/\*END_META\*\//s)
            return 'export default ' + meta
          }
          return (
            source.replace(/export const/gs, 'const') + `\nMDXContent.layoutProps = layoutProps\n`
          )
        }),
        ...mdx(),
        createLoader(function (source) {
          let fields = new URLSearchParams(this.resourceQuery.substr(1)).get('meta') ?? undefined
          let { attributes: meta, body } = frontMatter(source)
          if (fields) {
            for (let field in meta) {
              if (!fields.split(',').includes(field)) {
                delete meta[field]
              }
            }
          }

          let extra = []
          let resourcePath = path.relative(__dirname, this.resourcePath)

          if (!/^\s*export\s+(var|let|const)\s+Layout\s+=/m.test(source)) {
            for (let glob in fallbackLayouts) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackLayouts[glob][1]} as _Layout } from '${fallbackLayouts[glob][0]}'`,
                  'export const Layout = _Layout'
                )
                break
              }
            }
          }

          if (!/^\s*export\s+default\s+/m.test(source.replace(/```(.*?)```/gs, ''))) {
            for (let glob in fallbackDefaultExports) {
              if (minimatch(resourcePath, glob)) {
                extra.push(
                  `import { ${fallbackDefaultExports[glob][1]} as _Default } from '${fallbackDefaultExports[glob][0]}'`,
                  'export default _Default'
                )
                break
              }
            }
          }

          if (
            !/^\s*export\s+(async\s+)?function\s+getStaticProps\s+/m.test(
              source.replace(/```(.*?)```/gs, '')
            )
          ) {
            for (let glob in fallbackGetStaticProps) {
              if (minimatch(resourcePath, glob)) {
                extra.push(`export { getStaticProps } from '${fallbackGetStaticProps[glob]}'`)
                break
              }
            }
          }

          let metaExport
          if (!/export\s+(const|let|var)\s+meta\s*=/.test(source)) {
            metaExport =
              typeof fields === 'undefined'
                ? `export const meta = ${JSON.stringify(meta)}`
                : `export const meta = /*START_META*/${JSON.stringify(meta || {})}/*END_META*/`
          }

          return [
            ...(typeof fields === 'undefined' ? extra : []),
            typeof fields === 'undefined'
              ? body.replace(/<!--excerpt-->.*<!--\/excerpt-->/s, '')
              : '',
            metaExport,
          ]
            .filter(Boolean)
            .join('\n\n')
        }),
      ],
    })

    if (!dev && !isServer) {
      config.resolve.fallback.fs = false
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
}
