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
                        <hr/>
                        <article id='projects' className={styles.projects}>
                            <h3>
                                Projects
                            </h3>
                            <p>Block is being developed and will be uploaded within the next 2-3 days</p>
                        </article>
                        <hr/>
                        <article id='career' className={styles.career}>
                            <h3>
                                Milestones
                            </h3>
                            <p>Block is being developed and will be uploaded within the next 2-3 days</p>
                        </article>
                        <hr/>
                        <article id='docs' className={styles.docs}>
                            <h3>
                                Docs & certificates
                            </h3>
                            <p>Block is being developed and will be uploaded within the next 2-3 days</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>

    );
}