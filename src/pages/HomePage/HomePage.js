import React from 'react';
import './style.css';
import styles from './HomePage.module.css';
import { MDBIcon } from 'mdbreact';
import { TopPageInfo } from '../../components/TopPageInfo/TopPageInfo';
import AsideNav from '../../components/AsideNav/AsideNav';
import { AboutMe } from '../../components/AboutMe/AboutMe';
import { Projects } from '../../components/Projects/Project';
import { Milestones } from '../../components/Milestones/Milestones';
import { Docs } from '../../components/Docs/Docs';

export function HomePage() {
    return (
        <div className="container">
            <div id="top"></div>
            <TopPageInfo />
            <div className="row main-content">
                <AsideNav />
                <div className="col-md-8 col-lg-9 content-container">
                    <div className={styles.mainContent}>
                        <div id="aboutMe"></div>
                        <AboutMe />
                        <hr />
                        <div id="projects"></div>
                        <Projects />
                        <hr />
                        <div id="career"></div>
                        <Milestones />
                        <hr />
                        <div id="docs"></div>
                        <Docs />
                        <hr />
                    </div>
                </div>
            </div>
            <h1 className="mt-5 text-center text-dark">Want to discuss a startup collaboration?</h1>
            <h1 className="mb-5 text-center text-dark">
                I'm most definitely game&ensp;
                <MDBIcon far icon="smile-wink" />
            </h1>
        </div>
    );
}
