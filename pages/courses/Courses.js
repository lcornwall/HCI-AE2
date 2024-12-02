import { useState } from 'react';
import Link from 'next/link';
import styles from './Courses.module.css';
import NavBar from '../../components/NavBar.js';
import { FaChevronDown } from 'react-icons/fa';

const Courses = () => {
    const [openDropdowns, setOpenDropdowns] = useState({});

    const courses = [
        {
            id: 'CS1001',
            title: 'CS1001 Database Systems 2024/25',
            items: [
                { name: 'Lecture 1', link: '/lecture' },
                { name: 'Quiz 1', link: '/lecture' },
                { name: 'Lecture 2', link: '/lecture' },
                { name: 'Quiz 2', link: '/lecture' },
            ],
        },
        {
            id: 'CS1002',
            title: 'CS1002 Machine Learning 2024/25',
            items: [
                { name: 'Lecture 1', link: '/lecture' },
                { name: 'Quiz 1', link: '/lecture' },
            ],
        },
        {
            id: 'CS1003',
            title: 'CS1003 Data Fundamentals 2024/25',
            items: [
                { name: 'Lecture 1', link: '/lecture' },
                { name: 'Quiz 1', link: '/lecture' },
            ],
        },
        {
            id: 'CS1004',
            title: 'CS1004 Mobile HCI 2024/25',
            items: [
                { name: 'Lecture 1', link: '/lecture' },
                { name: 'Quiz 1', link: '/lecture' },
            ],
        },
        {
            id: 'CS1005',
            title: 'CS1005 Artificial Intelligence 2024/25',
            items: [
                { name: 'Lecture 1', link: '/lecture' },
                { name: 'Quiz 1', link: '/lecture' },
            ],
        },
    ];

    const handleDropdownToggle = (courseId) => {
        setOpenDropdowns((prevState) => ({
            ...prevState,
            [courseId]: !prevState[courseId],
        }));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your Courses</h1>

            <div className={styles.coursesList}>
                {courses.map((course) => (
                    <div className={styles.course} key={course.id}>
                        <button
                            className={styles.courseBtn}
                            onClick={() => handleDropdownToggle(course.id)}
                        >
                            <span>{course.title}</span>
                            <FaChevronDown
                                className={`${styles.icon} ${
                                    openDropdowns[course.id] ? styles.iconOpen : ''
                                }`}
                            />
                        </button>
                        <div
                            className={`${styles.dropdownContent} ${
                                openDropdowns[course.id] ? styles.open : ''
                            }`}
                        >
                            <ul>
                                {course.items.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.link}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <NavBar />
        </div>
    );
};

export default Courses;
