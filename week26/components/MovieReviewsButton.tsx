'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// 과제3 - code splitting으로 관람평 불러오기
const MovieReviews = dynamic(() => import('@/components/MovieReviews'));

export default function MovieReviewsButton() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <section>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="movie-reviews-button"
            >
                {isOpen ? "관람평 닫기" : "관람평 열기"}
            </button>

            {isOpen && <MovieReviews />}
        </section>
    )
}