import { createSocialImage, socialImageSize } from "./social-image";

export const alt = "undefined.tools by Oliver Carabia — mlfomo, Backstep, Memento, and Shotgun";
export const size = socialImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return createSocialImage();
}
