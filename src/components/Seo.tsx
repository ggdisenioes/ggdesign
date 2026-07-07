import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://ggdisenio.es";

interface SeoProps {
  title: string;
  description: string;
  noindex?: boolean;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Per-route SEO: keeps title, description, canonical and social tags
 * in sync with the current page. Render once per page.
 */
export function Seo({ title, description, noindex = false }: SeoProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    setMeta("property", "og:url", canonicalUrl);

    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noindex) {
      setMeta("name", "robots", "noindex");
    } else if (robots) {
      robots.remove();
    }
  }, [title, description, pathname, noindex]);

  return null;
}
