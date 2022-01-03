import React, { useState, useContext } from "react";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../Navbar/Navbar.module.scss";

// ? All Component and View imports
import Registration from "../../Views/Registration/Registration";
import Search from "../Search/Form";

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
    event.preventDefault();
    setShowLoginModal(false);
  };

  const openSignupModal = (event) => {
    event.preventDefault();
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeSignupModal = (event) => {
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
            onClick={SearchContext.openSearch}
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

      {/* // !!! Match bg colour styling! AND Hide search bar on close */}
      {/*  // !!! Maybe make new function to display full Search Field and form */}
      {/*  // !!! Hide when magnifier is not clicked */}
      <Search
        open={SearchContext.openForm}
        openSearch={SearchContext.openSearch}
        closeSearchButton={SearchContext.closeSearchButton}
      />
    </>
  );
};

export default Navbar;

///////////////////////////////////////////////////////////////////
// import React, { useState } from "react";

// // ? Stylesheet
// import styles from "../Navbar/Navbar.module.scss";

// // ? All Component and View imports
// import LogIn from "../../Components/LogIn/LogIn";
// import SignUp from "../../Components/SignUp/SignUp";

// const Navbar = () => {
//     const [showLogIn, setShowLogIn] = useState(false);

//     const openLogIn = (event) => {
//         event.preventDefault();
//         setShowLogIn(true);
//     };

//     const closeLogIn = (event) => {
//         event.preventDefault();
//         setShowLogIn(false);
//         console.log("background was clicked close log in");
//     };

//     return (
//         <>
//             <div className={styles["navbar-container"]}>
//                 <LogIn
//                     onCloseLogin={closeLogIn}
//                     showLogin={showLogIn}
//                     // setShowLogIn={setShowLogIn}
//                 />

//                 {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
//                 <div className={styles["icon-container"]}>
//                     <div className={styles.icon}>
//                         <i class="fas fa-caravan"></i>
//                     </div>

//                     <div className={styles.icon}>
//                         <i class="fas fa-search"></i>
//                     </div>

//                     <div className={styles.icon}>
//                         <i class="far fa-heart"></i>
//                     </div>

//                     <div className={styles.icon}>
//                         <i class="far fa-comment"></i>
//                     </div>

//                     <div className={styles.icon} onClick={openLogIn}>
//                         <i class="far fa-user-circle"></i>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;
