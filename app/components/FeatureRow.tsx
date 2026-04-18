import Image from "next/image";

interface FeatureRowProps {
  imageSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export default function FeatureRow({ imageSrc, title, description, reverse }: FeatureRowProps) {
  return (
    <div className={`reveal flex flex-col md:flex-row items-center gap-8 md:gap-24 w-full ${reverse ? 'md:flex-row-reverse' : ''}`}>

      {/* Image */}
      <div className="flex-shrink-0 w-[200px] md:w-[400px] overflow-hidden rounded-2xl hover:scale-120 active:scale-95 transition-none">
        <Image
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 md:w-1/2 text-center md:text-left">
        <h3 className="font-lexend text-lg md:text-xl leading-snug" style={{ color: '#343434' }} dangerouslySetInnerHTML={{ __html: title }}/>
        {description && (
          <p className="font-louis font-bold text-base md:text-lg" style={{ color: '#343434' }}>
            {description}
          </p>
        )}
      </div>

    </div>
  );
}
