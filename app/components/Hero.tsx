'use client'

import Image from "next/image";

interface HeroProps {
  imageSrc: string;
  mobileImageSrc: string;
}

export default function Hero({ imageSrc, mobileImageSrc }: HeroProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/iSign-Capstone/iSign-Web/releases/download/iSign/iSign.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="min-h-screen flex items-center justify-center pt-15">
      <div className="relative w-[95%] mx-auto">

        {/* Desktop Image */}
        <Image
          src={imageSrc}
          alt="iSign app preview"
          width={2000}
          height={2000}
          priority
          className="hidden lg:block w-full h-auto border-[3px] rounded-2xl border-[#343434]"
        />

        {/* Mobile Image */}
        <Image
          src={mobileImageSrc}
          alt="iSign app preview"
          width={800}
          height={800}
          priority
          className="lg:hidden w-full h-auto border-[3px] rounded-2xl border-[#343434]"
        />

        {/* Desktop text overlay */}
        <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-32 flex-col gap-4 text-center items-center">
          <h1 className="font-lexend text-5xl leading-tight" style={{ color: '#343434' }}>
            Break<br />
            Communication<br />
            Barriers with<br />
            <span className="text-8xl">
              <span style={{ color: '#F9686A' }}>i</span>
              <span style={{ color: '#343434' }}>Sign</span>
            </span>
          </h1>

          <p className="font-louis font-bold text-lg" style={{ color: '#343434' }}>
            A mobile app that translates Filipino<br />
            Sign Language in real time.
          </p>

          <button
            onClick={handleDownload}
            className="font-lexend text-sm px-6 py-3 rounded-xl border-[3px] border-[#343434] w-fit
              bg-[#343434] text-[#FCFAC8]
              hover:bg-[#FCFAC8] hover:text-[#343434]
              hover:scale-110 active:scale-90 transition-none cursor-pointer"
          >
            Download Now
          </button>
        </div>

        {/* Mobile text */}
        <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%] flex flex-col gap-3 text-center items-center">
          <h1 className="font-lexend text-3xl leading-tight" style={{ color: '#343434' }}>
            Break<br />
            Communication<br />
            Barriers with<br />
            <span className="text-5xl">
              <span style={{ color: '#F9686A' }}>i</span>
              <span style={{ color: '#343434' }}>Sign</span>
            </span>
          </h1>

          <p className="font-louis font-bold text-sm" style={{ color: '#343434' }}>
            A mobile app that translates Filipino<br />
            Sign Language in real time.
          </p>

          <button
            onClick={handleDownload}
            className="font-lexend text-sm px-6 py-3 rounded-xl border-[3px] border-[#343434] w-fit
              bg-[#343434] text-[#FCFAC8]
              hover:bg-[#FCFAC8] hover:text-[#343434]
              hover:scale-110 active:scale-90 transition-none cursor-pointer"
          >
            Download Now
          </button>
        </div>

      </div>
    </section>
  );
}
