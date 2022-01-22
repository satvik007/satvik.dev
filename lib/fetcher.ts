import {FetcherResponse} from "swr/dist/types";

export default async function Fetcher(request: RequestInfo): Promise<{ count ?: number }> {
  const res = await fetch(request)

  return res.json()
}
