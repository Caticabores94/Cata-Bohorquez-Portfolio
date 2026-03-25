export function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function getExternalLinkProps(href: string) {
  return isExternalHref(href)
    ? {
        rel: "noopener noreferrer",
        target: "_blank" as const
      }
    : {};
}
