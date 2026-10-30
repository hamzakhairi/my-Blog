export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getSectionId(
  postSlug: string,
  title: string,
  index: number
) {
  return `${postSlug}-${slugify(title)}-${index}`;
}