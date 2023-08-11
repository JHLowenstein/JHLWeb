export const metadata = {
  title: 'Features - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/fur/hero-fur'
import FurZigZag from '@/components/fur/furZigZag'
import Newsletter from '@/components/newsletter'
import Particles from '@/components/particles'

export default function Fur() {
  return (
    <section>
      <Hero />
      <Particles
        className='absolute inset-0 -z-10 animate-fade-in'
        quantity={200}
      />

      <FurZigZag />
      <Newsletter />
    </section>
  )
}
