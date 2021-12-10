import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// ? Main scss
import "./Styling/App.module.scss";

const App = () => {
  return (
    <div className="app-container">
      This is gonna be our awesome app!!
      <Router>
        {/* // !! NavBar Component can live here */}
        <main>
          <Switch>
            {/* // !! Template/placeholder for how to setup paths with components.. */}
            {/*  <Route path="/" exact component={Home} />*/}

            {/* // !! Fallback path - directs user back to login page */}
            {/* <Redirect to="/" exact /> */}
            {/* // !! or */}
            {/* <Route path="*" exact /> */}
          </Switch>
        </main>

        {/* // !! Footer Component can live here */}
      </Router>
    </div>
  );
};

export default App;
