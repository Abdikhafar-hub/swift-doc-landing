export const SITE_URL = (process.env["NEXT_PUBLIC_SITE_URL"] || "https://swiftdoc.co.ke").replace(
  /\/$/,
  "",
);

export function canonicalPath(path = "/") {
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path === "" ? "/" : path;
}

export function canonicalUrl(path = "/") {
  return `${SITE_URL}${canonicalPath(path)}`;
}

export function ogImageUrl(path = "/favicon.png") {
  if (path.startsWith("http")) {
    return path;
  }
  return canonicalUrl(path);
}
