import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import styles from './Login.module.css';

export default function Login() {
    const [username, setUsername] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (username) {
            Cookies.set('username', username, { expires: 7 });
            router.push('/courses');
        } else {
            alert('Please enter a username');
        }
    };

    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
            />
            <button onClick={handleLogin} className={styles.button}>
                Login
            </button>
        </div>
    );
}
