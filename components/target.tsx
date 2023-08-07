import Image from 'next/image'
import Link from 'next/link'
import Color1897 from '@/public/images/Color1897.png'

export default function Target() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 border-t border-gray-800'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-20'>
            <h2 className='h2' data-aos='fade-up'>
              PERFECTING THE ART OF COLOR FORMULATIONS
            </h2>
          </div>

          {/* Items */}
          <div className='grid gap-20' data-aos-id-target>
            {/* Item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-anchor='[data-aos-id-target]'
              >
                <Image
                  className='mx-auto rounded-xl md:max-w-none'
                  src={Color1897}
                  width={540}
                  height={520}
                  alt='Features 02'
                />
              </div>

              {/* Content */}
              <div className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'>
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <div
                    className='font-bold text-xl text-purple-600 mb-2'
                    data-aos='fade-left'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      BRIGHT BOLD BEAUTIFUL
                    </span>{' '}
                  </div>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='200'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h5 className='h5 text-lg font-semibold mb-2'>
                      Color for <span className='text-pink-300'>HAIR</span>
                    </h5>
                    <p className='text-lg text-gray-400'>
                      JHL provides a complete line of raw materials for the hair
                      color manufacturer.{' '}
                      <Link href='/hair'>
                        {' '}
                        <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                          Learn more
                        </span>{' '}
                      </Link>
                    </p>
                  </div>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='400'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h5 className='h5 text-lg font-semibold mb-2'>
                      Color for <span className='text-emerald-300'>FUR</span>
                    </h5>
                    <p className='text-lg text-gray-400'>
                      With over 100 years of experience in the chemistry of fur
                      dyeing and processing, JHL is the world leader in fur
                      technology.{' '}
                      <Link href='/fur'>
                        {' '}
                        <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                          Learn more
                        </span>{' '}
                      </Link>
                    </p>
                  </div>
                  <div
                    className='mt-6'
                    data-aos='fade-left'
                    data-aos-delay='600'
                    data-aos-anchor='[data-aos-id-target]'
                  >
                    <h5 className='h5 text-lg font-semibold mb-2'>
                      Color for <span className='text-violet-300'>LEATHER</span>
                    </h5>
                    <p className='text-lg text-gray-400'>
                      JHL supplies a complete range of chemicals and dyes from
                      the wet blue to finishing stage.{' '}
                      <Link href='/leather'>
                        {' '}
                        <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                          Learn more
                        </span>{' '}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
