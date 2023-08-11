'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import JHL from '@/public/images/contact-banner.png'
import Call from '@/public/images/CALL.png'
import Email from '@/public/images/EMAIL.png'
import Content from '@/components/contactContent'

export default function Hero() {
  return (
    <>
      <section className='relative'>
        {/* Background image */}
        <div className='absolute inset-0'>
          <Image
            className='w-full h-full object-cover '
            src={JHL}
            width={1440}
            height={394}
            priority
            alt='About'
            style={{ zIndex: '-10' }}
          />
          <div
            className='absolute inset-0 bg-gray-900 opacity-75'
            aria-hidden='true'
          ></div>
        </div>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 relative '>
          {/* Hero content */}
          <section className='relative'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6'>
              <div className='pt-32 pb-12 md:pt-40 md:pb-10'>
                <div className='max-w-3xl mx-auto text-center'>
                  <h1
                    className='h1 mb-4'
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    Contact the{' '}
                    <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      Team
                    </span>{' '}
                    at JHL
                  </h1>
                  <p
                    className='text-xl font-medium text-white mb-10 '
                    data-aos='fade-up'
                    data-aos-delay='200'
                  >
                    We're happy to answer any questions you may have about our{' '}
                    <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                      Color Formulations,
                    </span>{' '}
                    to set up a free consultation with one of our color
                    chemists, or to provide you with any additional information
                    you may need.
                  </p>
                  {/* Top image */}
                  <div
                    className='relative inline-flex flex-col '
                    data-aos='fade-up'
                  >
                    {/* <Image
                     className='rounded-xl my-3 w-full h-full object-cover '
                     src={HeroLogo}
                     width={196}
                     height={196}
                     alt='404'
                     style={{ zIndex: '2' }}
                   /> */}
                    {/* <svg
                     className='w-20 h-20 fill-current text-pink-400 absolute top-0 right-0 -mr-6'
                     width='84'
                     height='80'
                     xmlns='http://www.w3.org/2000/svg'
                   >
                     <path
                       d='M80 45.876l-3.434-2.142c-.313-.196-.636-.374-.95-.566l.09-.385c-.217.02-.433.034-.649.053a113.732 113.732 0 00-29.876-12.614l26.527-11.208 7.776-3.285-8.445-.716a283.299 283.299 0 00-56.645.881c-9.887 1.17-14.58 3.26-14.388 4.343.202 1.165 5.204 1.342 14.918.216a295.374 295.374 0 0146.206-1.615l-22.516 9.815-6.55 2.855 7.001 1.372c10.347 2.03 20.402 5.58 29.777 10.452a380.058 380.058 0 01-38.52.822l-5.717-.169 4.521 3.469c5.697 4.371 11.358 8.727 16.633 13.466 4.051 3.638 7.87 7.52 11.232 11.74a100.788 100.788 0 00-21.646-4.049c-2.938-.211-4.42.091-4.428.405-.01.339 1.433.688 4.317.94a98.562 98.562 0 0123.591 5.116c.36.492.722.984 1.069 1.487l.673-.864c.181.066.364.126.545.194l.653.246-.388-.584c-.107-.16-.221-.315-.329-.475l.68-.871c-.556-.198-1.116-.378-1.674-.566-3.728-5.23-8.137-9.96-12.834-14.337-4.72-4.4-9.732-8.465-14.761-12.482 13.89.587 27.83.417 41.73-.533.203.12.411.23.613.35l.094-.396c.366-.025.733-.045 1.1-.072L80 45.876z'
                       fill='#ff66ff'
                       fillRule='evenodd'
                     />
                   </svg> */}
                  </div>
                  {/* text content*/}
                </div>
              </div>
            </div>
          </section>
          <section className=''>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 md:mb-20'>
              <div className=''>
                {/*  */}
                <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-2  items-start lg:max-w-none'>
                  {/* Hair Box */}
                  <div
                    className='flex flex-col h-full px-3 pb-6bg-white-800 rounded-xl'
                    data-aos='fade-up'
                  >
                    <motion.div
                      className='box'
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Link href='tel:+17183885410'>
                        <Image
                          className='rounded-lg transition duration-700 ease-out'
                          src={Call}
                          width={300}
                          height={200}
                          alt='hair model'
                          style={{
                            margin: 'auto',
                            pointerEvents: 'none',
                            zIndex: '12',
                          }}
                        />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Fur Box */}
                  <div
                    className='flex flex-col h-full px-3 pb-6 bg-white-800 rounded-xl'
                    data-aos='fade-up'
                  >
                    <motion.div
                      className='box'
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Link href='/fur'>
                        <Image
                          className='rounded-lg'
                          src={Email}
                          width={300}
                          height={200}
                          alt='fur model'
                          style={{
                            margin: 'auto',
                            pointerEvents: 'none',
                          }}
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Content />
        </div>
      </section>
    </>
  )
}