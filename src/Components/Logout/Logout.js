import React, { useContext } from "react";

// !!! Add useContext to React and import AppContext below
import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../Logout/Logout.module.scss";

const Logout = (props) => {
    const logoutContext = useContext(AppContext);

    if (!props.showLogin) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    // const openLoginModal = () => {
    //     logoutContext.setShowLoginModal(true);
    // };

    // const closeLoginModal = event => {
    //     event.stopPropagation();
    //     logoutContext.setShowLoginModal(false);
    // }

    const handleLogout = event => {
        // logoutContext.setCookie("UserCookie", "");
        logoutContext.removeCookie("UserCookie")
        props.closeLogin(event);

        //! Change URL to ENV.Provess.Location
        window.location.replace("http://localhost:3000/");
    }

    return (
        <>
            <div
                className={styles["logout-modal-container"]}
                onClick={props.closeLogin}
            >
                {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
            <div className={styles.content} onClick={stop}>
                <div className={styles.header}>
                    <p className={styles.title}>Logout</p>
                </div>

                <input
                    className={styles["input-logout-button"]}
                    type="submit"
                    value="Logout"
                    onClick={handleLogout}
                />
            </div>    
            </div>
        </>
    )
};

export default Logout;