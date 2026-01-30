// Note: Meet The Team Component
'use client'
import React from 'react';
import { TeamCarousel } from '../TeamCarousel';
import Link from 'next/link';


const MeetTeam = () => {
    return (
        <section className='bg-[#0184C9] py-14'>
            <div className='flex flex-col justify-center items-center mx-auto w-[80%] md:w-[90%]'>
                <div className='flex flex-col justify-center items-center text-start gap-12'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-white font-bold text-start'>Meet The Team</h2>
                    <p className='md:text-xl max-w-7xl text-start text-white'>
                        Meet the Heart of our Dental Family! Our team of dedicated dentists, hygienists,
                        assistants, and admins <br /> are here to welcome you with warm smiles. Together, we
                        are committed to promoting optimal health for <br /> your teeth, gums, and bite. Scroll
                        through to get to know the friendly faces behind the masks.  
                    </p>
                    <TeamCarousel />
                </div>
            </div>
        </section>
    );
};

export default MeetTeam;
