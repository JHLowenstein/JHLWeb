export const metadata = {
  title: 'About us - Open PRO',
  description: 'Page description',
}

import HeroAbout from '@/components/hero-about'
import Timeline from '@/components/hair/hair-timeline'
import Team from '@/components/team'
import Zig from '@/components/company-zigzag'
import World from '@/components/countries'

import Newsletter from '@/components/newsletter'

export default function Company() {
  return (
    <>
      <HeroAbout />
      <Zig />
      <Timeline />
      <Team />
      <World />
    </>
  )
}
