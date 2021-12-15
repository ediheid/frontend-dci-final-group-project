import React, { useState } from "react";
import { Link } from "react-router-dom";

// ? All Component and View imports
import SignUp from "../SignUp/SignUp";

// ? Stylesheet
import styles from "../LogIn/LogIn.module.scss";

const LogIn = (props) => {
    const [showSignUp, setShowSignUp] = useState(false);

    const openSignUp = (event) => {
        event.preventDefault();
        setShowSignUp(true);
    };

    const closeSignUp = (event) => {
        event.preventDefault();
        setShowSignUp(false);
        console.log("background was clicked close sign up");
    };

    // Login Modal is not visible
    if (!props.showLogin) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div
                className={styles["login-modal-container"]}
                onClick={props.onCloseLogin}
            >
                <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} />
                <div className={styles.content} onClick={stop}>
                    <div className={styles.header}>
                        <div onClick={props.onCloseLogin}>X</div>

                        <div className={styles.title}>Log in</div>
                    </div>
                    <div className={styles.body}>
                        <form>
                            <div className={styles["form-container"]}>
                                <input
                                    className={styles["input-login"]}
                                    type="text"
                                    placeholder="E-Mail"
                                    name="email"
                                />
                                <input
                                    className={styles["input-login"]}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                />

                                <input
                                    className={styles["input-login-button"]}
                                    type="submit"
                                    value="Log In"
                                />
                                <div className={styles["modal-footer"]}>
                                    <div>Forgot your password?</div>
                                    <div>
                                        Not a member yet?
                                        {/* <SignUp
                                            onClose={closeSignUp}
                                            show={showSignUp}
                                        /> */}
                                        <span
                                            // onClick={`${props.openSignUp} ${props.onCloseLogin} `}

                                            onClick={props.onCloseLogin}
                                            className={styles.link}
                                        >
                                            {" "}
                                            Sign up
                                        </span>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <div onClick={openSignUp}>
                                            I AM A TEST SIGN UP BUTTON
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogIn;
