/**
 * Fort Myers Field Guide: use the supplied official My Huckleberry Life
 * fisherman-and-water wordmark as the primary brand identifier.
 */
const MARK_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663816397374/XryRTEDucoaMiDEt.png";

export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <img
      src={MARK_URL}
      width="230"
      height="154"
      className={className}
      alt="My Huckleberry Life"
      decoding="async"
    />
  );
}
