import { useState } from 'react';
import NavBar from '../../components/NavBar';
import styles from './Lecture.module.css';

export default function Lecture() {
    const [ratings, setRatings] = useState({
        necessary: 24,
        worthwhile: 0,
        optional: 2,
    });


    const handleRating = (ratingType) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [ratingType]: prevRatings[ratingType] + 1
        }));

    };

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Database Systems - Lecture 1</h1>
            <div className={styles['video-section']}>
                <div className={styles['video-container']}>
                    <iframe
                        src="https://www.youtube.com/embed/BBJa32lCaaY"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles['video-player']}
                    />
                </div>
                <div className={styles['rating-container']}>
                    <p className={styles['student-count']}>
                        <strong>{ratings.necessary} </strong> students marked this as <strong>necessary</strong>.
                    </p>
                    <p className={styles['student-count']}>
                        <strong>{ratings.worthwhile} </strong> students marked this as <strong>worthwhile</strong>.
                    </p>
                    <p className={styles['student-count']}>
                        <strong>{ratings.optional} </strong> students marked this as <strong>optional</strong>.
                    </p>
                    <p>Rate the <strong>usefulness</strong> of this lecture:</p>
                    <div className={styles['rating-buttons']}>
                        <button
                            className={styles['rating-button']}
                            onClick={() => handleRating('necessary')}
                        >
                            Necessary
                        </button>
                        <button
                            className={styles['rating-button']}
                            onClick={() => handleRating('worthwhile')}
                        >
                            Worthwhile
                        </button>
                        <button
                            className={styles['rating-button']}
                            onClick={() => handleRating('optional')}
                        >
                            Optional
                        </button>
                    </div>
                </div>
            </div>

            <NavBar />
        </div>
    );
}