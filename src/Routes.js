import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Contacts } from "./pages/Contacts/Contacts";
import { HomePage } from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./pages/NotFound404/PageNotFound";
import { GoUp } from "./components/GoUp/GoUp";

function Routes() {
    // alert("The page is being re-developed and will be updated and uploaded within the next couple of days. Page's design to be developed. Thanks for patient. Cheers");

    return (
        <div>
            <Header />
            <Switch>
                <Route
                    exact path='/'
                    render={(props) => <HomePage {...props} />}
                />
                <Route
                    path='/contacts'
                    render={(props) => <Contacts {...props} />}
                />
                <Route path="*"><PageNotFound/></Route>
            </Switch>
            <hr />
            <Footer />
            <GoUp/>
        </div>
    );
}

export default Routes;