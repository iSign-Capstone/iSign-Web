import Image from "next/image";

interface TutorialStepProps {
  imageSrc: string;
  step: number;
  line1: string;
  line2: string;
}

export default function TutorialStep({ imageSrc, step, line1, line2 }: TutorialStepProps) {
  return (
    <div className="reveal flex flex-col items-center gap-6 pb-15">

      {/* Image */}
      <Image
        src={imageSrc}
        alt={line1 + ' ' + line2}
        width={200}
        height={200}
        className="w-[350px] h-auto rounded-2xl object-cover transition-none hover:scale-110 active:scale-95"
      />

      {/* Step number + text */}
      <div className="reveal flex items-center gap-3 mx-auto w-fit">
        <span
          className="font-lexend leading-none flex-shrink-0"
          style={{ color: '#343434', fontSize: '80px' }}
        >
          {step}
        </span>

        <div className="reveal flex flex-col justify-center">
          <span className="font-louis font-bold text-xl leading-snug" style={{ color: '#343434' }}>
            {line1}
          </span>
          <span className="font-louis font-bold text-lg leading-snug" style={{ color: '#343434' }}>
            {line2}
          </span>
        </div>
      </div>

    </div>
  );
}
