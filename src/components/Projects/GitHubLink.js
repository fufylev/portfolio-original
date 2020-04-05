import React from 'react';
import styles from './Projects.module.css';
import { MDBIcon } from 'mdbreact';

export function GitHubLink({ link }) {
    return (
        <a href={link} className={styles.link} target="_blank" rel="noopener noreferrer">
            <span className="text-dark">
                <MDBIcon fab icon="github" />
            </span>
            <span>&emsp;See on GitHub</span>
        </a>
    );
}
