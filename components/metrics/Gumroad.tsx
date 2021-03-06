import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { Gumroad } from 'types/data'
import MetricCard from 'components/metrics/Card'

export default function GumroadCard() {
  const { data } = useSWR<Gumroad>('/api/gumroad', fetcher)

  const sales = new Number(data?.sales)
  const link = 'https://gumroad.com/satvik007'

  return <MetricCard header='Gumroad Sales' link={link} metric={sales} isCurrency />
}
