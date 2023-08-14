export const metadata = {
  title: 'Contact us - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero-contact'
import Content from '@/components/contactContent'
import Contct from '@/components/cta'

export default function Contact() {
  return (
    <>
      <Hero />
      <Content />
      <Contct />
    </>
  )
}
