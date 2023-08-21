'use client'
import HeroLogo from '@/public/images/favicon.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

import BG from '@/public/images/jhl-hero-3.png'
import Hair from '@/public/images/hair-hero.png'
import Fur from '@/public/images/fur-hero.png'
import Leather from '@/public/images/leather-hero.png'
import Link from 'next/link'

export default function HeroHome() {
  return (
    <section className='pb-40 '>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 md:mb-20 block md:hidden'>
        <div className=''>
          {/*  */}
          <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-3  items-start lg:max-w-none'>
            {/* Hair Box */}
            <div
              className='flex flex-col h-full px-6 pb-6bg-white-800 rounded-xl'
              data-aos='fade-up'
            >
              <motion.div
                className='box'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Link href='/hair'>
                  <Image
                    className='rounded-lg transition duration-700 ease-out'
                    src={Hair}
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
              className='flex flex-col h-full px-6 pb-6 bg-white-800 rounded-xl'
              data-aos='fade-up'
            >
              <motion.div
                className='box'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Link href='/fur'>
                  <Image
                    className='rounded-lg'
                    src={Fur}
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
            {/* <div
            className='flex flex-col h-full p-6 bg-white-800 rounded-xl'
            data-aos='fade-up'
          >
            <div>
              <div className='  mb-4'>
                <Image
                  className='rounded-xl'
                  src={Hair}
                  width={300}
                  height={200}
                  alt='Testimonial 01'
                  style={{
                    margin: 'auto',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>

            <div data-aos='fade-up' data-aos-delay='400'>
              <a
                className='btn text-xl text-white font-semibold bg-emerald-300 rounded-xl hover:bg-emerald-400 w-full mb-10 sm:w-auto '
                href='/fur'
              >
                FUR
              </a>
            </div>
          </div> */}
            {/* Leather Box */}
            <div
              className='flex flex-col h-full px-6 pb-6 bg-white-800 rounded-xl'
              data-aos='fade-up'
            >
              <motion.div
                className='box'
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Link href='/leather'>
                  <Image
                    className='rounded-lg'
                    src={Leather}
                    width={300}
                    height={200}
                    alt='leather model'
                    style={{
                      margin: 'auto',
                      pointerEvents: 'none',
                    }}
                  />
                </Link>
              </motion.div>
            </div>
            {/* <div
            className='flex flex-col h-full p-6 bg-white-800 rounded-xl'
            data-aos='fade-up'
          >
            <div>
              <div className='  mb-4'>
                <Image
                  className='rounded-xl'
                  src={Hair}
                  width={300}
                  height={200}
                  alt='Testimonial 01'
                  style={{
                    margin: 'auto',
                    pointerEvents: 'none',
                  }}
                />
              </div>
            </div>

            <div data-aos='fade-up' data-aos-delay='400'>
              <a
                className='btn  text-xl text-white font-semibold bg-violet-300 rounded-xl hover:bg-violet-400 w-full mb-10 sm:w-auto '
                href='/leather'
              >
                LEATHER
              </a>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
