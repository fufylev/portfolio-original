import React from 'react';
import styles from "./TopPageInfo.module.css";
import avatar from "../../assets/img/KCEE8288.jpg";

export const TopPageInfo = () => {
    return (
        <div className={styles.heading}>
            <img src={avatar} alt="avatar" className={styles.avatar}/>
            <div className='text-center'>
                <h1 className={styles.title}>
                    Front-end, React & React Native Developer
                </h1>
                <h5 className={styles.title}>
                    I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                </h5>
            </div>
        </div>
    );
};