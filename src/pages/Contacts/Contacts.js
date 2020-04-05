import React, { Component } from 'react';
import { TopPageInfo } from '../../components/TopPageInfo/TopPageInfo';
import styles from './Contacts.module.css';
import { MDBIcon } from 'mdbreact';

export class Contacts extends Component {
    render() {
        return (
            <main className="container">
                <TopPageInfo />
                <h3>Contacts:</h3>
                <hr />
                <div className={styles.elem}>
                    <strong className={styles.text}>Full Name: </strong>
                    <span className={styles.link}>ANDREI FUFYLEV </span>
                </div>
                <div className={styles.elem}>
                    <strong className={styles.text}>Phone: </strong>
                    <p className={styles.link}>+7(982) 143 44 75 (WhatsApp, Viber) </p>
                    <p className={styles.link}>+7(938) 544 60 36 (Telegram) </p>
                </div>
                <div className={styles.elem}>
                    <strong className={styles.text}>Email: </strong>
                    <a
                        href="mailto: fufylev@gmail.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        className={styles.link}
                    >
                        fufylev@gmail.com
                    </a>
                </div>
                <div className={styles.elem}>
                    <strong className={styles.text}>Telegram: </strong>
                    <span className={styles.link}>@Andrei_Fufylev </span>
                </div>
                <div className={styles.elem}>
                    <strong className={styles.text}>Skype: </strong>
                    <span className={styles.link}>fufylev </span>
                </div>
                <div className={styles.elem}>
                    <strong className={styles.text}>GitHub: </strong>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/fufylev"
                        className={styles.link}
                    >
                        github.com/fufylev
                    </a>
                </div>
                <div className={styles.elem}>
                    <strong className={styles.text}>LinkedIn: </strong>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/andreifufylev/"
                        className={styles.link}
                    >
                        linkedin.com/in/andreifufylev/
                    </a>
                </div>
            </main>
        );
    }
}
