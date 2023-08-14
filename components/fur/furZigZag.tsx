'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import FeatImage01 from '@/public/images/chemistry2.png'
import Raw from '@/public/images/raw-materials.png'
import Color1897 from '@/public/images/Color1897.png'

export default function furZigZag() {
  return (
    <section className='mt-40'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Section header */}
        <div className='max-w-3xl mx-auto text-center pb-6'>
          <h1 className='h2 mb-4'>
            PERFECTING THE{' '}
            <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
              ART
            </span>{' '}
            OF FUR COLOR FORMULATIONS
          </h1>
        </div>
        <div className='py-12 md:pt-6 md:pb-20'>
          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt='products'
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h3 className='h3 mb-3 '>
                    SINGLE, DOUBLE & TRIPLE REINFORCING
                  </h3>
                  <p className='text-xl font-medium text-gray-300 mb-4'>
                    FROM SINGLE, DOUBLE & TRIPLE REINFORCING, to oxidation
                    dyeing to bright acid dyeing for sheepskin and fine furs,
                    such as mink, fox or sable, our technological expertise and
                    creative flair has distinguished JHL as the leading supplier
                    to the world’s fur dressers and dyers.
                  </p>
                  <a
                    className='btn rounded-xl text-white font-semibold bg-pink-400 hover:bg-white shadow hover:text-pink-400 hover:border-violet-300'
                    href='/fur/products'
                  >
                    <motion.div
                      className='box'
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      PRODUCTS
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                  src={Raw}
                  width={540}
                  height={405}
                  alt='services'
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <h3 className='h3 mb-3'>RAW MATERIALS</h3>
                  <p className='text-xl font-medium text-gray-300 mb-4'>
                    JHL provides a complete line of raw materials for the fur
                    color manufacturer. Our technical staff is well versed in
                    all phases of the fur color formulator’s requirements.
                  </p>
                  <a
                    className='btn rounded-lg text-white font-semibold bg-emerald-400 hover:bg-white shadow hover:text-emerald-400 hover:border-violet-300'
                    href='/fur/services'
                  >
                    <motion.div
                      className='box'
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      SERVICES
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <Image
                  className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                  src={Color1897}
                  width={540}
                  height={405}
                  alt='Color since 1897'
                  style={{ pointerEvents: 'none' }}
                />
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h3 className='h3 mb-3'>100+ YEARS IN COLOR </h3>
                  <p className='text-xl font-medium text-gray-300 mb-4'>
                    {' '}
                    With over 100 years of experience in the chemistry of fur
                    dyeing and processing, JHL is the world leader in fur
                    technology.
                  </p>
                  <a
                    className='btn rounded-xl text-white font-semibold bg-violet-400 hover:bg-white shadow hover:text-violet-400 hover:border-violet-300'
                    href='/fur/company'
                  >
                    <motion.div
                      className='box'
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      COMPANY
                    </motion.div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
