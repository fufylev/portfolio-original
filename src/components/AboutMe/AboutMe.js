import React from 'react';
import styles from './AboutMe.module.css';

export function AboutMe() {

    return (
        <article className={styles.aboutMe}>
            <h3 className={styles.title}>About me</h3>
            <p className={styles.text}>
                Hello! My name is <strong>Andrei Fufylev. </strong>Nice to meet you.
            </p>
            <p className={styles.text}>
                I'm a motivated and results-focused professional in producing robust code with extensive experience in
                developing web-based and cross-platform mobile applications by leveraging various development tools and
                frameworks such as <strong><i>React Native</i></strong> or <strong><i>Flutter</i></strong>. Since 2021 I am practicing only <strong><i>Dart + Flutter</i></strong> 
                &nbsp;- it is my main mobile development stack, as for React and React Native I simply support old code on rare occasions in the projects I leaded.
            </p>
            <p className={styles.text}>
                I'm eager to support the dev team with top-notch coding skills. I'm quietly confident, naturally curious
                in all aspects of JavaScript & Dart patterns and complex interactive styled web pages developing, and
                perpetually working on improving my chops one design problem at a time.
            </p>
            <h5>Languages I speak:</h5>
            <p className={styles.text}>
                Advanced in both <strong>English</strong> and <strong>Dart</strong>
            </p>
            <h5>My stack:</h5>
            <ul className={styles.text}>
                <li>Dart & Flutter (practicing since 2020)</li> 
                <li>BLoC, Provider, retrofit, built_value, auto_route, get_it, doc_widget, sqlite3_flutter_libs + drift (SQL), Dart sealed-base classes state management, etc.</li>
                <li>Jira, Confluence, Yougile, Trello, Agile, Scrum team work</li>
                <li>Git, Gitlab, GitHub, Terminal</li>
                <br/>
                    ...before 2021 and on rare occasions nowadays (old code support)...<br/>
                <li>
                    HTML5, CSS3, Styled Components, SASS, BEM
                </li>
                <li>React & React Native</li>
                <li>Redux, Redux toolkit, MobX, MST</li>
                <li>
                    <a
                        href="https://github.com/fufylev/jquery_js_todo_app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        JavaScript(ES6+)
                    </a>
                    &nbsp;and&nbsp;
                    <a
                        href="https://github.com/fufylev/ReactFBReduxTKNumerology"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        TypeScript
                    </a>
                </li>

                <li>
                    <a
                        href="https://github.com/fufylev/lite-insta-v2/tree/master/server"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        NodeJS
                    </a>
                    &nbsp;- basic skills (server, http)

                </li>
                <li> <a
                    href="https://github.com/fufylev/lite-insta-v2/tree/master/server/models"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    MongoDB
                </a>
                    &nbsp;- basic skills</li>
                
            </ul>
        </article>
    );

}
