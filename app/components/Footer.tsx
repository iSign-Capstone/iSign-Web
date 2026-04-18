import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center justify-center gap-3 py-6 px-8"
      style={{ backgroundColor: '#FCE565', borderTop: '3px solid #343434' }}
    >
      {/* Logo + Brand */}
      <div className="flex items-center gap-2">
        <span className="font-lexend text-3xl">
          <span style={{ color: '#F9686A' }}>i</span>
          <span style={{ color: '#343434' }}>Sign</span>
        </span>
        <Image src="/logo.png" alt="iSign logo" width={42} height={42} />
      </div>

      {/* Description */}
      <p className="font-louis text-base text-center" style={{ color: '#343434' }}>
        Breaking communication barriers through technology.
      </p>
    </footer>
  )
}
