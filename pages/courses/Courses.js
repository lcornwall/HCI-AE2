import { useState } from 'react';
import styles from './Courses.module.css';
import NavBar from '../../components/NavBar.js';

const Courses = () => {
    const [openDropdowns, setOpenDropdowns] = useState({
        CS1001: false,
        CS1002: false,
        CS1003: false,
    });

    const handleDropdownToggle = (courseId) => {
        setOpenDropdowns(prevState => ({
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
                            <li>Lecture 1</li>
                            <li>Quiz 1</li>
                            <li>Lecture 2</li>
                            <li>Quiz 2</li>
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
                            <li>Lecture 1</li>
                            <li>Quiz 1</li>
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
                            <li>Lecture 1</li>
                            <li>Quiz 1</li>
                        </ul>
                    </div>
                )}
            </div>
            <NavBar />
        </div>
    );
};

export default Courses;
