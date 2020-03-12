import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Contacts } from "./pages/Contacts/Contacts";
import { HomePage } from "./pages/HomePage/HomePage";
import { Header } from "./components/Header/Header";

function Routes() {
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
                {/*<Route path="*"><PageNotFound/></Route>*/}
            </Switch>
        </div>
    );
}

export default Routes;