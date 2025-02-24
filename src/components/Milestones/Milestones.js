import React from 'react';
import styles from './Milestones.module.css';

export function Milestones() {
    return (
        <article className={styles.career}>
            <h2 className={styles.title}> Milestones </h2>
            <h3 className="text-center mb-3 text-info">Professional Experience</h3>
            <p className={styles.heading}>December 2023 – Jan 2025</p>
            <p className={styles.position}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.rbt.ru/">
                    RBT.ru
                </a>
            </p>
            <p className={styles.position}>Senior Flutter developer</p>
            <ul className={styles.list}>
                <li className="">
                    Launched the application from scratch into Production within 6 months, achieving a management markup
                    of 150 million rubles from repeat sales and over 200,000 downloads by the end of 2024.
                </li>
                <li className="">
                    Developed a product catalog with search functionality, filters, and order payment, creating a
                    user-friendly interface that simplified the process of selecting and purchasing products.
                </li>
                <li className="">
                    Implemented product search using QR codes, enhancing the app's usability and accelerating the
                    product search process.
                </li>
            </ul>
            <p className={styles.heading}>November 2022 – present</p>
            <p className={styles.position}>
                <a target="_blank" rel="noopener noreferrer" href="https://ieye.io/">
                    ieye core
                </a>
            </p>
            <p className={styles.position}>FrontEnd Lead/Senior Flutter developer</p>
            <ul className={styles.list}>
                <li className="">
                    Led the development in a startup, independently completing all tasks related to the project,
                    ensuring the stability and functionality of the application during the investment-seeking phase.
                </li>
                <li className="">
                    Created a social network-guide for establishments from scratch, implementing a showcase for
                    businesses, a map based on MapBox and YandexMap, as well as a search and quest system, successfully
                    launching the startup into the market and uploading the app across all stores.
                </li>
                <li className="">
                    Developed a custom plugin in Dart for determining client locations via BLE sensors, enabling
                    automatic check-ins at establishments and the transmission of occupancy data, thereby improving
                    interaction between clients and businesses.
                </li>
                <li className="">
                    Developed a loyalty system and an automated client location detection mechanism within
                    establishments, resulting in increased user engagement and a simplified interaction process with
                    businesses.
                </li>
            </ul>
            <p className={styles.heading}>October 2022 – Novemver 2023</p>
            <p className={styles.position}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.eng.atb.su/">
                    "Asian-Pacific Bank" JSC
                </a>
            </p>
            <p className={styles.position}>Senior Flutter developer</p>
            <ul className={styles.list}>
                <li className="">
                    Developed modules for “Bank Cards and Accounts,” “Client Transfers,” “Intra-bank Transfers,” and
                    “SBP,” creating a user-friendly interface for client interaction with the fast payment system,
                    allowing the company to enter the payments market.
                </li>
                <li className="">
                    Implemented the FSG service (Federal System "City"), connecting the bank to the federal utility
                    payment solutions complex, which automated the collection, processing, and billing of payments.
                </li>
                <li className="">
                    Designed an interface for client interaction with the SBP system, enabling the company to enter the
                    fast payments market and ensuring convenience and speed in transfers.
                </li>
            </ul>
            <br />
            <p className={styles.heading}>April 2020 – September 2022</p>
            <p className={styles.position}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instaforex.com/">
                    InstaForex
                </a>
            </p>
            <p className={styles.position}>React Native/Flutter Developer</p>
            <ul className={styles.list}>
                <li className="">
                    Developed and launched a stable version of the Trading Terminal for Android and iOS from scratch,
                    ensuring the reliability and functionality of the application for traders, including the display of
                    quotes, charts, and trade execution.
                </li>
                <li className="">
                    Rewrote the InstaForex application from React Native to Flutter, creating a new architecture for the
                    trading section and charts, eliminating lags, and enhancing the app's stability.
                </li>
                <li className="">
                    The application was awarded "Best Mobile App" at the Forex Traders Summit in Dubai 2024, confirming
                    the high quality and demand for the product.
                </li>
            </ul>
            {/* <p className={styles.heading}>April 2018 – March 2020, Russian Federation</p>
            <p className={styles.position}>Front End | React Developer - freelancer</p>
            <ul className={styles.list}>
                <li className="">Complex applications in both Web and Mobile using React and React Native. Web SPA.</li>
                <li className="">Both Vanilla or jQuery + Bootstrap JavaScript-based web sites and User Interfaces.</li>
            </ul>
            <p className={styles.heading}>Sep 2019 – Dec 2019, Russian Federation</p>
            <p className={styles.position}>
                Internship in{' '}
                <a href="https://geekbrains.ru/" target="_blank" rel="noopener noreferrer">
                    GeekBrains
                </a>{' '}
                – React Developer
            </p>
            <ul className={styles.list}>
                <li>
                    I and other several students were creating an MVP version of the client-server application named
                    "English Learning Application". I was responsible for creating the front-end User-Interface and its
                    logic using a stack of React, Redux, Bootstrap as well as native HTML+CSS&nbsp;
                    <a href="https://github.com/daawud/English-learning-App/commits?author=fufylev">(my commits)</a>
                    &nbsp;
                </li>
                <li>
                    During this internship, I have developed my skills in team-building and got acquainted with "Trello"
                    app and a "Scrum team" and its work
                </li>
                <li>
                    The application was awarded "Best Mobile App" at the Forex Traders Summit in Dubai 2024, confirming
                    the high quality and demand for the product.
                </li>
            </ul> */}

            <h3 className="text-center mb-3 text-info">Self Education & Trainings</h3>
            <br />
            <p className={styles.heading}>Aug 2024 – present</p>
            <p className={styles.heading}>
                <a
                    href="https://www.edx.org/micromasters/ucsandiegox-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Algorithms and Data Structures{' '}
                </a>{' '}
                - MicroMasters® Program, <b>University of California San Diego</b>&nbsp; (
                <a
                    href="https://courses.edx.org/certificates/61e36e9fe9f1438cae4f9eafb49eadd9?_gl=1*1vdcb7m*_gcl_au*MjA5NzMwODc2Ny4xNzMwMzc3Mjg4*_ga*MjEyNzU4NjkwMy4xNzMwMzc3Mjg5*_ga_D3KS4KMDT0*MTczNTAyNTc2NC41OC4xLjE3MzUwMzEzODguNTkuMC4w"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Certificate
                </a>
                ,{' '}
                <a
                    href="https://github.com/fufylev/algorithms_and_data_structures"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    the code records
                </a>
                )
            </p>
            <p>~~~~</p>
            <p className="mb-2" />
            <p className={styles.heading}>Jul 2022 – Sep 2022</p>
            <p className={styles.heading}>
                <a href="https://github.com/fufylev/algorithms_theory" target="_blank" rel="noopener noreferrer">
                    Algorithms in Python 3
                </a>{' '}
                - theoretical course, <b>Moscow Institute of Physics and Technology</b>.
            </p>
            <p>~~~~</p>
            <p className="mb-2" />
            <p className={styles.heading}>Jul 2022 – Aug 2022</p>
            <p className={styles.heading}>
                <a
                    href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CS50's{' '}
                </a>{' '}
                - <b>Harvard University</b> course taught by David J. Malan - "Introduction to Computer Science"
                {/*(<span className={styles.links}>*/}
                {/*<a href="https://submit.cs50.io/users/fufylev" target="_blank"*/}
                {/*   rel="noopener noreferrer">80% progress</a></span>).*/}
            </p>
            <p>~~~~</p>
            <p className="mb-2" />
            <p className={styles.heading}>Jan 2020 – Apr 2020</p>
            <p className={styles.heading}>
                <a
                    href="https://www.udacity.com/course/react-nanodegree--nd019"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Udacity{' '}
                </a>
                Nano Degree Program - "Become a React Developer"
            </p>
            <p className={styles.position}>
                React & React Native ({' '}
                <span className={styles.links}>
                    <a href="https://confirm.udacity.com/239UATAS" target="_blank" rel="noopener noreferrer">
                        Certificate{' '}
                    </a>
                </span>{' '}
                )
            </p>
            <p>~~~~</p>
            <p className="mb-2" />
            <p className={styles.heading}>March 2020</p>
            <p className={styles.heading}>
                <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">
                    Udemy
                </a>
                &ensp;online courses
            </p>
            <p className={styles.position}>
                React Native Development ({' '}
                <span className={styles.links}>
                    <a
                        href="https://www.udemy.com/certificate/UC-d411e1dc-5422-4644-8fe1-4cdf99117501/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Certificate{' '}
                    </a>
                </span>{' '}
                )
            </p>
            <p>~~~~</p>
            <p className="mb-2" />
            <p className={styles.heading}>March 2018 – Dec 2019</p>
            <p className={styles.heading}>
                <a href="https://geekbrains.ru/" target="_blank" rel="noopener noreferrer">
                    GeekBrains
                </a>{' '}
                online university,
                <a href="https://corp.mail.ru/en/" target="_blank" rel="noopener noreferrer">
                    &ensp;Mail.ru Group
                </a>
            </p>
            <p className={styles.position}>
                Full Stack JavaScript Developer ({' '}
                <span className={styles.links}>
                    <a
                        href="https://drive.google.com/open?id=1rGzfhv_1V0DrsqZj8AJjNY32Kooyyt2-"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Certificate{' '}
                    </a>
                </span>{' '}
                )
            </p>
            <p className="mb-5" />
            {/*<p className={styles.heading}>Jan 2020 – Apr 2020</p>*/}
            {/*<p className={styles.heading}>*/}
            {/*    <a href="https://www.udacity.com/course/react-nanodegree--nd019" target="_blank"*/}
            {/*       rel="noopener noreferrer">Udacity </a>Nano Degree Program - "Become a React Developer"*/}
            {/*</p>*/}
            {/*<p className={styles.position}>React & React Native ( <span className={styles.links}>*/}
            {/*    <a href="https://confirm.udacity.com/239UATAS" target="_blank"*/}
            {/*       rel="noopener noreferrer">Certificate </a></span> )</p>*/}
            {/*<p className={styles.heading}>March 2018 – Dec 2019</p>*/}
            {/*<p className={styles.heading}>*/}
            {/*    <a href="https://geekbrains.ru/" target="_blank" rel="noopener noreferrer">GeekBrains</a> online*/}
            {/*    university,*/}
            {/*    <a href="https://corp.mail.ru/en/" target="_blank" rel="noopener noreferrer">&ensp;Mail.ru Group</a>*/}
            {/*</p>*/}
            {/*<p className={styles.position}>Full Stack JavaScript Developer ( <span className={styles.links}>*/}
            {/*    <a href="https://drive.google.com/open?id=1rGzfhv_1V0DrsqZj8AJjNY32Kooyyt2-" target="_blank"*/}
            {/*       rel="noopener noreferrer">Certificate </a></span> )*/}
            {/*</p>*/}
        </article>
    );
}
