export const metadata = {
  title: 'About us - Open PRO',
  description: 'Page description',
}

import HeroAbout from '@/components/hero-about'

import Timeline from '@/components/fur/fur-timeline'
import Team from '@/components/team'
import World from '@/components/countries'

import Contact from '@/components/cta-contact'

export default function Company() {
  return (
    <>
      <HeroAbout />

      <Timeline />
      <Team />
      <World />
      <Contact />
    </>
  )
}
