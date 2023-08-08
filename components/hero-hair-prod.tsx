import HeroLogo from '@/public/images/favicon.png'
import Image from 'next/image'
import Hair from '@/public/images/hm.png'
import Fur from '@/public/images/fm.png'
import Leather from '@/public/images/lm.png'
import Link from 'next/link'

export default function Hero() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative '>
        {/* Hero content */}
        <section className='relative'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6'>
            <div className='pt-32 pb-12 md:pt-40 md:pb-10'>
              <div className='max-w-3xl mx-auto text-center'>
                {/* Top image */}

                {/* text content*/}
                <h1 className='h1 mb-4' data-aos='fade-up' data-aos-delay='200'>
                  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    BRIGHT BOLD UNIQUE
                  </span>{' '}
                  <br />
                  <span className='text-pink-300'>HAIR PRODUCTS</span>
                </h1>
                <p
                  className='text-xl font-semibold text-white mb-8'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  the perfect{' '}
                  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    HAIR PRODUCTS
                  </span>{' '}
                  are born in our color labs{' '}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
