import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="py-24 px-8">
      <div className="w-[95%] mx-auto flex flex-col md:flex-row items-center gap-8">

        {/* Mobile: Image on top */}
        <div className="w-full md:hidden">
          <Image
            src="/card-assets/card-pic2.png"
            alt="Our Mission"
            width={300}
            height={300}
            className="w-full h-auto rounded-2xl"
          />
        </div>

        {/* Left Side - Mission containers */}
        <div className="relative flex flex-col w-full md:w-2/3 animate-float">

          {/* Title banner */}
          <div
            className="relative z-10 self-start px-8 py-4 rounded-2xl bg-white"
            style={{ border: '3px solid #343434' }}
          >
            <h2 className="font-lexend text-2xl md:text-4xl">
              <span style={{ color: '#343434' }}>Our </span>
              <span style={{ color: '#F9686A' }}>Mission</span>
            </h2>
          </div>

          {/* Mission text container */}
          <div
            className="rounded-3xl px-10 py-10 pt-12 -mt-6 flex items-center justify-center"
            style={{ backgroundColor: '#FCE565', border: '3px solid #343434' }}
          >
            <div className="max-w-md mx-auto mt-2">
              <p className="font-louis font-bold text-lg md:text-2xl leading-relaxed text-center" style={{ color: '#343434' }}>
                Our mission is to reduce communication barriers by creating an accessible tool that helps Deaf and hearing individuals understand each other better.
              </p>
            </div>
          </div>

        </div>

        {/* Desktop: Image on right */}
        <div className="hidden md:block w-1/3 flex-shrink-0">
          <Image
            src="/card-assets/card-pic2.png"
            alt="Our Mission"
            width={300}
            height={300}
            className="w-full h-auto rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}
