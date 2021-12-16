import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// ? Main scss
import styles from "./Styling/app.module.scss";

// ? All Component and View imports
import LandingPage from "./Views/LandingPage/LandingPage";
import AboutUs from "./Views/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";
import Verification from "./Components/Verification/Verification";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    adress: {
      street: "",
      number: "",
      city: "",
      postcode: "",
    },
    birthday: "",
    locations: [],
    bookings: [],
    verified: false,
  });

  return (
    // !!!! - Figure out module classes..
    <div>
      <Router>
        <Navbar />
        {/* // ? NavBar Component could live here */}
        <Search />
        <main>
          <Switch>
            {/* // ? Template/placeholder for how to setup paths with components.. */}
            <Route path="/" exact component={LandingPage} />
            {/* <LandingPage /> */}

            {/* // ? Fallback path - directs user back to login page */}
            {/* <Redirect to="/" exact /> */}
            {/* // ? or */}
            {/* <Route path="*" exact /> */}

            {/* // ? About us overview */}
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/verify-email" exact component={Verification} />
          </Switch>
        </main>
        <Footer />
        {/* // ? Footer  Component could live here */}
      </Router>
    </div>
  );
};

export default App;
