import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import styles from './Signup.module.css';

export default function Signup() {
    const [username, setUsername] = useState('');
    const router = useRouter();

    const handleSignup = () => {
        if (username) {
            Cookies.set('username', username, { expires: 7 });
            router.push('/courses');
        } else {
            alert('Please enter a username');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Signup</h1>
            <input
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleSignup} className={styles.button}>
                Signup
            </button>
        </div>
    );
}

