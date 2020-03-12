import React from 'react';
import './style.css'
import styles from './HomePage.module.css';

import { TopPageInfo } from "../../components/TopPageInfo/TopPageInfo";
import AsideNav from "../../components/AsideNav/AsideNav";
import { AboutMe } from "../../components/AboutMe/AboutMe";

export function HomePage() {
    return (
        <div className='container'>
            <TopPageInfo/>
            <div className="row main-content">
                <AsideNav/>
                <div className="col-md-8 col-lg-9 content-container">
                    <div className={` ${styles.mainContent}`}>
                        <AboutMe/>
                        <article id='projects' className={styles.projects}>
                            <h3>
                                Projects
                            </h3>
                        </article>
                        <article id='docs' className={styles.docs}>
                            <h3>
                                Docs
                            </h3>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    );
}