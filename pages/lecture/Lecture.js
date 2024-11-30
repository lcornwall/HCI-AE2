import NavBar from '../../components/NavBar';
import styles from './Lecture.module.css';

export default function Lecture() {
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
                        <strong>24 </strong> students marked this as <strong>essential</strong>
                    </p>
                    <p>Rate the <strong>usefulness</strong> of this lecture:</p>
                    <div className={styles['rating-buttons']}>
                        <button className={styles['rating-button']}>Necessary</button>
                        <button className={styles['rating-button']}>Worthwhile</button>
                        <button className={styles['rating-button']}>Optional</button>
                    </div>
                </div>
            </div>
            <NavBar />
        </div>
    );
}
