"use client";
import Image from "next/image";
import { encode } from "qss";
import React from "react";
type LinkPreviewProps = {
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  url,
  className,
  width = 600, // Adjusted width for Twitter header
  height = 200, // Adjusted height for Twitter header
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`twitter-header ${className}`}>
      {isMounted ? (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            priority={true}
            alt="hidden image"
          />
        </div>
      ) : null}

      <div className="header-background">
        <Image
          src={isStatic ? imageSrc : src}
          width={width}
          height={height}
          quality={quality}
          priority={true}
          className="rounded-t-lg"
          alt="preview image"
        />
      </div>
    </div>
  );
};
