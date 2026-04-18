import Image from "next/image";

interface StoryCardProps {
  imageSrc: string;
  titleStart: string;
  titlePink: string;
  description: string;
  imageOffset?: string;
}

export default function StoryCard({ imageSrc, titleStart, titlePink, description, imageOffset }: StoryCardProps) {
  return (
    <div className="reveal relative flex flex-col items-center pt-44">
      {/* Overflowing image */}
      <div className="absolute z-20" style={{ top: imageOffset ?? '0px' }}>
        <Image
          src={imageSrc}
          alt={titleStart + titlePink}
          width={300}
          height={300}
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Card */}
      <div
        className="reveal w-full rounded-3xl pt-36 pb-8 px-6 flex flex-col gap-3 items-center text-center bg-white"
        style={{ boxShadow: '0 10px 20px rgba(52, 52, 52, 0.25)' }}
      >
        <h3 className="font-lexend text-2xl leading-snug">
          <span style={{ color: '#343434' }}>{titleStart} </span>
          <span style={{ color: '#F9686A' }}>{titlePink}</span>
        </h3>
        <p className="font-louis font-bold text-base leading-snug" style={{ color: '#343434' }}>
          {description}
        </p>
      </div>
    </div>
  )
}
