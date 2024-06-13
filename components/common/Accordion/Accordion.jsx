'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Accordion({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#D9D9D9] px-6 py-4 w-full text-xl font-semibold flex justify-between"
      >
        <p>{title}</p>
        <Image
          src="/images/poligon.svg"
          alt="poligon"
          width={30}
          height={30}
          className={`${
            isOpen ? '' : 'rotate-180'
          } transition-all duration-200`}
        />
      </button>
      {isOpen ? (
        <div className="bg-[#F4F4F4] px-10 py-5">{children}</div>
      ) : null}
    </div>
  );
}
