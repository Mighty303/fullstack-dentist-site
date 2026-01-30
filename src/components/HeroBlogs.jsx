import React from 'react'

const HeroBlogs = (props) => {
  return (
  <section className='relative overflow-x-hidden w-screen h-[64vh] pt-14'>
    <img src={props.imageUrl} alt="banner" className='absolute w-full h-full object-cover object-top top-0 left-0 z-0' />
    <div className='absolute w-full h-full top-0 left-0 bg-gray-950 opacity-60 z-10'></div>
    <div className='relative z-20 flex flex-col justify-center items-center text-white font-bold gap-8 w-full h-full'>
      <div className='flex flex-col items-center justify-center gap-8'>
        <h1 className='text-2xl sm:text-3xl md:text-6xl text-center'>{props.title}</h1>
        <span className='text-md sm:text-md md:text-lg my-2 font-black font-thin'>Home {'>'} {props.page} {props.blogs ? `> ${props.blogs}` : ''}</span>
      </div>
    </div>
  </section>
  )
}

export default HeroBlogs;