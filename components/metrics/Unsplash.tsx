import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { Unsplash } from 'types/data'
import MetricCard from 'components/metrics/Card'

export default function UnsplashCard() {
  const { data } = useSWR<Unsplash>('/api/unsplash', fetcher)

  const downloads = new Number(data?.downloads)
  const views = new Number(data?.views)
  const link = 'https://unsplash.com/@satvik007'

  return (
    <div className='my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
      <MetricCard header='Unsplash Downloads' link={link} metric={downloads} isCurrency={false} />
      <MetricCard header='Unsplash Views' link={link} metric={views} isCurrency={false} />
    </div>
  )
}
