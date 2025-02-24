import React from 'react';
import styles from './Projects.module.css';
import { MDBIcon } from 'mdbreact';
import insta from '../../assets/img/insta.svg';
import CryptoLearn from '../../assets/img/CryptoLearn.png';
import { Dev } from './Dev';
import { GitHubLink } from './GitHubLink';
import ForexCopy from '../../assets/img/ForexCopy.png';
import Instaverify from '../../assets/img/Instaverify.png';
import Favicon from '../../assets/img/favicon.png';
import InstaForex from '../../assets/img/216.png';
import ATB from '../../assets/img/atb.png';
import RBT from '../../assets/img/rbt.png';
import IEYE from '../../assets/img/ieye.png';

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
        num: 'https://github.com/fufylev/ReactFBReduxTKNumerology',
    };

    return (
        <article className={styles.projects}>
            <h3 className={styles.title}>My recent work</h3>
            <p className={styles.headingText}>
                I'm a bit of a digital product junky <MDBIcon far icon="smile-beam" />. Over the years, I've used
                hundreds of web and mobile apps in different industries and verticals. Here are a few projects I've
                worked on recently.
            </p>
            <h3 className="text-center my-5 text-info">Flutter</h3>

            <div className={styles.cardsContainer}>
                {/* <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={IEYE} alt="ieye.app" className={styles.img} />
                        <p className={styles.head}>iEYE core (b2c)</p>
                        <p className={styles.content}>
                            Developing from the scratch a city places (venues) guide - a social app named iEYE&nbsp;
                            <a href="https://play.google.com/store/apps/details?id=com.ieye.b2c"
                                target="_blank"
                                rel="noopener noreferrer">(android</a>,
                            &nbsp;
                            <a href="https://apps.apple.com/ru/app/ieye-%D1%81%D0%BE%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F-%D1%81%D0%B5%D1%82%D1%8C-%D0%B3%D0%B8%D0%B4/id6550896262"
                                target="_blank"
                                rel="noopener noreferrer">iOS)</a>.
                            <br /><br /><strong>Stack:</strong> Clean Architecture, Dart, Flutter, BLoC, Provider, Rive, Yandex Map, QR-scanner, rxdart, etc.
                        </p>

                        <p className={styles.content}>In production since Aug, 2024.</p>
                        <Dev />
                    </div>
                    <div style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        color: "red",
                        fontSize: 16
                    }}>2022 - now
                    </div>
                </div> */}

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={RBT} alt="RBT.ru" className={styles.img} />
                        <p className={styles.head}>RBT.ru client app (b2c)</p>
                        <p className={styles.content}>
                            Developing a marketing/retail app from the scratch named RBT.ru&nbsp;
                            <a
                                href="https://play.google.com/store/apps/details?id=ru.rbt.b2c_mobile_app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                (android
                            </a>
                            , &nbsp;
                            <a
                                href="https://apps.apple.com/ru/app/rbt-ru-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82-%D0%B1%D1%8B%D1%82%D0%BE%D0%B2%D0%BE%D0%B9-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B8/id6615071026"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                iOS)
                            </a>
                            .
                            <br />
                            <br />
                            <strong>Stack:</strong> Clean Architecture, Dart, Flutter, BLoC, Provider, Rive, Yandex Map,
                            QR-scanner, etc.
                        </p>

                        <p className={styles.content}>In production since June, 2024.</p>
                        <Dev />
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            color: 'red',
                            fontSize: 16,
                        }}
                    >
                        2023 - now
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={ATB} alt="Atb Bank" className={styles.img} />
                        <p className={styles.head}>Asian-Pacific Bank mobile app</p>
                        <p className={styles.content}>
                            Developing a bank app from the scratch named&nbsp;
                            <a
                                href="https://play.google.com/store/apps/details?id=su.atb.mobileapp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Atb Bank (android)
                            </a>
                            , &nbsp;
                            <a href="https://apps.apple.com/app/id1604332202" target="_blank" rel="noopener noreferrer">
                                Atb Bank (iOS)
                            </a>
                            .
                            <br />
                            <br />
                            <strong>Stack:</strong> Clean Architecture, Dart, Flutter, BLoC, Provider, Rive, Yandex Map.
                        </p>

                        <p className={styles.content}>In production since Apr, 2023.</p>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            // color: "red",
                            fontSize: 16,
                        }}
                    >
                        2022-2023
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={InstaForex} alt="Quotes" className={styles.img} />
                        <p className={styles.head}>InstaForex: Quotes & Trading</p>
                        <p className={styles.content}>
                            Reverse engineering of the existing application from <strong>React Native</strong> into{' '}
                            <strong>Flutter</strong> from the scratch named&nbsp;
                            <a
                                href="https://play.google.com/store/apps/details?id=com.instaforex.mobiletrader"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                InstaForex
                            </a>
                            &nbsp; in order to apply a new design, new version of API and boost its performance to the
                            new level by using Dart Isolate.
                            <br />
                            <br />
                            <strong>Stack:</strong> Clean Architecture, Dart, Flutter, BLoC + @freezed, Provider, Rive,
                            Web Sockets, WebView, Dio as Http, MVVM, Isolates and many others techs.
                        </p>

                        <p className={styles.content}>
                            In production since Apr, 2022. The iOS version is under release
                        </p>
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            // color: "red",
                            fontSize: 16,
                        }}
                    >
                        2021-2022
                    </div>
                </div>
            </div>
            {/* 
            <h3 className="text-center my-5 text-info">
                React JS &ensp;
                <MDBIcon fab icon="react" />
                &ensp; <MDBIcon icon="desktop" />
            </h3>

            <div className={styles.cardsContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={insta} alt="Lite Insta" className={styles.img} />
                        <p className={styles.head}> Lite Insta </p>
                        <p className={styles.content}>
                            Sort of a lite version of an "Instagram" where I was trying to solidify my skills in React JS
                            and Rest API and apply all cutting-edge tools &ensp;
                            <MDBIcon icon="code" className="m-0 p-0" />
                            <br /><strong>Stack:</strong> JSX + SASS, JS(ES6+), React Components + Hooks, back-end
                            - Google Cloud FireStore DataBase, NodeJS.
                        </p>
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
                    <div style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        // color: "red",
                        // fontWeight: "",
                        fontSize: 16
                    }}>Old (2020)
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={Favicon} alt="TODO" className={styles.img} />
                        <p className={styles.head}>Numerology</p>
                        <p className={styles.content}>
                            A private project for my sister which I lead from the scratch - this is a second version with lots of improvements.
                            The project gonna be a commercial, thus later I will make it private when it comes to multiuser mode.
                            Currently this project helps my sister to prepare to client consulting by entering the client's data into forms and and
                            receiving a prepared page with necessary data and graphics made inside a canvas.
                            <br /><br /><strong>Stack:</strong> TypeScript, JS, Redux toolkit, Kanva + React-Kanva
                        </p>
                        <GitHubLink link={linksGitHub.num} />
                        <a
                            href="https://kravchenko-numerolog.web.app"
                            className={styles.linkWeb}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>https://kravchenko-numerolog.web.app</span>
                        </a>
                        <Dev />
                    </div>
                    <div style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        color: "red",
                        // fontWeight: "",
                        fontSize: 16
                    }}>2020 - now
                    </div>
                </div>
            </div> */}

            <h3 className="text-center my-5 text-info">
                React Native &ensp;
                <MDBIcon fab icon="react" />
                &ensp; <i className="fab fa-apple"></i>&ensp;
                <MDBIcon fab icon="android" />
            </h3>

            <div className={styles.cardsContainer}>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={ForexCopy} alt="ForexCopy" className={styles.img} />
                        <p className={styles.head}>ForexCopy</p>
                        <p className={styles.content}>
                            Development of the new application from the scratch named ForexCopy.
                            <br />
                            <a
                                href="https://play.google.com/store/apps/details?id=com.instaforex.android.forexcopy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ForexCopy
                            </a>
                            &nbsp;is the best InstaForex app for copying orders of top traders.
                            <br />
                            The ForexCopy mobile app from InstaForex will help you explore the process of copying orders
                            of top traders and start making money on their successful trades. ForexCopy is a
                            user-friendly app designed to satisfy traders’ needs, requests, and desires.
                            <br />
                            <br />
                            <strong>Stack:</strong> JS(ES6+) + TypeScript, React Native, MST (mobx-state-tree), React
                            Navigation, React-Native-Reanimated animations, WebView, etc.
                        </p>
                        <p className={styles.content}>In production since Apr, 2021</p>
                        {/* <Dev /> */}
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            color: 'red',
                            // fontWeight: "bold",
                            fontSize: 16,
                        }}
                    >
                        2020-2021
                    </div>
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={CryptoLearn} alt="CryptoLearn" className={styles.img} />
                        <p className={styles.head}>CryptoLearn cryptocurrency</p>
                        <p className={styles.content}>
                            I have entirely rewritten and restructured the existing live application CryptoLearn.
                            <br />
                            <a
                                href="https://play.google.com/store/apps/details?id=com.instaforex.android.cryptolearn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                CryptoLearn
                            </a>
                            &nbsp;is live Google Play deployed all-in-one app where you can find the required
                            information for successful trading in the cryptocurrency market. The new information guide
                            will provide you with the specifics of the crypto market dynamics. Traders can get the
                            latest news on digital currencies, find the appropriate information, as well as participate
                            in training seminars.
                            <br />
                            <strong>Stack:</strong> JS(ES6+), React Native, MST (mobx-state-tree), React Navigation,
                            React-Native-Reanimated animations, WebView, etc.
                        </p>
                        <p className={styles.content}>In production since Feb, 2020</p>
                        {/* <Dev /> */}
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            color: 'red',
                            // fontWeight: "bold",
                            fontSize: 20,
                        }}
                    >
                        2020-2021
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={Instaverify} alt="Instaverify" className={styles.img} />
                        <p className={styles.head}>InstaVerify</p>
                        <p className={styles.content}>
                            Re-development of the existing application from the scratch named InstaVerify in order to
                            apply new design and new API.
                            <br />
                            <a
                                href="https://play.google.com/store/apps/details?id=com.instaforex.verify&hl=ru"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Android
                            </a>
                            &nbsp;&&nbsp;
                            <a
                                href="https://apps.apple.com/gb/app/instaverify/id1581604223"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                iOS
                            </a>
                            &nbsp; of the InstaForex trading account in your mobile.
                            <br />
                            <br />
                            <strong>Stack:</strong> TypeScript only(ES6+), React Native, MST (mobx-state-tree) + MobX,
                            React Navigation, &nbsp;
                            <strong>React-Reanimated v.2</strong> animations, WebView, <strong>Rive animation</strong>,
                            etc.
                        </p>
                        <p className={styles.content}>In production since Feb, 2020</p>
                        {/* <Dev /> */}
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            color: 'red',
                            // fontWeight: "bold",
                            fontSize: 20,
                        }}
                    >
                        2021
                    </div>
                </div>
            </div>
        </article>
    );
}
