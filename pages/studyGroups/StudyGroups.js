import React, { useState } from 'react';
import styles from './StudyGroups.module.css';
import NavBar from '../../components/NavBar';

export default function StudyGroups() {
    const [selectedStudents, setSelectedStudents] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const students = [
        { name: 'Harriet Du Bois', courses: ['Human Computer Interaction', 'Machine Learning', 'Data Fundamentals'] },
        { name: 'Kim Kitsuragi', courses: ['Data Fundamentals', 'Mobile HCI'] },
        { name: 'Harry King', courses: ['Human Computer Interaction', 'Artificial Intelligence', 'Operating Systems'] },
    ];

    const handleSelectStudent = (studentName) => {
        setSelectedStudents((prevSelectedStudents) => {
            if (prevSelectedStudents.includes(studentName)) {
                return prevSelectedStudents.filter((name) => name !== studentName);
            }
            return [...prevSelectedStudents, studentName];
        });
    };

    const handleInvite = () => {
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Study Groups</h1>
            <div className={styles.tableContainer}>
                <table className={styles.studentTable}>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Courses in Common</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr
                                key={index}
                                className={selectedStudents.includes(student.name) ? styles.selectedRow : ''}
                                onClick={() => handleSelectStudent(student.name)}
                            >
                                <td>{student.name}</td>
                                <td>
                                    <ul>
                                        {student.courses.map((course, idx) => (
                                            <li key={idx}>{course}</li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.footer}>
                <p>Students selected: <strong>{selectedStudents.join(', ')}</strong></p>
                <button
                    className={styles.inviteButton}
                    disabled={selectedStudents.length === 0}
                    onClick={handleInvite}
                >
                    Invite selected students to study group
                </button>
            </div>

            {showPopup && (
                <div className={styles.popup}>
                    <p>Invitation(s) to {selectedStudents.join(', ')}'s email(s) have been sent!</p>
                </div>
            )}

            <NavBar />
        </div>
    );
}

