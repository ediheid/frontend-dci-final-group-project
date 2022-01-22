import React, { useContext } from "react";

// !!! Add useContext to React and import AppContext below
import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../SignUp/SignUp.module.scss";

// importing fetch request from services
import { signup } from "../../Services/createNewUser.js";

const SignUp = (props) => {
  //   const createUserContext = useContext(SignupContext);
  const signUpContext = useContext(AppContext);

  // Signup Modal is not visible
  if (!props.showSignup) {
    return null;
  }

  const stop = (event) => {
    event.stopPropagation();
  };

  // Fetch request for signing up
  const handleSubmit = (event) => {
    event.preventDefault();
    signup(signUpContext.signupData, signUpContext.setSignupData);
  };

  // const handleSubmit = useCallback((event) => {
  //     event.preventDefault()

  //     signup(props.signupData)
  //   }, [])

  return (
    <>
      <div
        className={styles["signup-modal-container"]}
        onClick={props.closeSignup}
      >
        {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
        <div className={styles.content} onClick={stop}>
          <div className={styles.header}>
            <div className={styles.pointer} onClick={props.closeSignup}>
              X
            </div>

            <div className={styles.title}>Sign up</div>
          </div>
          <div className={styles.body}>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-container"]}>
                <input
                  className={styles["input-signup"]}
                  type="text"
                  placeholder="First Name"
                  name="firstname"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.firstname}
                />
                <input
                  className={styles["input-signup"]}
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.lastname}
                />
                <input
                  className={styles["input-signup"]}
                  type="text"
                  placeholder="E-Mail"
                  name="email"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.email}
                />

                <input
                  className={styles["input-signup"]}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.password}
                />

                <input
                  className={styles["input-signup"]}
                  type="password"
                  placeholder="Repeat Password"
                  name="confirmedPassword"
                  onChange={signUpContext.collectSignupData}
                  value={signUpContext.signupData.confirmedPassword}
                />

                <input
                  className={styles["input-signup-button"]}
                  type="submit"
                  value="Signup"
                />
                <div className={styles["modal-footer"]}>
                  <div>Already have a Freshbnb account?</div>
                  <div onClick={props.openLogin} className={styles.link}>
                    Log in
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

export default SignUp;
