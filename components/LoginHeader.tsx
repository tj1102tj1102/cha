'use client';

import Image from 'next/image';

export default function LoginHeader() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-center bg-transparent px-7 sm:px-15 py-10">
      <Image src="https://i.postimg.cc/Z58yDzMz/jdjdjdjkd.webp" width={174} height={32} className="w-[174px] h-8" alt="logo" />
    </div>
  );
}
