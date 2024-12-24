import React from 'react';
import styles from './Docs.module.css';
import { MDBIcon } from 'mdbreact';

export function Docs() {
    return (
        <article className={styles.docs}>
            <h3 className={styles.title}>Documents and certificates</h3>
            <p className={styles.headingText}>
                My resume -&ensp;
                <a
                    href="https://docs.google.com/document/d/1Qx_DSviBgsMe4nUZfYezOgQkL7QYVBjZ/edit?usp=sharing&ouid=117842446258296907485&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    MS Word format&ensp;<MDBIcon icon="external-link-alt" />
                </a>
            </p>
            <p className={styles.headingText}>
                English test - IELTS certificate (March 23d, 2019)  -&ensp;
                <a
                    href="https://drive.google.com/open?id=1VUU10PN3NfmzJU6qR9WRLtbxESfxAEPU"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PDF copy&ensp;<MDBIcon icon="external-link-alt" />
                </a>
            </p>
            <p className={styles.headingText}> This block is being developed.... To be updated soon</p>
        </article>
    );
}
