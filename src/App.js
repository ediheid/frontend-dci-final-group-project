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
import Footer from "./Components/Footer/Footer";
import Search from "./Components/Search/Search";

const App = () => {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        {/* // !! Search Component is just here for development and will later only be imported to the required page Views */}
        <Search />

        {/* // ? NavBar Component could live here */}
        <main>
          <Switch>
            {/* // ? Template/placeholder for how to setup paths with components.. */}
            {/*  <Route path="/" exact component={Home} />*/}

            {/* // ? Fallback path - directs user back to login page */}
            {/* <Redirect to="/" exact /> */}
            {/* // ? or */}
            {/* <Route path="*" exact /> */}
          </Switch>
        </main>
        {/* // !!! Note: For footer to display correctly we need to place margin //
        // !! .. bottom on any View container to push the footer to the bottom */}
        <Footer />
        {/* // ? Footer  Component could live here */}
      </Router>
    </div>
  );
};

export default App;
