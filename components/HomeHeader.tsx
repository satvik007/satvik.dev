import Script from 'next/script'
import Image from 'next/image'

export default function HomeHeader() {
  return (
    <div className="flex flex-col py-2">
      <div className="relative flex items-center justify-center">
        <div className="profile-image-container">
          <Image
            src="/images/satvik_choudhary.jpg"
            height={150}
            width={150}
            className="profile-image"
            alt="Profile picture - satvik choudhary"
          />
        </div>
        <canvas id="gradient-canvas" />
      </div>
      <Script src="/scripts/gradient.js" strategy="beforeInteractive" />
      <div className="relative">
        <div className="intro">Hi, I’m</div>
        <h1 className="">Satvik Choudhary</h1>
      </div>

      <div className="relative text-xl">
        <p>I am a Software Engineer from India.</p>
        <p>I do web-development, software architecture, automation.</p>
        <p>
          I am an aspiring polygot. In my free time I read, play and listen to music and learn new
          technologies.
        </p>
      </div>
    </div>
  )
}
