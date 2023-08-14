'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import BKBridge from '@/public/images/bk-bridge.png'
import FeatImage02 from '@/public/images/fur-hero.png'
import FeatImage03 from '@/public/images/leather-hero.png'

export default function Zigzag() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='py-12 md:py-20 '>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <h2 className='h2 mb-4'>
              Bringing{' '}
              <span className='text-transparent bg-clip-text  bg-gradient-to-r from-pink-300 via-emerald-300 to-violet-300 '>
                COLOR
              </span>{' '}
              to life
            </h2>
            <p className='text-xl text-gray-400'>
              Through a combination of strategic decisions, technological
              advancements, and a commitment to quality, JHL has effectively
              become the top leader of Color Technology.
            </p>
          </div>
          {/* Items */}
          <div className='grid gap-20'>
            {/* 1st item */}
            <div className='md:grid md:grid-cols-12 md:gap-6 items-center'>
              {/* Image */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
                data-aos='fade-up'
              >
                <motion.div
                  className='box'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Image
                    className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                    src={BKBridge}
                    width={540}
                    height={405}
                    alt='Features 01'
                  />
                </motion.div>
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h3 className='h3  font-semibold mb-2'>
                    A Tradition of Excellence for Over 100 Years
                  </h3>
                  <p className='text-xl font-medium text-gray-200'>
                    SINCE 1897, Jos. H. Lowenstein & Sons, Inc. has been
                    providing the world of fashion with brilliant, trend-setting
                    colors for the fur, hair and leather industries all over the
                    world. From a modest paint store in Brooklyn, New York to
                    the technologically driven, quality dyestuff manufacturer we
                    are today, JHL has prided itself on providing its customers
                    with state-of-the-art dye products and impeccable,
                    personalized service.
                    <br />
                  </p>
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
                <motion.div
                  className='box'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Image
                    className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                    src={FeatImage02}
                    width={540}
                    height={405}
                    alt='Features 01'
                  />
                </motion.div>
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-left'
              >
                <div className='md:pl-4 lg:pl-12 xl:pl-16'>
                  <h3 className='h3  font-semibold mb-2'>
                    Global Solutions, Local Expertise
                  </h3>
                  <p className='text-xl font-medium text-gray-200'>
                    Our customers range from multinational, world-renowned
                    corporations to small, privately held companies. We have the
                    capabilities to meet large, multi-ton orders, as well as
                    small one-time requests. No matter what your dyeing needs,
                    whether for consultation, formulation, new color development
                    or product line enhancements, the chemists in all our
                    laboratories are available to help solve your specific
                    requirements.
                  </p>
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
                <motion.div
                  className='box'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Image
                    className='max-w-full rounded-xl mx-auto md:max-w-none h-auto'
                    src={BKBridge}
                    width={540}
                    height={405}
                    alt='Features 01'
                  />
                </motion.div>
              </div>
              {/* Content */}
              <div
                className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6'
                data-aos='fade-right'
              >
                <div className='md:pr-4 lg:pr-12 xl:pr-16'>
                  <h3 className='h3  font-semibold mb-2'>
                    State-of-The Art Facilities Around the World Complement Our
                    Innovative Color
                  </h3>
                  <p className='text-xl font-medium text-gray-200'>
                    AT JHL, we continuously update our five research and quality
                    control laboratories and manufacturing capabilities in our
                    corporate headquarters in New York to keep pace with
                    technological advancements. State-of-the-art
                    instrumentation, including Gas Chromatographs, High-pressure
                    Liquid Chromatographs, Infrared Spectrophotometers and color
                    measurement software assure quality and consistency in every
                    product. With over 100,000 square feet of manufacturing and
                    warehouse space, a global network of distribution
                    facilities, scientists, product marketing specialists,
                    expert sales agents, customer service representatives, and
                    the capabilities to meet large multi-ton orders, as well as
                    small one color requests, JHL is uniquely prepared to meet
                    your most demanding requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
