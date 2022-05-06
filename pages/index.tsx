import MainLayout from 'components/../layouts/MainLayout'
import Script from 'next/script'
import HomeHeader from 'components/HomeHeader'

export default function Home() {
  return (
    <MainLayout>
      <HomeHeader />
    </MainLayout>
  )
}
