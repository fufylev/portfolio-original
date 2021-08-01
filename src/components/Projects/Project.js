import React from 'react';
import styles from './Projects.module.css';
import {MDBIcon} from 'mdbreact';
import insta from '../../assets/img/insta.svg';
import expoText from '../../assets/img/expo.png';
import team from '../../assets/img/company_team_icon.png';
import forex from '../../assets/img/forex.png';
import CryptoLearn from '../../assets/img/CryptoLearn.png';
import {Dev} from './Dev';
import {GitHubLink} from './GitHubLink';
import ForexCopy from '../../assets/img/ForexCopy.png';
import Instaverify from '../../assets/img/Instaverify.png';

export function Projects() {
    const linksGitHub = {
        insta: 'https://github.com/fufylev/lite_instagram',
        wouldYouRather: 'https://github.com/fufylev/would_you_rather_game',
        ela: 'https://github.com/fufylev/English-learning-App',
        fitnessApp: 'https://github.com/fufylev/fitness-calendar',
        todoApp: 'https://github.com/fufylev/react_native_todo',
        selfBlog: 'https://github.com/fufylev/react_native_self_posts',
        flash_cards: 'https://github.com/fufylev/mobile-flashcards',
        todoSocket: 'https://github.com/fufylev/node.js-25.06/tree/master/Andrey_Fufylev/todo_Vue_token_web_socket',
        quotes: 'https://github.com/fufylev/real-time-quotes',
    };

    return (
        <article className={styles.projects}>
            <h3 className={styles.title}>My recent work</h3>
            <p className={styles.headingText}>
                I'm a bit of a digital product junky <MDBIcon far icon="smile-beam"/>. Over the years, I've used
                hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it
                would be a fun challenge to try designing and building my own.
            </p>

            <p className={styles.headingText}>Here are a few projects I've worked on recently.</p>
            <h3 className="text-center my-5 text-info">
                React JS: &ensp;
                <MDBIcon fab icon="react"/>
                &ensp; <MDBIcon icon="desktop"/>
            </h3>

            <div className={styles.cardsContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={insta} alt="Lite Insta" className={styles.img}/>
                        <p className={styles.head}> Lite Insta </p>
                        <p className={styles.content}>
                            Sort of a lite version of an "Instagram" where I'm trying to solidify my skills in React JS
                            and Rest API and apply all cutting-edge tools &ensp;
                            <MDBIcon icon="code" className="m-0 p-0"/>
                            <br/><strong>Stack:</strong> JSX + SASS, JS(ES6+), React Components + Hooks, back-end
                            - Google Cloud FireStore DataBase, NodeJS.
                        </p>
                        {/*<Dev />*/}
                        <GitHubLink link={linksGitHub.insta}/>
                        <a
                            href="https://insta-andrey-f.firebaseapp.com/"
                            className={styles.linkWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>www.insta.firebaseapp.app</span>
                        </a>
                        <div className={`d-flex flex-column align-items-center ${styles.extra}`}>
                            <span className="text-center">
                                <smal>Try the current version as a test user or SignUp</smal>
                            </span>
                            <smal>
                                <strong>login:&emsp;</strong>test-user@gmail.com
                            </smal>
                            <smal>
                                <strong>password:&emsp;</strong>Qwerty123
                            </smal>
                        </div>
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={team} alt="TODO" className={styles.img}/>
                        <p className={styles.head}>Corporate network Task Manager (socket.io)</p>
                        <p className={styles.content}>
                            A web based app that lets a user to read, check and alter all tasks in real-time within the
                            corporate network.
                            <br/><strong>Stack:</strong> JS(ES6+), <span className={styles.vue}>VueJS <i
                            className="fab fa-vuejs"></i> </span>+ Styled CSS, NodeJS, MongoDB + Mongoose, socket.io,
                            jwt token
                        </p>
                        <GitHubLink link={linksGitHub.todoSocket}/>
                    </div>
                </div>
            </div>

            <h3 className="text-center my-5 text-info">
                React Native:&ensp;
                <MDBIcon fab icon="react"/>
                &ensp; <i className="fab fa-apple"></i>&ensp;
                <MDBIcon fab icon="android"/>
            </h3>

            <div className={styles.cardsContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={ForexCopy} alt="ForexCopy" className={styles.img}/>
                        <p className={styles.head}>ForexCopy</p>
                        <p className={styles.content}>
                            Development of the new application from the scratch named ForexCopy<br/>
                            <a href="https://play.google.com/store/apps/details?id=com.instaforex.android.forexcopy"
                               target="_blank"
                               rel="noopener noreferrer">ForexCopy</a>&nbsp; is the best InstaForex app for copying
                            orders of top traders.<br/>
                            The ForexCopy mobile app from InstaForex will help you explore the process of copying orders
                            of top traders and start making money on their successful trades. ForexCopy is a
                            user-friendly app designed to satisfy traders’ needs, requests, and desires.
                            <br/><br/><strong>Stack:</strong> JS(ES6+) + TypeScript, React Native, MST
                            (mobx-state-tree), React Navigation,
                            React-Native-Reanimated animations, WebView, etc.
                        </p>
                        <Dev/>
                    </div>
                    <div style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        color: "red",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>New !!!
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={CryptoLearn} alt="CryptoLearn" className={styles.img}/>
                        <p className={styles.head}>CryptoLearn cryptocurrency</p>
                        <p className={styles.content}>
                            I have entirely rewritten and restructured the existing live application CryptoLearn<br/>
                            <a href="https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn"
                               target="_blank"
                               rel="noopener noreferrer">CryptoLearn</a>&nbsp;is live Google Play deployed all-in-one
                            app where you can find the
                            required information for successful trading in the cryptocurrency market. The new
                            information guide will provide you with the specifics of the crypto market dynamics. Traders
                            can get the latest
                            news on digital currencies, find the appropriate information, as well as participate in
                            training seminars.
                            <br/><strong>Stack:</strong> JS(ES6+), React Native, MST (mobx-state-tree), React
                            Navigation,
                            React-Native-Reanimated animations, WebView, etc.
                        </p>
                        <Dev/>
                    </div>
                    <div style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        color: "red",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>New !!!
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={Instaverify} alt="Instaverify" className={styles.img}/>
                        <p className={styles.head}>InstaVerify</p>
                        <p className={styles.content}>
                            Re-development of the existing application from the scratch named InstaVerify in order to
                            apply new design and new API.<br/>
                            <a href="https://play.google.com/store/apps/details?id=com.instaforex.verify&hl=ru"
                               target="_blank"
                               rel="noopener noreferrer">Instaverify</a>&nbsp;of the InstaForex trading account in your
                            mobile.
                            <br/><strong>Stack:</strong> TypeScript only(ES6+), React Native, MST (mobx-state-tree) +
                            MobX, React Navigation,
                            React-Native-Reanimated v.2 animations, WebView, Rive animation, etc.
                        </p>
                        <Dev/>
                    </div>
                    <div style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        color: "red",
                        fontWeight: "bold",
                        fontSize: 20
                    }}>New !!!
                    </div>
                </div>


                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={forex} alt="Quotes" className={styles.img}/>
                        <p className={styles.head}>Quotes (Socket.IO)</p>
                        <p className={styles.content}>
                            A simple app indicating currency pair quotes and their details in real time<br/>
                            React Context used as an app state management - no redux
                            <br/><br/><strong>Stack:</strong> JS(ES6+), React Native - hooks only, Socket.IO, React
                            Context
                        </p>

                        <GitHubLink link={linksGitHub.quotes}/>
                        <a href="https://expo.io/@fufylev/real-time-quotes" className={styles.link}
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src={expoText} alt="expo" style={{width: 20, height: 20}}/>&ensp;
                            <span>Published on Expo </span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
