import React from 'react';
import { MDBIcon } from 'mdbreact';
import style from './GoUp.module.css';

export function GoUp() {
    return (
        <a href="#top" className={`d-none d-sm-block ${style.goBack}`}>
            <MDBIcon icon="chevron-circle-up" />
        </a>
    );
}
