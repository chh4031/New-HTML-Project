import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import styles from '../styles/Footer.module.css';

function Footer(props) {
    const {changeTheme} = useContext(ThemeContext);
    return (
        <div>
            <h3 className={styles.title}>소프트웨어개발실습2</h3>
            <button onClick={()=>changeTheme()}>Theme change</button>
        </div>
    );
}

export default Footer;