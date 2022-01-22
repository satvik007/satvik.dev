export default async function Fetcher(request: Request): Promise<{ count?: number }> {
  const res = await fetch(request)

  return res.json()
}
