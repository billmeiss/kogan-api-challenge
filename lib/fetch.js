export default async function fetchAllObjects(objects, page) {
  const res = await fetch(`http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com${page}`)
    .then(r => r.json());
  res.objects.map(obj => objects.push(obj));
  const nextPage = res.next;
  if (!nextPage) return objects;
  return await fetchAllObjects(objects, nextPage);
}
