import React, { useState } from "react";

// ? Stylesheet
import styles from "./navbar.module.scss";

// ? All Component and View imports
import Registration from "../../Views/Registration/Registration";

const Navbar = (props) => {

  const SearchContext = useContext(AppContext);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = (event) => {
    event.preventDefault();
    setShowLoginModal(true);
  };

  const openLoginFromSignup = () => {
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const closeLoginModal = (event) => {
    event.stopPropagation();

    event.preventDefault();
    setShowLoginModal(false);
  };

  const openSignupModal = (event) => {
    event.preventDefault();
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeSignupModal = (event) => {
    event.stopPropagation();

    event.preventDefault();
    setShowSignupModal(false);
  };

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
        <div className={styles["icon-container"]}>
          <div className={styles.icon}>
            <i class="fas fa-caravan"></i>
          </div>

          <div
            className={styles.icon}
            // !! Search Form and/or Search Component will open on click of the magnifier - ternary operator to Display on all pages that only have the NavBar permanently on display..
            onClick={SearchContext.openForm}
            onClick={SearchContext.closeSearchButton}
          >
            <i class="fas fa-search"></i>
          </div>

          <div className={styles.icon}>
            <i class="far fa-heart"></i>
          </div>

          <div className={styles.icon}>
            <i class="far fa-comment"></i>
          </div>

          <div className={styles.icon}>
            <i class="far fa-user-circle" onClick={openLoginModal}>
              <Registration
                showLogin={showLoginModal}
                closeLogin={closeLoginModal}
                showSignup={showSignupModal}
                openSignup={openSignupModal}
                closeSignup={closeSignupModal}
                openLogin={openLoginFromSignup}
              />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;