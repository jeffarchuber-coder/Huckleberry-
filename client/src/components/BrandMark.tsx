/**
 * Fort Myers Field Guide: the bold house-and-huckleberry mark stays simple,
 * warm, and readable at small sizes; it never competes with the wordmark.
 */
const MARK_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/ZyfWFJIeoDYmFyeJ.webp";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={MARK_URL}
      width="48"
      height="48"
      className={className}
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  );
}
