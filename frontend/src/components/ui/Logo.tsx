import Image from 'next/image';
import React from 'react';

const Logo = ({ w, h }: { w?: number; h?: number }) => {
  return (
    <div className="flex items-center  gap-1 sm:gap-2 md:gap-4">
      <Image
        src="/one-logo.png"
        alt="Logo Icon"
        width={w ?? 40}
        height={h ?? 40}
        className="object-contain h-auto w-auto max-w-[40px] sm:max-w-[50px] md:max-w-[60px]"
        priority
      />
      <Image
        src="/logo-text.png"
        alt="Logo Text"
        width={w ?? 100}
        height={h ?? 40}
        className="object-contain h-auto w-auto max-w-[100px] sm:max-w-[110px] md:max-w-[130px]"
        priority
      />
    </div>
  );
};

export default Logo;
