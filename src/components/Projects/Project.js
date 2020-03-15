import React from 'react';
import styles from './Projects.module.css';
import { MDBIcon } from 'mdbreact';
import wouldYouRather from '../../assets/img/would_you_rather.png';
import insta from '../../assets/img/insta.svg';
import health from '../../assets/img/health.svg';
import todo from '../../assets/img/todo.png';
import photoUploader from '../../assets/img/telegram-1.png';
import expoText from '../../assets/img/expo.png';
import { Dev } from "./Dev";
import { GitHubLink } from "./GitHubLink";

export function Projects() {
    const linksGitHub = {
        insta: 'https://github.com/fufylev/lite_instagram',
        wouldYouRather: 'https://github.com/fufylev/would_you_rather_game',
        ela: 'https://github.com/fufylev/English-learning-App',
        fitnessApp: 'https://github.com/fufylev/fitness-calendar',
        todoApp: 'https://github.com/fufylev/react_native_todo',
        selfBlog: 'https://github.com/fufylev/react_native_self_posts'
    };

    return (
        <article className={styles.projects}>
            <h3 className={styles.title}>
                My recent work
            </h3>
            <p className={styles.headingText}> I'm a bit of a digital product junky <MDBIcon far icon="smile-beam"/>.
                Over the years, I've used hundreds
                of web and mobile apps in
                different industries and verticals. Eventually, I decided that it would be a fun challenge to try
                designing and building my own.</p>
            <p className={styles.headingText}>Here are a few design projects I've worked on recently. </p>
            <h4 className='text-center my-5 text-info'>
                React JS: &ensp;<MDBIcon fab icon="react"/>&ensp; <MDBIcon icon="desktop"/>
            </h4>
            <div className={styles.cardsContainer}>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <p className={styles.ela}>ELA</p>
                        <p className={styles.head}>English Learning App</p>
                        <p className={styles.content}>
                            During my internship in GeekBrains I and other several students were creating an MVP version of
                            the client-server application named "English Learning Application". I was responsible for
                            creating the front-end UI and its logic.
                        </p>
                        <GitHubLink link={linksGitHub.ela}/>
                        <a href="http://ela.abirula.com/vocabulary" className={styles.linkWeb} target="_blank"
                           rel="noopener noreferrer">
                            <span>www.ela.com</span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={wouldYouRather} alt="Would you rather game" className={styles.img}/>
                        <p className={styles.head}>Would you rather?</p>
                        <p className={styles.content}>
                            A web app that lets a user play the “Would You Rather?” game. The game goes like this: A
                            user is asked a question in the form: “Would you rather <strong>option
                            A</strong> or <strong>option B </strong>?”. Leader board is also available
                        </p>
                        <GitHubLink link={linksGitHub.wouldYouRather}/>
                        <a href="https://woul-you-rather.firebaseapp.com/" className={styles.linkWeb} target="_blank"
                           rel="noopener noreferrer">
                            <span>www.would-you-rather.com</span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={insta} alt="Would you rather game" className={styles.img}/>
                        <p className={styles.head}> Lite Insta </p>
                        <p className={styles.content}>
                            Sort of a lite version of an "Instagram" where I'm trying to solidify my skills in React JS
                            and
                            Rest API and apply all cutting-edge tools &ensp;<MDBIcon icon="code" className='m-0 p-0'/>
                        </p>
                        <Dev />
                        <GitHubLink link={linksGitHub.insta}/>
                        <a href="https://insta-andrey-f.firebaseapp.com/" className={styles.linkWeb} target="_blank"
                           rel="noopener noreferrer">
                            <span>www.insta.firebaseapp.app</span>
                        </a>
                        <div className={`d-flex flex-column align-items-center ${styles.extra}`}>
                            <span className='text-center'><smal>Try the current version as a test user or SignUp</smal></span>
                            <smal><strong>login:&emsp;</strong>test-user@gmail.com</smal>
                            <smal><strong>password:&emsp;</strong>Qwerty123</smal>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='text-center my-4 text-info'>React Native:&ensp;<MDBIcon fab icon="react"/>&ensp; <i
                className="fab fa-apple"></i>&ensp;
                <MDBIcon fab icon="android"/>
            </h4>
            <div className={styles.cardsContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={health} alt="Health" className={styles.img}/>
                        <p className={styles.head}>Fitness Calendar</p>
                        <p className={styles.content}>
                            Mobile app where user can schedule, save and check all his/her activities
                            in terms of heath & fitness: jogging, cycling, swimming, sleeping hrs, number of healthy
                            drinks, etc.
                        </p>
                        <Dev />
                        <GitHubLink link={linksGitHub.fitnessApp}/>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={todo} alt="todo" className={styles.img}/>
                        <p className={styles.head}>Todo Planer</p>
                        <p className={styles.content}>
                            A simple TODO application with various features.
                            This app I created with using 'Context' instead of 'Redux'.
                            Based on Google RealTime FireBase DB
                        </p>
                        <GitHubLink link={linksGitHub.todoApp}/>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={photoUploader} alt="Self Post" className={styles.img}/>
                        <p className={styles.head}>Self Blog</p>
                        <p className={styles.content}>
                            A simple Self Posts app with various features and very creative design
                            adapted to each platform in its own way
                        </p>
                        <Dev />
                        <GitHubLink link={linksGitHub.selfBlog}/>
                        <a href="https://expo.io/@fufylev/rn-self-posts" className={styles.link}
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