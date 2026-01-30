'use client'
import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';

const google_reviews = [
    {
        name: 'Lynda Marie Neilson',
        description: 'Awesome welcoming dentist office that plays fun music when the dentist works on you!  You pick the artist and a variety of songs will be played.  Hygienists are great to and LISTEN to patient needs and concerns.',
        pfp: '/assets/images/reviews/lynda.png'
    },
    {
        name: 'Jose Mario Ventura',
        description: 'Great experience from start to end. Warm and polite on the telephone, welcoming and efficient at the front desk, and a great service on the dental chair. Recommended!',
        pfp: '/assets/images/reviews/jose.png'
    },
    {
        name: 'Shalaw Kuestany',
        description: 'Dr. Dhia one of the best doctor in Vancouver very great job and very nice stuff I really recommended definitely I will coming back 100%',
        pfp: '/assets/images/reviews/shalaw.png'
    },
    {
        name: 'Klimentiy Kenzikeyev',
        description: 'Nice dental clinic with a great customer service. Dr. Dhia is a pro at his craft.',
        pfp: '/assets/images/reviews/klimentiy.png'
    },
    {
        name: 'Ahmed Ali',
        description: 'Dr. Dhia has been patient with me, and is very knowledgeable. This is my go-to clinic!',
        pfp: '/assets/images/reviews/ahmed.png'
    },
    {
        name: 'Ali Yekta',
        description: 'I usually have a hard time when I go to the dentist, but with with Dr. Dhia it was very easy. He was caring and considerate during the procedure. He always asked how I felt and listened to my concerns, which made me feel comfortable. I would definitely recommend him to my friends and family!',
        pfp: '/assets/images/reviews/ali.png'
    },
];

export function ReviewsCarousel() {
    const [shuffledReviews, setShuffledReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;

    useEffect(() => {
        function randomizeReviews() {
            for (let i = google_reviews.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [google_reviews[i], google_reviews[j]] = [google_reviews[j], google_reviews[i]];
            }
            return [...google_reviews]; // return the shuffled array
        }
        const shuffled = randomizeReviews();
        setShuffledReviews(shuffled);
    }, []);

    const startIndex = currentPage * itemsPerPage;
    const selectedReviews = shuffledReviews.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="flex w-full justify-center space-x-4 overflow-x-auto">
            {selectedReviews.map((review, index) => (
                <div key={index} className='bg-white flex-shrink-0 w-[44%] rounded-lg border p-6 gap-4 flex flex-col items-start'>
                    <p className='text-gray-500 flex-grow italic font-medium'>{review.description}</p>
                    <div className='flex gap-4 mt-auto items-center'>
                        <img src={review.pfp} alt={review.name} className='object-cover rounded-full w-16 h-16' />
                        <div className='flex flex-col'>
                            <h3 className='text-xl font-medium'>{review.name}</h3>
                            <div className='flex gap-1 text-orange-400'>
                                <IonIcon icon={star}></IonIcon>
                                <IonIcon icon={star}></IonIcon>
                                <IonIcon icon={star}></IonIcon>
                                <IonIcon icon={star}></IonIcon>
                                <IonIcon icon={star}></IonIcon>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
