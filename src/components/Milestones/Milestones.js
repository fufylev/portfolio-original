import React from 'react';
import styles from './Milestones.module.css';

export function Milestones() {
    return (
        <article className={styles.career}>

            <h2 className={styles.title}> Milestones </h2>


            <h3 className='text-center mb-3 text-info'>Professional Experience</h3>

            <p className={styles.heading}>April 2020 – Present</p>
            <p className={styles.position}>
                <a target="_blank" rel="noopener noreferrer" href='https://www.instaforex.com/'>InstaForex</a>
                &nbsp;(Online Media Solutions Corp.)</p>
            <p className={styles.position}>React Native/Flutter Developer</p>
            <ul className={styles.list}>
                <li className="">Fully remote work via JIRA, Confluence, Skype, Telegram.</li>
                <li className="">Development of complex mobile applications.</li>
                <li className="">Work via private GitHub repositories and ssh key.</li>
                <li>Work on 4 different projects:</li>
                <ul>
                    <li>
                        Re-development of the existing application from the scratch named <a
                        href="https://play.google.com/store/apps/details?id=com.instaforex.verify" target="_blank"
                        rel="noopener noreferrer">Instaverify v.4.0.0 </a>&nbsp;in order to apply a new design and new
                        API.

                    </li>
                    <li className="">
                        I have entirely rewritten and restructured the existing application&nbsp;<a href="https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn"
                           target="_blank"
                           rel="noopener noreferrer">CryptoLearn</a>
                    </li>

                    <li>Development of the new application from the scratch named&nbsp;<a href="https://play.google.com/store/apps/details?id=com.instaforex.android.forexcopy"
                                 target="_blank"
                                 rel="noopener noreferrer">ForexCopy</a>&nbsp;which is the best InstaForex app for
                        copying orders of top traders.<br/>
                    </li>
                    <li>
                        Re-development <strong>from React Native into Flutter</strong> of the existing application from
                        the scratch named <a
                        href="https://play.google.com/store/apps/details?id=com.instaforex.mobiletrader" target="_blank"
                        rel="noopener noreferrer">InstaForex</a>&nbsp;in order to apply a new design and boost its
                        performance to the new level by using Dart Isolate.<br/>
                        In this project my role is:<br/>
                        - developing/supporting the whole trading section and its logic such as:
                        create/close an instant trade, place/delete pending order, modifying existent tades and orders;<br/>
                        - implementation of a Quotes Watchlist by means of Web Sockets in private Isolate;<br/>
                        - control and resume stable connection to web sockets and other services of InstaForex upon
                        Internet connection was lost/resumed;<br/>
                        - etc.
                    </li>
                </ul>
            </ul>

            <p className={styles.heading}>April 2018 – March 2020, Russian Federation</p>
            <p className={styles.position}>Front End | React Developer - freelancer</p>
            <ul className={styles.list}>
                <li className="">
                    Complex applications in both Web and Mobile using React and React Native. Web SPA.
                </li>
                <li className="">
                    Both Vanilla or jQuery + Bootstrap JavaScript-based web sites and User Interfaces.
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

            {/* Self Education & Trainings */}

            <h3 className='text-center mb-3 text-info'>Self Education & Trainings</h3>
            <br/>

            <p className={styles.heading}>Jul 2020 – present</p>
            <p className={styles.heading}>
                <a href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x" target="_blank"
                   rel="noopener noreferrer">CS50's </a> - <b>Harvard University</b> course taught by David J. Malan - "Introduction to Computer Science"
                (<span className={styles.links}>
                <a href="https://submit.cs50.io/users/fufylev" target="_blank"
                   rel="noopener noreferrer">80% progress</a></span>).
            </p>
            <p>~~~~</p>
            <p className='mb-2'/>

            <p className={styles.heading}>Jul 2020 – present</p>
            <p className={styles.heading}>
                <a href="https://github.com/fufylev/algorithms_theory" target="_blank"
                   rel="noopener noreferrer">Algorithms in Python 3</a> - theoretical course, <b>Moscow Institute of Physics and Technology</b>.
            </p>
            <p>~~~~</p>
            <p className='mb-2'/>

            <p className={styles.heading}>Jan 2020 – Apr 2020</p>
            <p className={styles.heading}>
                <a href="https://www.udacity.com/course/react-nanodegree--nd019" target="_blank"
                   rel="noopener noreferrer">Udacity </a>Nano Degree Program - "Become a React Developer"
            </p>
            <p className={styles.position}>React & React Native ( <span className={styles.links}>
                <a href="https://confirm.udacity.com/239UATAS" target="_blank"
                   rel="noopener noreferrer">Certificate </a></span> )
            </p>
            <p>~~~~</p>
            <p className='mb-2'/>

            <p className={styles.heading}>March 2020</p>
            <p className={styles.heading}>
                <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">Udemy</a>&ensp;online courses
            </p>
            <p className={styles.position}>React Native Development ( <span className={styles.links}>
                <a href="https://www.udemy.com/certificate/UC-d411e1dc-5422-4644-8fe1-4cdf99117501/" target="_blank"
                   rel="noopener noreferrer">Certificate </a></span> )
            </p>
            <p>~~~~</p>
            <p className='mb-2'/>

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
