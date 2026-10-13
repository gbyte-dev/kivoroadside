import { redirect } from "next/navigation";

// /fmg opens the first step, keeping any query (such as ?zipcode=)
export default async function FmgIndexPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(await searchParams)) {
    for (const item of [value].flat()) if (item !== undefined) query.append(key, item);
  }
  const queryString = query.toString();
  redirect(queryString ? `/fmg/vehicle?${queryString}` : "/fmg/vehicle");
}
