import React from 'react';
import styles from './Projects.module.css';
import { MDBIcon } from 'mdbreact';
import wouldYouRather from '../../assets/img/would_you_rather.png';
import insta from '../../assets/img/insta.svg';
import health from '../../assets/img/health.png';
import todo from '../../assets/img/todo.png';
import photoUploader from '../../assets/img/photoUploader.png';
import expoText from '../../assets/img/expo.png';
import flash_cards from '../../assets/img/flash_cards.png';
import team from '../../assets/img/company_team_icon.png';
import forex from '../../assets/img/forex.png';
import { Dev } from './Dev';
import { GitHubLink } from './GitHubLink';

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
                {' '}
                I'm a bit of a digital product junky <MDBIcon far icon="smile-beam" />. Over the years, I've used
                hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it
                would be a fun challenge to try designing and building my own.
            </p>
            <p className={styles.headingText}>Here are a few projects I've worked on recently.</p>
            <h3 className="text-center my-5 text-info">
                React JS: &ensp;
                <MDBIcon fab icon="react" />
                &ensp; <MDBIcon icon="desktop" />
            </h3>
            <div className={styles.cardsContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <p className={styles.ela}>ELA</p>
                        <p className={styles.head}>English Learning App</p>
                        <p className={styles.content}>
                            During my internship in GeekBrains I and other several students were creating an MVP version
                            of the client-server application named "English Learning Application". I was responsible for
                            creating the front-end UI and its logic.
                            <br/><strong>Stack:</strong> JSX + SASS, JS(ES6+), React Components, Saga, Trello task manager
                        </p>
                        <GitHubLink link={linksGitHub.ela} />
                        <a
                            href="http://ela.abirula.com/vocabulary"
                            className={styles.linkWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>www.ela.com</span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={wouldYouRather} alt="Would you rather game" className={styles.img} />
                        <p className={styles.head}>Would you rather?</p>
                        <p className={styles.content}>
                            A web app that lets a user play the “Would You Rather?” game. The game goes like this: A
                            user is asked a question in the form: “Would you rather <strong>option A</strong> or{' '}
                            <strong>option B </strong>?”. Leader board is also available
                            <br/><strong>Stack:</strong> JSX + SASS, JS(ES6+), React Components (HOC)
                        </p>
                        <GitHubLink link={linksGitHub.wouldYouRather} />
                        <a
                            href="https://woul-you-rather.firebaseapp.com/"
                            className={styles.linkWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>www.would-you-rather.com</span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={insta} alt="Lite Insta" className={styles.img} />
                        <p className={styles.head}> Lite Insta </p>
                        <p className={styles.content}>
                            Sort of a lite version of an "Instagram" where I'm trying to solidify my skills in React JS
                            and Rest API and apply all cutting-edge tools &ensp;
                            <MDBIcon icon="code" className="m-0 p-0" />
                            <br/><strong>Stack:</strong> JSX + SASS, JS(ES6+), React Components + Hooks, back-end
                            - Google Cloud FireStore DataBase, NodeJS.
                        </p>
                        <Dev />
                        <GitHubLink link={linksGitHub.insta} />
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
                        <img src={team} alt="TODO" className={styles.img} />
                        <p className={styles.head}>Corporate network Task Manager (socket.io)</p>
                        <p className={styles.content}>
                            A web based app that lets a user to read, check and alter all tasks in real-time within the corporate network.
                            <br/><strong>Stack:</strong> JS(ES6+), <span className={styles.vue}>VueJS <i className="fab fa-vuejs"></i> </span>+ Styled CSS, NodeJS, MongoDB + Mongoose, socket.io, jwt token
                        </p>
                        <GitHubLink link={linksGitHub.todoSocket} />
                    </div>
                </div>
            </div>
            <h3 className="text-center my-5 text-info">
                React Native:&ensp;
                <MDBIcon fab icon="react" />
                &ensp; <i className="fab fa-apple"></i>&ensp;
                <MDBIcon fab icon="android" />
            </h3>
            <div className={styles.cardsContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={health} alt="Health" className={styles.img} />
                        <p className={styles.head}>Fitness Calendar</p>
                        <p className={styles.content}>
                            Schedule, save and check all your heath & fitness activities: jogging, cycling, swimming,
                            sleeping hrs, number of healthy drinks, etc.
                            <br/><strong>Stack:</strong> JS(ES6+), React Native - components & hooks
                        </p>
                        <Dev />
                        <GitHubLink link={linksGitHub.fitnessApp} />
                        <a
                            href="https://expo.io/@fufylev/fitness-calendar"
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={expoText} alt="expo" style={{ width: 20, height: 20 }} />
                            &ensp;
                            <span>Published on Expo </span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={photoUploader} alt="Self Post" className={styles.img} />
                        <p className={styles.head}>Self Blog</p>
                        <p className={styles.content}>
                            A simple Self Posts app with various features and very creative design adapted to each
                            platform in its own way
                            <br/><strong>Stack:</strong> JS(ES6+), React Native - hooks only, SQLite
                        </p>
                        <Dev />
                        <GitHubLink link={linksGitHub.selfBlog} />
                        <a
                            href="https://expo.io/@fufylev/rn-self-posts"
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={expoText} alt="expo" style={{ width: 20, height: 20 }} />
                            &ensp;
                            <span>Published on Expo </span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={flash_cards} alt="Mobile Flashcards" className={styles.img} />
                        <p className={styles.head}>Mobile Flashcards</p>
                        <p className={styles.content}>
                            A mobile application that allows users to study collections of flashcards. The app will
                            allow users to create different categories of flashcards called "decks", add flashcards to
                            those decks, then take quizzes on those decks.
                            <br/><strong>Stack:</strong> JS(ES6+), React Native - hooks only, AsyncStorage
                        </p>
                        <Dev />
                        <GitHubLink link={linksGitHub.flash_cards} />
                        <a href="https://expo.io/@fufylev/mobile-flashcards" className={styles.link}
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src={expoText} alt="expo" style={{width: 20, height: 20}}/>&ensp;
                            <span>Published on Expo </span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={forex} alt="Mobile Flashcards" className={styles.img} />
                        <p className={styles.head}>Quotes (Socket.IO) - new</p>
                        <p className={styles.content}>
                            A simple app indicating currency pair quotes and their details in real time<br/>
                            React Context used as an app state management - no redux
                            <br/><br/><strong>Stack:</strong> JS(ES6+), React Native - hooks only, Socket.IO, React Context
                        </p>
                        <Dev />
                        <GitHubLink link={linksGitHub.quotes} />
                        <a href="https://expo.io/@fufylev/real-time-quotes" className={styles.link}
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src={expoText} alt="expo" style={{width: 20, height: 20}}/>&ensp;
                            <span>Published on Expo </span>
                        </a>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={todo} alt="todo" className={styles.img} />
                        <p className={styles.head}>Todo Planer</p>
                        <p className={styles.content}>
                            A simple TODO application with various features. <br/>Built by using 'Context' pattern instead of
                            'Redux'.
                            <br/><strong>Stack:</strong> JS(ES6+), React Native - hooks only, Google FireBase DB
                        </p>
                        <GitHubLink link={linksGitHub.todoApp} />
                    </div>
                </div>
            </div>
        </article>
    );
}
