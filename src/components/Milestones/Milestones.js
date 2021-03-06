import React from 'react';
import styles from './Milestones.module.css';

export function Milestones() {
  return (
    <article className={styles.career}>
      <h2 className={styles.title}> Milestones </h2>

      <h3 className='text-center mb-3 text-info'>Professional Experience</h3>

      <p className={styles.heading}>April 2020 – Present</p>
      <p className={styles.position}>Online Media Solutions Corp.</p>
      <p className={styles.position}>React Native Developer</p>
      <ul className={styles.list}>
        <li className="">Fully remote work via JIRA, Confluence, Skype, Telegram.</li>
        <li className="">Development of complex mobile applications.</li>
        <li className="">Work via private GitHub repositories and ssh key.</li>
        <li>My accomplishments:</li>
        <ul>
          <li className="">
            I have entirely rewritten and restructured the existing application&ensp;
            <a href="https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn" target="_blank"
               rel="noopener noreferrer">CryptoLearn</a>:
            <ul>
              <li>React Navigation was updated from v1 to v.5.7.1</li>
              <li>Whole project was migrated from Redux to MST (mobx-state-tree).</li>
              <li>All API calls and invocations were moved on the MST life-circle side.</li>
              <li>All explicit invocations of AsyncStorage were replaced by Persist Storage in favor of app's
                reactiveness.
              </li>
              <li>App's architecture was optimized in the way so there are now no any re-renders throughout the app
                while using and screen transition.
              </li>
              <li>App's code structure was improved by using ES6-9 code styling along with ESLint lib. All class
                components were rewritten to functional style with using HOCs and Hooks.
              </li>
            </ul>
          </li>
          <li>Development of the new application from the scratch named ForexCopy. Development in the middle stage. This
            will be the app with the same functionality as web app
            &ensp;<a href="https://www.instaforex.com/forexcopy_system" target="_blank"
                     rel="noopener noreferrer">ForexCopy</a>.
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
        <li className="">
          In order to solidify my skills in React and NodeJS, I am developing a sort of lite version of
          &ensp;<a href="https://insta-andrey-f.web.app/" target="_blank"
                   rel="noopener noreferrer">Instagram</a>. This is a client-server application
          with various stack: HTML5, CSS3+SASS (moduled),JavaScript (ES5, ES6+), React JS, Redux and other middlewares,
          Google iCloud Firebase uses as a server. <br/>Currently – I'm re-writing a new
          version from the scratch having added TypeScript and Node.JS + MongoDB + GraphQL on the backend.
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

      <h3 className='text-center mb-3 text-info'>Self Education & Trainings</h3>

      <span className={styles.heading}>Jan 2020 – Apr 2020</span> &emsp; <span
      style={{fontSize: 20, color: "red", fontWeight: "bold"}}>New!!!</span>
      <p className={styles.heading}>
        <a href="https://www.udacity.com/course/react-nanodegree--nd019" target="_blank"
           rel="noopener noreferrer">Udacity </a>Nano Degree Program - "Become a React Developer"
      </p>
      <p className={styles.position}>React & React Native ( <span className={styles.links}>
                <a href="https://confirm.udacity.com/239UATAS" target="_blank"
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
    </article>
  );
}
