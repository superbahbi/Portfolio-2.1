import { ogContentType, ogSize, renderOgImage } from "@/lib/og-image";

export const alt = "Bobby Lee";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage();
}
