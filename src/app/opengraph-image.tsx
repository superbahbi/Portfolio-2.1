import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Bobby Lee | Full Stack Software Engineer";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage();
}
