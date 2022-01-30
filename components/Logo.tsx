import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Link from '@/components/Link'

export default function Logo({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <Link href="/">
      <div className="logo-rainbow-box">
        <span className={'logo-text ' + className}>S</span>
      </div>
    </Link>
  )
}
