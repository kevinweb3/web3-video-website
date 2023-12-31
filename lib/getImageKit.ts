/**
 *
 * @param url - URL to be converted to ImageKit URL
 * @param name - Transformation name
 * @returns ImageKit URL
 */
const IMAGEKIT_URL =
  'https://ik.imagekit.io/' + process.env.NEXT_PUBLIC_IMAGEKIT_ID + '/'
const imagekitURL = (url: string, name?: string, blur?: string): string => {
  return blur
    ? `${IMAGEKIT_URL}/tr:di-placeholder.webp,w-30,h-30,bl-6/${url}`
    : name
    ? `${IMAGEKIT_URL}/tr:n-${name},tr:di-placeholder.webp/${url}`
    : `${IMAGEKIT_URL}/tr:di-placeholder.webp/${url}`;
};

export default imagekitURL;