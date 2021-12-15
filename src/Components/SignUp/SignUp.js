import React from "react";

// ? Stylesheet
import styles from "../SignUp/SignUp.module.scss";

const SignUp = (props) => {
    // SIgnup Modal is not visible
    if (!props.show) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };

    return (
        <>
            <div
                className={styles["sign-up-modal-container"]}
                onClick={props.onCloseLogin}
            >
                <div className={styles.content} onClick={stop}>
                    <div className={styles.header}>
                        <div onClick={props.onClose}>X</div>
                        <div>Log in or sign up</div>
                    </div>
                    <div className={styles.title}>Welcome to Freshbnb</div>
                    <div className={styles.body}>
                        <form
                        // onSubmit={SendData}
                        >
                            <div className={styles["form-container"]}>
                                <input
                                    className={styles["input-signup"]}
                                    type="text"
                                    placeholder="First Name"
                                    name="fristname"
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
                                    placeholder="Repeat password"
                                    name="password"
                                />
                                <input
                                    className={styles["input-signup-button"]}
                                    type="submit"
                                    value="Sign Up"
                                />
                                <hr className={styles.line} />
                                or
                                <h5>
                                    {/* <Link to="/login">
                                        Already have an account?
                                    </Link> */}
                                </h5>
                            </div>
                        </form>
                        This is the sign up form
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
