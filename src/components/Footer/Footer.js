import React from "react";
import { MDBIcon } from "mdbreact";
import styles from "./Footer.module.css";

export const Footer = () => {
    const bgPink = {backgroundColor: '#434343'};
    return (
        <footer className={styles.footer}>
            <a href='https://github.com/fufylev' target='_blank' rel="noopener noreferrer"
               className={`text-white ${styles.icons}`}>
                <MDBIcon fab icon="github-square"/>
            </a>
            <a href='https://www.linkedin.com/in/andreifufylev/' rel="noopener noreferrer" target='_blank'
               className={`text-white ${styles.icons}`}>
                <MDBIcon fab icon="linkedin"/>
            </a>
            <a href='https://www.instagram.com/andrey_fufylev/' rel="noopener noreferrer" target='_blank'
               className={`text-white ${styles.icons}`}>
                <MDBIcon fab icon="instagram"/>
            </a>
            <a href='mailto: fufylev@gmail.com' rel="noopener noreferrer" target='_blank'
               className={`text-white ${styles.icons}`}>
                <MDBIcon icon="at"/>
            </a>
        </footer>
    );
};