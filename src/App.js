import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

// ? Main scss
// !!!! - Figure out module classes..
import styles from "../src/Styling/app.module.scss";

// ? All Component and View imports
import LandingPage from "./Views/LandingPage/LandingPage";
import AboutUs from "./Views/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return (
        // !!!! - Figure out module classes..
        <div>
            <Router>
                {/* <Navbar /> */}
                {/* // ? NavBar Component could live here */}
                <main>
                    <Switch>
                        {/* // ? Template/placeholder for how to setup paths with components.. */}
                        {/*  <Route path="/" exact component={Home} />*/}
                        <LandingPage />

                        {/* // ? Fallback path - directs user back to login page */}
                        {/* <Redirect to="/" exact /> */}
                        {/* // ? or */}
                        {/* <Route path="*" exact /> */}
                        
                        {/* // ? About us overview */}
                        <Route path="/about-us" exact component={AboutUs} />
                    </Switch>
                </main>
                <Footer />
                {/* // ? Footer  Component could live here */}
            </Router>
        </div>
    );
};

export default App;
