import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// ? Main scss

// !!!! - Figure out module classes..
import styles from "./Styling/App.module.scss";

const App = () => {
  return (
    // !!!! - Figure out module classes..
    <div className={styles["app-container"]}>
      This is gonna be our awesome app!!
      <Router>
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

        {/* // ? Footer  Component could live here */}
      </Router>
    </div>
  );
};

export default App;
