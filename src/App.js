import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

// ? Main scss
// !!!! - Figure out module classes..
import styles from "./Styling/app.module.scss";

// ? All Component and View imports
import LandingPage from "./Views/LandingPage/LandingPage";
import AboutUs from "./Views/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
// import Search from "./Components/Search/Search";
import SignUp from "./Components/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
    return (
        // !!!! - Figure out module classes..
        <div>
            <Router>
                {/* // !! Nearly works */}
                <Navbar />
                {/* // ? NavBar Component could live here */}
                {/* <Search /> */}

                <main>
                    <Switch>
                        {/* // ? Template/placeholder for how to setup paths with components.. */}
                        <Route path="/" exact component={LandingPage} />

                        <Route path="/sign-up" exact component={SignUp} />

                        {/* // ? About us overview */}
                        <Route path="/about-us" exact component={AboutUs} />

                        {/* // ? Fallback path - directs user back to login page */}
                        {/* <Redirect to="/log-in" exact /> */}
                        {/* // ? or */}
                        {/* <Route path="*" exact /> */}
                        {/* // ? Sign Up modal */}
                        {/* <Route path="/navbar" exact component={Navbar} /> */}
                    </Switch>
                </main>

                {/* // ? Footer  Component could live here */}
                <Footer />
            </Router>
        </div>
    );
};

export default App;
