import React from "react";
import Instagram from "../Home/Instagram";

const assistants = [
    {
        name: 'Oxana Popkova',
        title: 'Office Administrator',
        img: '/assets/images/staff-photos/our-team-compressed/front-desk/oxana2.jpg'
    },
    {
        name: 'Alifa Rachma',
        title: 'Office Administrator',
        img: '/assets/images/staff-photos/our-team-compressed/front-desk/alifa2.jpg'
    },
];


const FrontDesk = () => {
    return (
        <div>
            <section className='py-14 bg-[#E5F6FF]'>
                <div className='flex flex-col md:flex-row justify-center items-center mx-12 sm:mx-18 md:mx-36 gap-4 md:gap-0'>
                    <div className='flex flex-col flex-1 gap-12 px-5'>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl text-black text-left font-bold'>Our Fantastic <br></br> <span className="text-[#0184C9]">Front Desk Team</span></h2>
                        <p className='text-lg md:text-xl max-w-6xl'>
                            Oxana and Alifa are dedicated to help you figure out all the logistics related to your appointments.
                            They are experts in helping you understand the fees of your treatments and guiding you in dealing with your insurance providers.
                        </p>
                    </div>
                    <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:p-12 md:space-x-6 rounded-box'>
                        {
                            // Map through the assistants array and return a div for each assistant
                            assistants.map((assistant, index) => {
                                return (
                                    <div key={index} className='relative flex flex-col items-center justify-center rounded-lg drop-shadow-xl '>
                                        <img src={assistant.img} alt={assistant.name} className='object-cover rounded-2xl w-72 min-h-[25rem]' />
                                        <div className='absolute bottom-0 bg-[#fffefe] text-white text-center rounded-bl-lg rounded-br-lg p-4 w-[100%]'>
                                            <h3 className='text-xl font-medium text-[#0184C9]'>{assistant.name}</h3>
                                            <p className='text-gray-400'>{assistant.title}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
            <Instagram/>
        </div>
        
    );
};

export default FrontDesk;
