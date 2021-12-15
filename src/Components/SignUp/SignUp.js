import React from "react";

// ? Stylesheet
import styles from "../SignUp/SignUp.module.scss";

const SignUp = (props) => {
    // SIgnup Modal is not visible
    if (!props.showSignup) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div
                className={styles["signup-modal-container"]}
                onClick={props.onCloseSignup}
            >
                {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
                <div className={styles.content} onClick={stop}>
                    <div className={styles.header}>
                        <div onClick={props.onCloseSignup}>X</div>

                        <div className={styles.title}>Sign up</div>
                    </div>
                    <div className={styles.body}>
                        <form>
                            <div className={styles["form-container"]}>
                                <input
                                    className={styles["input-signup"]}
                                    type="text"
                                    placeholder="First Name"
                                    name="firstname"
                                />
                                <input
                                    className={styles["input-signup"]}
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                />
                                <input
                                    className={styles["input-signup"]}
                                    type="text"
                                    placeholder="E-Mail"
                                    name="email"
                                />

                                <input
                                    className={styles["input-signup"]}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                />

                                <input
                                    className={styles["input-signup"]}
                                    type="password"
                                    placeholder="Repeat Password"
                                    name="password"
                                />

                                <input
                                    className={styles["input-signup-button"]}
                                    type="submit"
                                    value="Log In"
                                />
                                <div className={styles["modal-footer"]}>
                                    <div>Already have a Freshbnb account?</div>
                                    <div
                                        onClick={props.onCloseLogin}
                                        className={styles.link}
                                    >
                                        Log in
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>{" "}
        </>
    );
};

export default SignUp;
