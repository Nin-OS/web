export default function (meta) {
  if (meta.description) meta.ogDescription = meta.description;
  useSeoMeta(meta);
}
