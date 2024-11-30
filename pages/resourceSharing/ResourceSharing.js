import { useState } from 'react';
import NavBar from '../../components/NavBar';
import styles from './ResourceSharing.module.css';
import { FaFilePdf, FaFileWord, FaUpload } from 'react-icons/fa';

const ResourceSharing = () => {
    const [showModal, setShowModal] = useState(false);
    const [resourceName, setResourceName] = useState('');
    const [uploadedResources, setUploadedResources] = useState([
        {
            name: 'DBS L1 Notes',
            icon: <FaFilePdf className={styles.icon} />,
        },
        {
            name: 'DBS Tutorial 1 Notes',
            icon: <FaFileWord className={styles.icon} />,
        },
    ]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setResourceName('');
    };

    const handleResourceNameChange = (e) => {
        setResourceName(e.target.value);
    };

    const handleUpload = () => {
        if (resourceName.trim() !== '') {
            const newResource = {
                name: resourceName,
                icon: <FaFilePdf className={styles.icon} />, 
            };
            setUploadedResources([...uploadedResources, newResource]);
            closeModal();
        } else {
            alert('Please enter a resource name.');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Resource Sharing</h1>
            <div className={styles.card}>
                <h2 className={styles.courseTitle}>CS1001 Database Systems 2024/25</h2>
                <p className={styles.resourcesShared}>Resources shared:</p>
                <div className={styles.resources}>
                    {uploadedResources.map((resource, index) => (
                        <div className={styles.resource} key={index}>
                            {resource.icon}
                            <p>{resource.name}</p>
                        </div>
                    ))}
                </div>
                <button className={styles.uploadBtn} onClick={openModal}>Upload File</button>
            </div>

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
