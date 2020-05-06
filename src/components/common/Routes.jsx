import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "../home/HomePage";
import AboutPage from "../about/AboutPage";
import ContactPage from "../contact/ContactPage";
import WorkLandingPage from "../work/WorkLandingPage";
import TravelLandingPage from "../travel/TravelLandingPage";

class Routes extends React.Component{
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/work" exact component={WorkLandingPage} />
                    <Route path="/travel" exact component={TravelLandingPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
