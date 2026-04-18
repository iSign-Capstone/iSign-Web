'use client'

import Image from "next/image";
import { useState } from "react";

interface DeveloperCardProps {
  imageSrc: string;
  hoverImageSrc?: string;
  name: string;
}

export default function DeveloperCard({ imageSrc, hoverImageSrc, name }: DeveloperCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full"
      >
        <Image
          src={hovered && hoverImageSrc ? hoverImageSrc : imageSrc}
          alt={name}
          width={300}
          height={400}
          className="w-full h-auto rounded-2xl object-cover transition-none"
        />
      </div>

      <p className="font-lexend text-base text-center" style={{ color: '#343434' }}>
  {name}
</p>
    </div>
  );
}
