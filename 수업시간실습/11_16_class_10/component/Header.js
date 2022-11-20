import React from 'react';
import styles from '../styles/Header.module.css'

function Header(props) {
    return (
        <div>
            <h1 className={styles.title}>User Management System</h1>
        </div>
    );
}

export default Header;