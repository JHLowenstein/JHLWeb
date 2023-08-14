export const metadata = {
  title:
    'Contact Us - Jos. H. Lowenstein & Sons - Leather Products, Hair Products & Fur Products - Dye Products and Dyestuff - JHL	',
  description:
    'Since 1897, Jos. H. Lowenstein & Sons, Inc. has been providing the world of fashion with brilliant, trend-setting colors for the fur, hair and leather industries all over the world. From a modest paint store in Brooklyn, New York to the technologically driven, quality dyestuff manufacturer we are today, JHL has prided itself on providing its customers with state-of-the-art dye products and impeccable personalized service. April 2003 JHL underwent a formal ISO 9001 audit. We passed with flying colors!',
  keywords:
    'Hair color products, Hair dye solutions, Hair coloring, Hair tinting, Color treatments, Dye formulas, Hair pigmentation, Coloring techniques, Shade selection, Color customization, Vibrant hues, Permanent dyes, Temporary colors, Natural shades, Innovative formulas, Color enhancement, Trendsetting colors, Personalized shades, Professional colorists, Specialty dyes, Fashionable colors, Expressive hair hues, Custom color blends, Eco-friendly dyes, Hair color transformation',
}

import Hero from '@/components/hero-contact'
import Content from '@/components/contactContent'
import Contct from '@/components/cta'
import World from '@/components/countries'

export default function Contact() {
  return (
    <>
      <Hero />
      <Content />
      <World />
      <Contct />
    </>
  )
}
