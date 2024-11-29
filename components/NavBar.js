import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <div className={styles.footer}>
            <Link href="/courses" className={styles['footer-item']}>
                <span className={styles['footer-icon']}>📚</span>
                <p>Courses</p>
            </Link>
            <Link href="/resourceSharing" className={styles['footer-item']}>
                <span className={styles['footer-icon']}>🔗</span>
                <p>Resource Sharing</p>
            </Link>
            <Link href="/studyGroups" className={styles['footer-item']}>
                <span className={styles['footer-icon']}>💬</span>
                <p>Study Groups</p>
            </Link>
        </div>
    );
}
