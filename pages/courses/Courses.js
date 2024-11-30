import { useState } from 'react';
import Link from 'next/link';
import styles from './Courses.module.css';
import NavBar from '../../components/NavBar.js';

const Courses = () => {
    const [openDropdowns, setOpenDropdowns] = useState({
        CS1001: false,
        CS1002: false,
        CS1003: false,
        CS1004: false,
        CS1005: false,
    });

    const handleDropdownToggle = (courseId) => {
        setOpenDropdowns((prevState) => ({
            ...prevState,
            [courseId]: !prevState[courseId],
        }));
    };

    return (
        <div className={styles.coursesContainer}>
            <h2>Your Courses</h2>

            <div className={styles.course}>
                <button
                    className={styles.courseBtn}
                    onClick={() => handleDropdownToggle('CS1001')}
                >
                    CS1001 Database Systems 2024/25
                </button>
                {openDropdowns.CS1001 && (
                    <div className={styles.dropdownContent}>
                        <ul>
                            <li>
                                <Link href="/lecture">Lecture 1</Link>
                            </li>
                            <li>
                                <Link href="/lecture">Quiz 1</Link>
                            </li>
                            <li>
                                <Link href="/lecture">Lecture 2</Link>
                            </li>
                            <li>
                                <Link href="/lecture">Quiz 2</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className={styles.course}>
                <button
                    className={styles.courseBtn}
                    onClick={() => handleDropdownToggle('CS1002')}
                >
                    CS1002 Machine Learning 2024/25
                </button>
                {openDropdowns.CS1002 && (
                    <div className={styles.dropdownContent}>
                        <ul>
                            <li>
                                <Link href="/lecture">Lecture 1</Link>
                            </li>
                            <li>
                                <Link href="/lecture">Quiz 1</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className={styles.course}>
                <button
                    className={styles.courseBtn}
                    onClick={() => handleDropdownToggle('CS1003')}
                >
                    CS1003 Data Fundamentals 2024/25
                </button>
                {openDropdowns.CS1003 && (
                    <div className={styles.dropdownContent}>
                        <ul>
                            <li>
                                <Link href="/lecture">Lecture 1</Link>
                            </li>
                            <li>
                                <Link href="/lecture">Quiz 1</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className={styles.course}>
                <button
                    className={styles.courseBtn}
                    onClick={() => handleDropdownToggle('CS1004')}
                >
                    CS1004 Mobile HCI 2024/25
                </button>
                {openDropdowns.CS1004 && (
                    <div className={styles.dropdownContent}>
                        <ul>
                            <li>
                                <Link href="/lecture">Lecture 1</Link>
                            </li>
                            <li>
                                <Link href="/lecture">Quiz 1</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <div className={styles.course}>
                <button
                    className={styles.courseBtn}
                    onClick={() => handleDropdownToggle('CS1005')}
                >
                    CS1005 Artificial Intelligence 2024/25
                </button>
                {openDropdowns.CS1005 && (
                    <div className={styles.dropdownContent}>
                        <ul>
                            <li>
                                <Link href="/lecture">Lecture 1</Link>
                            </li>
                            <li>
                                <Link href="/lecture">Quiz 1</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <NavBar />
        </div>
    );
};

export default Courses;
