import Image from 'next/image'

import Mosaic01 from '@/public/images/smc5.png'
import Mosaic02 from '@/public/images/smc4.png'
import Mosaic03 from '@/public/images/smc2.png'
import Mosaic04 from '@/public/images/hpm3.png'

export default function TeamImages() {
  return (
    <section className='relative -mt-8'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='max-w-3xl mx-auto'>
          <div className='relative w-full h-0 pb-40 mb-40'>
            <figure
              className='absolute h-auto'
              style={{
                top: '8.5%',
                width: '41.67%',
                maxWidth: '220px',
                zIndex: '1',
              }}
              data-aos='fade-right'
            >
              <Image
                className='md:block hidden'
                src={Mosaic03}
                width='220'
                height='240'
                alt='Team mosaic 02'
              />
            </figure>
            <figure
              className='relative mx-auto h-auto'
              style={{ width: '78.13%', maxWidth: '500px' }}
              data-aos='fade-down'
              data-aos-delay='100'
            >
              <Image
                src={Mosaic02}
                width='500'
                height='538'
                alt='Team mosaic 01'
              />
            </figure>
            <figure
              className='absolute h-auto'
              style={{
                top: '8.5%',
                right: '0',
                width: '32.55%',
                maxWidth: '220px',
              }}
              data-aos='fade-left'
              data-aos-delay='200'
            >
              <Image
                src={Mosaic01}
                width='220'
                height='240'
                alt='Team mosaic 03'
              />
            </figure>
            {/* <figure
              className='absolute h-auto'
              style={{
                bottom: '0',
                right: '20%',
                width: '25.52%',
                maxWidth: '196px',
              }}
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <Image
                src={Mosaic04}
                width='196'
                height='196'
                alt='Team mosaic 04'
              />
            </figure> */}
          </div>
        </div>
      </div>
    </section>
  )
}
