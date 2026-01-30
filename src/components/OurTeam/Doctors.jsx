'use client'
import React, { useState } from 'react';

const doctors = [
    {
        name: 'Dr. Dhia Mahmud',
        title: 'Doctor of Dental Medicine',
        img: '/assets/images/staff-photos/doctors/dhia.png',
        bio: "I'm Dr. Dhia, your dedicated dentist and proud owner of this community-focused dental clinic nestled in the heart of beautiful Kitsilano. As a <strong>preventative dentist</strong>, my passion is to empower my patients with the knowledge to prevent dental issues. At Broadway Smiles, we believe in the power of education to pave the way for the best oral health. It's not just about fixing problems; it's about <strong>preventing them from occurring in the first place.</strong>"
    },
    {
        name: 'Dr. Asif Tejani',
        title: 'Doctor of Dental Medicine',
        img: '/assets/images/staff-photos/doctors/asif.png',
        bio: 'Dr. Asif Tejani completed his dental degree and post-graduate <strong>AEGD [Advanced Education in General Dentistry]</strong> program at the University of Pennsylvania.  He relocated to Vancouver to complete his GPR [General Practice Residency] program at UBC.  However, one year was just not enough to hike all the mountains, kayak all the fjords, bike all the trails and swim in all the water bodies of this beautiful province.  He has thus resigned himself to live here as long as BC will have him.  <p>Asif served as <strong>Clinic Coordinator of the VGH, Department of Dentistry for 15 years</strong></p> and is currently a consultant and clinician at Oral Oncology, BC Cancer Hospital.  He is passionate about a holistic approach to dental care and likes to believe that he works hard and plays hard too.'
    },
    {
        name: 'Melanie Lee',
        title: 'Registered Dental Hygienist',
        img: '/assets/images/staff-photos/doctors/melanie.png',
        bio: 'Melanie came to Vancouver to study biology at <strong>UBC followed by dental hygiene at VCC</strong>.  She enjoys meeting new people in the clinic as well as reconnecting with familiar faces. Melanie values her work as part of a <strong>collaborative process with clients to achieve their oral health care goals</strong>. Outside the clinic, she can be found cooking, gardening, nordic skiing, or cycling the local roads and gravel trails.  '
    },
    {
        name: 'Jen Pendleton',
        title: 'Registered Dental Hygienist',
        img: '/assets/images/staff-photos/doctors/jen.png',
        bio: 'Jen received her <strong>diploma in dental hygiene with honours from the Canadian National Institute of Health in Ottawa</strong>. Her passion for dentistry started at an early age in her parent’s dental office in Kelowna where she spent her free time exploring and gathering knowledge about the profession. She strives to provide gentle, efficient, and effective treatment while developing <strong>fun and interactive environment for her patients</strong>. <p>When Jen is not in the office, she is usually planning her next trip to other countries all over the world. <strong>Since 2015</strong>, she has traveled from Europe to Asia and everything in between and lived in Australia for 2 years. She is happy to call Vancouver home and is continuing to explore everything our beautiful city has to offer </p>.'
    }
];

const Doctors = () => {
    const [showMore, setShowMore] = useState(Array(doctors.length).fill(false));

    function toggleShowMore(index) {
        setShowMore(showMore.map((item, i) => i === index ? !item : item));
    }

    return (
        <section className='py-14 px-12 lg:w-[70%] mx-auto flex flex-col items-center justify-center gap-14'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl text-black font-bold'>Meet Our <span className='text-[#0184C9]'>Providers</span></h2>
            {doctors.map((doctor, index) => (
                <div key={index} className={`flex flex-col items-center md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <img className='w-full sm:w-[55%] md:w-72 md:h-full rounded-lg' alt={`${doctor.name} - ${doctor.title}`} src={doctor.img} />
                    <div className='flex flex-col sm:w-[55%] md:w-full items-start gap-4'>
                        <span className='text-2xl font-bold'>{doctor.name}</span>
                        <span className='text-lg text-center text-[#0184C9] font-medium'>{doctor.title}</span>
                        <p className={'hidden md:block text-lg'}>
                            {<span dangerouslySetInnerHTML={{ __html: doctor.bio }}></span>}
                        </p>
                        <p className={'visible md:hidden text-lg'}>
                            {showMore[index] ? <span dangerouslySetInnerHTML={{ __html: doctor.bio }}></span> : <span dangerouslySetInnerHTML={{ __html: `${doctor.bio.slice(0, 200)}...` }}></span>}
                        </p>
                        <button onClick={() => toggleShowMore(index)} className='visible md:hidden text-lg text-[#0184C9]'>
                            {showMore[index] ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Doctors;
