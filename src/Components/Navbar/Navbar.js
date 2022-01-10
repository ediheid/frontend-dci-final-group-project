import React, { useState, useContext } from "react";
import { AppContext } from "../../App.js";
import { Link } from "react-router-dom";

// ? Stylesheet
import styles from "../Navbar/Navbar.module.scss";

// ? All Component and View imports
import Registration from "../../Views/Registration/Registration";

const Navbar = (props) => {
  const modalContext = useContext(AppContext);
  const SearchContext = useContext(AppContext);

  // const [showLoginModal, setShowLoginModal] = useState(false);
  // const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = () => {
    modalContext.setShowLoginModal(true);
  };

  const closeLoginModal = (event) => {
    event.stopPropagation();
    modalContext.setShowLoginModal(false);
  };

  const openLoginFromSignup = () => {
    modalContext.setShowSignupModal(false);
    modalContext.setShowLoginModal(true);
  };

  const openSignupModal = () => {
    modalContext.setShowSignupModal(true);
    modalContext.setShowLoginModal(false);
  };

  const closeSignupModal = (event) => {
    event.stopPropagation();
    modalContext.setShowSignupModal(false);
  };

  const content = modalContext.currentUser.firstname.length > 0 ? 
  (
    <div className={styles["icon-container"]}>
    <Link onClick={SearchContext.returnHome} to="/">
      <div className={styles.icon}>
        <i className="fas fa-caravan"></i>
      </div>
    </Link>

    <div
      className={styles.icon}
      //  Search Form and/or Search Component will open on click of the magnifier - ternary operator to Display on all pages that only have the NavBar permanently on display..
      // onClick={SearchContext.openForm}
      onClick={SearchContext.closeSearchButton}
    >
      <i class="fas fa-search"></i>
    </div>

    <div className={styles.icon}>
      <i className="far fa-heart"></i>
    </div>

    <div className={styles.icon}>
      <i className="far fa-comment"></i>
    </div>

    <div className={styles.icon}>
      <i className="far fa-user-circle" onClick={openLoginModal}>
        <Registration
          showLogin={modalContext.showLoginModal}
          closeLogin={closeLoginModal}
          showSignup={modalContext.showSignupModal}
          openSignup={openSignupModal}
          closeSignup={closeSignupModal}
          openLogin={openLoginFromSignup}

          // signupFetch={props.signupFetch}
          // loginFetch={props.loginFetch}
          // collectLoginData={props.collectLoginData}
          // collectSignupData={props.collectSignupData}
          // signupData={props.signupData}
          // loginData={props.loginData}
        />
      </i>
    </div>
  </div>
  )
  : 
  (
    <div className={styles["icon-container"]}>
      <Link onClick={SearchContext.returnHome} to="/">
        <div className={styles.icon}>
          <i className="fas fa-caravan"></i>
        </div>
      </Link>

    <div
      className={styles.icon}
      //  Search Form and/or Search Component will open on click of the magnifier - ternary operator to Display on all pages that only have the NavBar permanently on display..
      // onClick={SearchContext.openForm}
      onClick={SearchContext.closeSearchButton}
    >
      <i class="fas fa-search"></i>
    </div>
  
  <div className={styles.icon}>
      <i className="far fa-user-circle" onClick={openLoginModal}>
        <Registration
          showLogin={modalContext.showLoginModal}
          closeLogin={closeLoginModal}
          showSignup={modalContext.showSignupModal}
          openSignup={openSignupModal}
          closeSignup={closeSignupModal}
          openLogin={openLoginFromSignup}

          // signupFetch={props.signupFetch}
          // loginFetch={props.loginFetch}
          // collectLoginData={props.collectLoginData}
          // collectSignupData={props.collectSignupData}
          // signupData={props.signupData}
          // loginData={props.loginData}
        />
      </i>
    </div>
  </div>
  );

  return (
    <>
      {/* // !! Conditional styling passed down from  Search.js Component - to change the colour of Navbar when search field is open - to match search full opacity background  */}
      <div
        className={`${styles["navbar-container"]} ${
          SearchContext.openSearch
            ? styles["bgChange"]
            : styles["navbar-container"]
        }`}
        //   className={styles["navbar-container"]}
      >
        {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
        {content}
        
      </div>
    </>
  );
};

export default Navbar;
