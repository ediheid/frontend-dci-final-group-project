import React, { useState, useEffect} from "react";

// ? Stylesheet
import styles from "../Navbar/navbar.module.scss";

// ? All Component and View imports
import Registration from "../../Views/Registration/Registration";

const Navbar = (props) => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);


    const openLoginModal = () => setShowLoginModal(true);

    const closeLoginModal = () => setShowLoginModal(false);

    const openLoginFromSignup = () => {
        setShowSignupModal(false);
        setShowLoginModal(true)
    };

    const openSignupModal = () => {
        setShowSignupModal(true);
        setShowLoginModal(false);
    };

    const closeSignupModal = () => setShowSignupModal(false);

    // const ref = useRef();

    // const closeModal = event => {
    //     if(ref.current === event.target) {
    //         setShowLoginModal(false)
    //     }
    // }

    useEffect (() => {
        console.log("login", showLoginModal)
        console.log("signup", showSignupModal)
    }, [showLoginModal, showSignupModal])
    
    return (
        <>
            {/* // !! Conditional styling passed down from  Search.js Component - to change the colour of Navbar when search field is open - to match search full opacity background  */}
            <div
                className={`${styles["navbar-container"]} ${
                    props.open ? styles["bgChange"] : styles["navbar-container"]
                }`}
                //   className={styles["navbar-container"]}
            >
                {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
                <div className={styles["icon-container"]}>
                    <div className={styles.icon}>
                        <i className="fas fa-caravan"></i>
                    </div>

                    <div className={styles.icon}>
                        <i className="fas fa-search"></i>
                    </div>

                    <div className={styles.icon}>
                        <i className="far fa-heart"></i>
                    </div>

                    <div className={styles.icon}>
                        <i className="far fa-comment"></i>
                    </div>

                    <div className={styles.icon}>
                        
                            <i className="far fa-user-circle" onClick={openLoginModal}> 
                                <Registration showLogin={showLoginModal} closeLogin={closeLoginModal}
                                showSignup={showSignupModal}
                                openSignup={openSignupModal}
                                closeSignup={closeSignupModal}
                                openLogin={openLoginFromSignup}
                                // ref={ref}
                                // closeModal={closeModal}
                                signupFetch={props.signupFetch}
                                loginFetch={props.loginFetch}
                                collectLoginData={props.collectLoginData}
                                collectSignupData={props.collectSignupData}
                                signupData={props.signupData}
                                loginData={props.loginData}
                                 />
                            </i>
                    
                    </div>
                </div>
            </div>
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
