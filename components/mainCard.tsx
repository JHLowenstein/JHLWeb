import Image from 'next/image'

import Hair from '@/public/images/hm.png'

export default function MainCard() {
  return (
    <section>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className=' md:py-20 border-t border-gray-700'>
          {/*  */}
          <div className='max-w-sm mx-auto grid gap-8 lg:grid-cols-3  items-start lg:max-w-none'>
            {/* 1st Box */}
            <div
              className='flex flex-col h-full p-6 bg-white-800 rounded-xl'
              data-aos='fade-up'
            >
              <div>
                <div className='  mb-4'>
                  <Image
                    className='rounded-lg'
                    src={Hair}
                    width={300}
                    height={200}
                    alt='Testimonial 01'
                    style={{ margin: 'auto', pointerEvents: 'none' }}
                  />
                </div>
              </div>

              <div className='text-snow-700 font-medium mt-6 pt-5 border-t border-gray-700'>
                <cite className='text-snow-200 not-italic text-xl'>
                  <span className='font-bold'>David Lowenstein</span>, President
                </cite>{' '}
              </div>
            </div>

            {/* 2nd Box */}
            <div
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
                    style={{ margin: 'auto', pointerEvents: 'none' }}
                  />
                </div>
              </div>

              <div className='text-snow-700 font-medium mt-6 pt-5 border-t border-gray-700'>
                <cite className='text-snow-200 not-italic text-xl'>
                  <span className='font-bold '>Steve Lowenstein</span>, Chairman
                </cite>{' '}
              </div>
            </div>
            {/* 3rd Box */}
            <div
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
                    style={{ margin: 'auto', pointerEvents: 'none' }}
                  />
                </div>
              </div>

              <div className='text-snow-700 font-medium mt-6 pt-5 border-t border-gray-700'>
                <cite className='text-snow-200 not-italic text-xl'>
                  <span className='font-bold '>Steve Lowenstein</span>, Chairman
                </cite>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
