import { useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

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
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Signup</h1>
            <input
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ padding: '10px', margin: '10px 0', width: '200px' }}
            />
            <button onClick={handleSignup} style={{ padding: '10px', width: '100px' }}>
                Signup
            </button>
        </div>
    );
}
