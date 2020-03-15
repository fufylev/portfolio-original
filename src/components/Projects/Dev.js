import React from 'react';
import styles from "./Projects.module.css";
import { MDBIcon } from "mdbreact";

export function Dev() {
    return (
        <p className={styles.dev}>
            <MDBIcon icon="hammer" />
            &emsp;In development&emsp;
            <MDBIcon icon="tools"/>
        </p>
    );
}