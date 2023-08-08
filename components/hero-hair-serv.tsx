import HeroLogo from '@/public/images/favicon.png'
import Image from 'next/image'
import Hair from '@/public/images/hm.png'
import Chemist from '@/public/images/chemist.png'
import Leather from '@/public/images/lm.png'
import Link from 'next/link'

export default function Hero() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 relative '>
        {/* Hero content */}
        <section className='relative'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 md:mb-40'>
            <div className='pt-32 pb-12 md:pt-40 md:pb-10'>
              <div className='max-w-3xl mx-auto text-center'>
                {/* Top image */}

                {/* text content*/}
                <h1 className='h1 mb-4' data-aos='fade-up' data-aos-delay='200'>
                  Discover the{' '}
                  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    HAIR Services
                  </span>{' '}
                  offered by the staff at JHL
                </h1>
                <p
                  className='text-xl font-semibold text-gray-300 mb-8'
                  data-aos='fade-up'
                  data-aos-delay='200'
                >
                  Our team of expert chemists and technical staff is dedicated
                  to delivering exceptional{' '}
                  <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                    HAIR COLOR
                  </span>{' '}
                  formulation services.
                </p>
                <Image
                  className='rounded-xl mx-auto mt-10 '
                  src={Chemist}
                  width={300}
                  height={300}
                  alt='hair model'
                  style={{ zIndex: '2' }}
                  data-aos='fade-up'
                  data-aos-delay='250'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
