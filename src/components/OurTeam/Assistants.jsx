import React from 'react';

const assistants = [
    {
        name: 'Anabelle Baquero',
        title: 'Certified Dental Assistant',
        img: '/assets/images/staff-photos/our-team-compressed/assistants/anabelle.jpg'
    },
    {
        name: 'Lois Locherty',
        title: 'Certified Dental Assistant',
        img: '/assets/images/staff-photos/our-team-compressed/assistants/lois.jpg'
    },
    {
        name: 'Aisling Keane',
        title: 'Dental Assistant',
        img: '/assets/images/staff-photos/our-team-compressed/assistants/aisling.jpg'
    },
];


const Assistants = () => {
    return (
        <section className='bg-[#0184C9] py-[5rem]'>
            <div className='flex flex-col justify-center items-center mx-12 sm:mx-18 md:mx-36 gap-4 md:gap-0'>
                <div className='flex flex-col justify-center text-white items-center text-center gap-12'>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl text-center align-middle font-bold'>Our Awesome Assistants</h2>
                    <p className='text-lg text-center md:text-xl max-w-5xl mt-0'>
                        We would love for you to get to know our assistants more. They will be accompanying the dentist in all your visits. They are involved in your care and can help answer any questions about your procedures. They would love to know how they can make your visit more comfortable.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row md:p-12 space-y-4 md:space-y-0 md:space-x-6 rounded-box'>
                    {
                        // Map through the assistants array and return a div for each assistant
                        assistants.map((assistant, index) => {
                            return (
                                <div key={index} className='relative flex flex-col items-center justify-center drop-shadow-lg rounded-lg'>
                                    <img src={assistant.img} alt={assistant.name} className='object-cover rounded-lg w-72 min-h-[25rem]' />
                                    <div className='absolute bottom-0 bg-white text-white text-center rounded-bl-lg rounded-br-lg p-4 w-[100%]'>
                                        <h3 className='text-xl font-medium text-[#0184C9]'>{assistant.name}</h3>
                                        <p className='text-black'>{assistant.title}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Assistants;
