import React from 'react';
import ContactForm from './ContactForm';
import Image from 'next/image';
const GetInTouch = () => {
  return (
    <section>
      <div className='flex flex-col w-full lg:flex-row'>
          <div className='relative' style={{height:'100vw', maxHeight:'930px', width:'100%'}}>
            <Image fill objectFit="cover" src='/assets/images/getintouchimageone.jpg' alt="First Image"/>
          </div>
          <div className='bg-white h-fit'>
            <ContactForm/>
          </div>
      </div>
    </section>
  )
}

export default GetInTouch;
