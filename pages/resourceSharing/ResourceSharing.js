import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import styles from './ResourceSharing.module.css';
import Cookies from 'js-cookie';

import {
    FaFilePdf,
    FaFileWord,
    FaFileImage,
    FaFileExcel,
    FaFilePowerpoint,
    FaFileAlt,
    FaUpload,
} from 'react-icons/fa';

const ResourceSharing = () => {
    const [showModal, setShowModal] = useState(false);
    const [resourceName, setResourceName] = useState('');
    const [selectedClassIndex, setSelectedClassIndex] = useState(null);
    const [sortOption, setSortOption] = useState({});
    const [username, setUsername] = useState('');


    useEffect(() => {
        const storedUsername = Cookies.get('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const classes = [
        {
            courseTitle: 'CS1001 Database Systems 2024/25',
            resources: [
                {
                    name: 'DBS Lecture 1 Notes',
                    icon: <FaFilePdf className={styles.icon} />,
                    uploader: 'Titus Hardie',
                },
                {
                    name: 'ER Diagram Examples',
                    icon: <FaFileImage className={styles.icon} />,
                    uploader: 'Harrier Du Bois',
                },
                {
                    name: 'Normalization Guide',
                    icon: <FaFileWord className={styles.icon} />,
                    uploader: 'Kim Kitsuragi',
                },
                {
                    name: 'SQL Queries',
                    icon: <FaFileAlt className={styles.icon} />,
                    uploader: 'Nix Gottlieb',
                },
                {
                    name: 'Database Design.ppt',
                    icon: <FaFilePowerpoint className={styles.icon} />,
                    uploader: 'Harrier Du Bois',
                },
            ],
        },
        {
            courseTitle: 'CS2002 Algorithms and Data Structures 2024/25',
            resources: [
                {
                    name: 'Algorithm Cheat Sheet',
                    icon: <FaFileExcel className={styles.icon} />,
                    uploader: 'Marielle Charpentier',
                },
                {
                    name: 'Sorting Algorithms.ppt',
                    icon: <FaFilePowerpoint className={styles.icon} />,
                    uploader: 'George Miller',
                },
                {
                    name: 'Graph Algorithms',
                    icon: <FaFilePdf className={styles.icon} />,
                    uploader: 'Marielle Charpentier',
                },
            ],
        },
        {
            courseTitle: 'CS3003 Operating Systems 2024/25',
            resources: [
                {
                    name: 'Process Management Diagram',
                    icon: <FaFileImage className={styles.icon} />,
                    uploader: 'Bobby Briggs',
                },
                {
                    name: 'OS Fundamentals',
                    icon: <FaFilePdf className={styles.icon} />,
                    uploader: 'Audrey Horne',
                },
                {
                    name: 'Thread vs Process',
                    icon: <FaFileWord className={styles.icon} />,
                    uploader: 'Laura Palmer',
                },
                {
                    name: 'Memory Management.ppt',
                    icon: <FaFilePowerpoint className={styles.icon} />,
                    uploader: 'Mike Ross',
                },
                {
                    name: 'Scheduling Algorithms',
                    icon: <FaFilePdf className={styles.icon} />,
                    uploader: 'Laura Palmer',
                },
                {
                    name: 'Deadlocks Explained',
                    icon: <FaFileWord className={styles.icon} />,
                    uploader: 'Raul Kortenaer',
                },
            ],
        },
        {
            courseTitle: 'CS4004 Computer Networks 2024/25',
            resources: [
                {
                    name: 'OSI Model Overview',
                    icon: <FaFilePdf className={styles.icon} />,
                    uploader: 'Marielle Charpentier',
                },
                {
                    name: 'TCP/IP Protocol Suite',
                    icon: <FaFileWord className={styles.icon} />,
                    uploader: 'Pam Beesly',
                },
            ],
        },
    ];

    const [classData, setClassData] = useState(classes);

    const openModal = (classIndex) => {
        setSelectedClassIndex(classIndex);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setResourceName('');
        setSelectedClassIndex(null);
    };

    const handleResourceNameChange = (e) => {
        setResourceName(e.target.value);
    };

    const handleUpload = () => {
        if (resourceName.trim() !== '') {
            const newResource = {
                name: resourceName,
                icon: <FaFilePdf className={styles.icon} />,
                uploader: username || 'Anonymous',
            };

            const updatedClassData = [...classData];
            updatedClassData[selectedClassIndex].resources.push(newResource);
            setClassData(updatedClassData);
            closeModal();
        } else {
            alert('Please enter a resource name.');
        }
    };
    const handleSort = (classIndex, option) => {
        const updatedClassData = [...classData];
        const resources = [...updatedClassData[classIndex].resources];

        if (option === 'name') {
            resources.sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === 'uploader') {
            resources.sort((a, b) => a.uploader.localeCompare(b.uploader));
        }

        updatedClassData[classIndex].resources = resources;
        setClassData(updatedClassData);
        setSortOption({ ...sortOption, [classIndex]: option });
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Resource Sharing</h1>

            {classData.map((classItem, classIndex) => (
                <div className={styles.card} key={classIndex}>
                    <h2 className={styles.courseTitle}>{classItem.courseTitle}</h2>
                    <p className={styles.resourcesShared}>Resources shared:</p>

                    <div className={styles.sortButtons}>
                        <span>Sort by:</span>
                        <button
                            className={styles.sortBtn}
                            onClick={() => handleSort(classIndex, 'name')}
                        >
                            File Name
                        </button>
                        <button
                            className={styles.sortBtn}
                            onClick={() => handleSort(classIndex, 'uploader')}
                        >
                            Classmate
                        </button>
                    </div>

                    <div className={styles.resources}>
                        {classItem.resources.map((resource, index) => (
                            <div className={styles.resource} key={index}>
                                {resource.icon}
                                <p className={styles.resourceName}>{resource.name}</p>
                                <p className={styles.uploaderName}>Uploaded by: {resource.uploader}</p>
                            </div>
                        ))}
                    </div>
                    <button
                        className={styles.uploadBtn}
                        onClick={() => openModal(classIndex)}
                    >
                        Upload File
                    </button>
                </div>
            ))}

            {showModal && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>✖</button>
                        <h2 className={styles.modalTitle}>Upload File</h2>
                        <div className={styles.uploadContainer}>
                            <input
                                type="text"
                                className={styles.resourceNameInput}
                                placeholder="Enter resource name"
                                value={resourceName}
                                onChange={handleResourceNameChange}
                            />
                            <div className={styles.uploadBox}>
                                <FaUpload className={styles.uploadIcon} />
                                <p>Drag and drop file here or <button className={styles.chooseFileBtn}>Choose File</button></p>
                            </div>
                            <button className={styles.modalUploadBtn} onClick={handleUpload}>Upload</button>
                        </div>
                    </div>
                </div>
            )}

            <NavBar />
        </div>
    );
};

export default ResourceSharing;
