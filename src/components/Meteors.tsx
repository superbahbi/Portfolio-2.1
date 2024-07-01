"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
}

const generateMeteorStyles = (number: number): Array<React.CSSProperties> => {
  return [...new Array(number)].map(() => {
    const left = `${Math.floor(Math.random() * 100)}vw`;
    return {
      top: -5,
      left: left,
      animationDelay: `${Math.random() * 1 + 2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`,
    };
  });
};

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    [],
  );

  useEffect(() => {
    setMeteorStyles(generateMeteorStyles(number));
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={clsx(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[290deg] animate-meteor rounded-[9999px] bg-neutral-600 shadow-[0_0_0_1px_#ffffff10]",
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[30px] -translate-y-1/2 bg-gradient-to-r from-neutral-700 to-transparent sm:w-[50px]" />
        </span>
      ))}
    </>
  );
};

export default Meteors;
