import React from 'react';
import styles from './Milestones.module.css';

export function Milestones() {
    return (
        <article className={styles.career}>
            <h3 className={styles.title}>
                Milestones
            </h3>
            <h5 className='text-center mb-3 text-info'>Professional Experience</h5>
            <p className={styles.heading}>April 2018 – Present, Russian Federation</p>
            <p className={styles.position}>Front End | React Developer - freelancer</p>
            <ul className={styles.list}>
                <li className="">
                    Complex applications in both Web and Mobile using React and React Native. Web SPA.
                </li>
                <li className="">
                    Complex React Native mobile applications.
                </li>
                <li className="">
                    Both Vanilla or jQuery + Bootstrap JavaScript-based web sites and User Interfaces.
                </li>
                <li className="">
                    In order to solidify my skills in React and NodeJS, I am developing a sort of lite version of
                    &ensp;<a href="https://insta-andrey-f.web.app/" target="_blank"
                             rel="noopener noreferrer">Instagram</a>. This is a client-server application
                    with various stack: HTML5, CSS3+SASS (moduled),
                    JavaScript (ES5, ES6+), React JS, Redux and other middlewares, Google iCloud Firebase uses as a
                    server.
                </li>
            </ul>
            <p className={styles.heading}>Sep 2019 – Dec 2019, Russian Federation</p>
            <p className={styles.position}>Internship in <a href="https://geekbrains.ru/" target="_blank"
                                                            rel="noopener noreferrer">GeekBrains</a> – React
                Developer</p>
            <ul className={styles.list}>
                <li>
                    I and other several students were creating an MVP version of the client-server application named
                    "English Learning Application". I was responsible for creating the front-end User-Interface and its
                    logic using a stack of React, Redux, Bootstrap as well as native HTML+CSS (my commits)
                </li>
                <li>
                    During this internship, I have developed my skills in team-building and got acquainted with "Trello"
                    app and a "Scrum team" and its work
                </li>
            </ul>
            <h5 className='text-center mb-3 text-info'>Self Education & Trainings</h5>
            <p className={styles.heading}>March 2018 – Dec 2019</p>
            <p className={styles.heading}>
                <a href="https://geekbrains.ru/" target="_blank" rel="noopener noreferrer">GeekBrains</a> online
                university,
                <a href="https://corp.mail.ru/en/" target="_blank" rel="noopener noreferrer">&ensp;Mail.ru Group</a>
            </p>
            <p className={styles.position}>Full Stack JavaScript Developer ( <span className={styles.links}>
                <a href="https://drive.google.com/open?id=1rGzfhv_1V0DrsqZj8AJjNY32Kooyyt2-" target="_blank"
                   rel="noopener noreferrer">Certificate </a></span> )
            </p>
            <p className='mb-5'/>
            <p className={styles.heading}>March 2020</p>
            <p className={styles.heading}>
                <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Udemy</a>&ensp;online courses
            </p>
            <p className={styles.position}>React Native Development ( <span className={styles.links}>
                <a href="https://www.udemy.com/certificate/UC-d411e1dc-5422-4644-8fe1-4cdf99117501/" target="_blank"
                   rel="noopener noreferrer">Certificate </a></span> )
            </p>
            <p className='mb-5'/>
            <p className={styles.heading}>Jan 2020 – Apr 2020</p>
            <p className={styles.heading}>
                <a href="https://www.udacity.com/course/react-nanodegree--nd019" target="_blank"
                   rel="noopener noreferrer">Udacity </a>Nano Degree Program - "Become a React Developer"
            </p>
            <p className={styles.position}>React & React Native ( <span className={styles.links}>
                <a href="https://confirm.udacity.com/239UATAS" target="_blank"
                   rel="noopener noreferrer">Certificate </a></span> )
            </p>
        </article>
    );
}