import { useRouter } from 'next/router';
import styles from './DashBoard.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Welcome</h1>
      <button
        onClick={() => router.push('/login')}
        className={styles.button}
      >
        Login
      </button>
      <button
        onClick={() => router.push('/signup')}
        className={styles.button}
      >
        Signup
      </button>
    </div>
  );
}
