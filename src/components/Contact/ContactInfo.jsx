import React from "react";

const ContactInfo = () => {
    const contactItems = [
        {
            icon: '/assets/images/icons/clock.png',
            text: ['Mon/Tue : 8:00 - 4:00 | Wed : 11:00 - 7:00', 'Thu/Fri : 7:30 - 3:30'],
            link: 'https://maps.app.goo.gl/odY85EAaz46MsmD37'
        },
        {
            icon: '/assets/images/icons/location.png',
            text: ['2732 W Broadway, Suite 202, Vancouver, BC, Canada, V6k 2G4'],
            link: 'https://www.google.com/maps/place/Broadway+Smiles/@49.2637882,-123.1696892,17z/data=!3m1!5s0x548673ad1c4f3ed3:0x98761722aee0eca4!4m8!3m7!1s0x548673d66c9e6cd3:0xb50d91ec8b615dbc!8m2!3d49.2637882!4d-123.1671143!9m1!1b1!16s%2Fg%2F11n7w9dvhn?entry=ttu'
        },
        {
            icon: '/assets/images/icons/contact-phone.png',
            text: ['604-736-7377'],
            link: 'tel:604-736-7377'
        }
    ];

    return (
        <div className='flex flex-col gap-4'>
            {/* {contactItems.map((item, index) => (
                <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='group flex items-center rounded-xl text-sm sm:text-md md:text-xl p-8 gap-5 shadow-3xl'>
                    <div className='flex-shrink-0'>
                        <img src={item.icon} alt='icon' className='w-12' />
                    </div>
                    <p className='font-semibold group-hover:text-[#25B4F8] duration-200'>
                        {item.text.map((text, index) => (
                            <span key={index} className='block'>{text}</span>
                        ))}
                    </p>
                </a>
            ))} */}
            <iframe 
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.665370957613!2d-123.16968922351215!3d49.263788171389926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673d66c9e6cd3%3A0xb50d91ec8b615dbc!2sBroadway%20Smiles!5e0!3m2!1sen!2sca!4v1702326721912!5m2!1sen!2sca' 
                allowFullScreen='' 
                loading='lazy' 
                referrerPolicy='no-referrer-when-downgrade'
                className='w-full h-[250px] sm:h-[500px] md:h-full border-0 rounded-2xl shadow-2xl'
            ></iframe>
        </div>
    );
}

export default ContactInfo;