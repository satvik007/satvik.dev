import Script from 'next/script'
import Image from 'next/image'
import Link from "@/components/Link";

export default function HomeHeader() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="absolute bg-blue-300 flex items-center justify-center min-h-screen">
        <canvas id="gradient-canvas" className="min-h-screen"/>
        <Script src="/scripts/gradient.js" strategy="beforeInteractive"/>
      </div>

      <div className="z-10 m-20">
        <div>
          <div className="text-[1.5vw] ml-6 mb-4">Hi, I’m</div>
          <h1 className="text-[6vw] leading-none font-extrabold capitalize">Satvik</h1>
          <h1 className="text-[6vw] leading-none font-extrabold capitalize">Choudhary</h1>
        </div>

        <div className="text-xl mt-12 leading-normal">
          <p>I write code, think about data and create awesome applications.</p>
          <p>Currently Senior Software Engineer at Envestnet Yodlee doing R&D on next generation fintech
            applications.</p>
        </div>

        <div className="">
          <p className="text-xl mt-12">Read <Link href="/blog"><a className="font-bold">articles I've written</a></Link>.
          </p>
        </div>
      </div>

    </div>
  )
}
