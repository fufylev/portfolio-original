import React, { Component } from 'react';
import { MDBNav, MDBIcon } from "mdbreact";
import styles from './AsideNav.module.css';

class AsideNav extends Component {
    render() {
        return (
            <div className="col-md-4 col-lg-3 d-none d-sm-block navbar-container">
                <nav className="navbar navbar-expand-md">
                    <div className="collapse navbar-collapse" id="navbar">
                        <MDBNav className="flex-column">
                            <a href="#aboutMe" className={styles.anchor}><MDBIcon icon="info" /> &ensp; About me</a>
                            <a href="#projects" className={styles.anchor}><MDBIcon icon="th-list" /> &ensp; Projects</a>
                            <a href="#career" className={styles.anchor}> <MDBIcon icon="chart-line" /> &ensp; Milestones</a>
                            <a href="#docs" className={styles.anchor}> <MDBIcon far icon="file-alt" />&ensp; Docs & certificates</a>
                        </MDBNav>
                    </div>
                </nav>
            </div>
        );
    }
}

export default AsideNav;