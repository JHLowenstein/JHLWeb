export const metadata = {
  title: 'Leather Products - Open PRO',
  description: 'Page description',
}

import PricingTables from '@/components/pricing-tables'
import Faqs from '@/components/faqs'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'

export default function Leather() {
  return (
    <>
      <PricingTables />
      <Faqs />
      <Testimonials />
      <Cta />
    </>
  )
}
