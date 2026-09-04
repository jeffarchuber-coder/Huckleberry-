/**
 * Fort Myers Field Guide: every page declares a plain, accurate title,
 * description, and canonical URL so search and social context stay trustworthy.
 */
import { useEffect } from "react";

const ORIGIN = "https://myhuckleberrylife.com";

function setMeta(selector: string, attribute: string, value: string) {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  if (element) element.setAttribute(attribute, value);
}

export function PageMeta({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}) {
  useEffect(() => {
    const url = `${ORIGIN}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="robots"]', "content", noIndex ? "noindex,follow" : "index,follow,max-image-preview:large");
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
  }, [description, noIndex, path, title]);

  return null;
}
