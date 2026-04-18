import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function Card({ imageSrc, title, description }: CardProps) {
  return (
    <div className="reveal flex items-center gap-4 bg-white rounded-2xl px-5 py-4"
      style={{ boxShadow: '0 10px 20px rgba(52, 52, 52, 0.25)' }}>

      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          width={180}
          height={180}
          className="rounded-xl object-cover w-[100px] lg:w-[180px]"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h2 className="font-lexend text-lg lg:text-2xl leading-snug" style={{ color: '#343434' }}>
          {title}
        </h2>
        <p className="font-louis font-bold text-sm leading-snug" style={{ color: '#343434' }}>
          {description}
        </p>
      </div>

    </div>
  );
}
