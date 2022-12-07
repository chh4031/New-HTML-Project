import React from 'react';
import styles from '../style/Header.module.css'

function Header(props) {
    return (
        <div>
            <p></p>
            <div className={styles.title}>
                <p>오늘 할 리스트 작성</p>
            </div>
        </div>
    );
}

export default Header;