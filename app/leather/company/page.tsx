export const metadata = {
  title: 'About us - Open PRO',
  description: 'Page description',
}

import HeroAbout from '@/components/hero-about'

import Timeline from '@/components/leather/leather-timeline'
import Content from '@/components/company-zigzag'
import Team from '@/components/team'
import World from '@/components/countries'

import Contact from '@/components/cta-contact'

export default function Company() {
  return (
    <>
      <HeroAbout />
      <Content />
      <Timeline />
      <Team />
      <World />
      <Contact />
    </>
  )
}
