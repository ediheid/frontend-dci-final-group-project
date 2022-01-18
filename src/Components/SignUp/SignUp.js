import React, { useContext, useState } from "react";

// !!! Add useContext to React and import AppContext below
import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../SignUp/SignUp.module.scss";

// importing fetch request from services
import { signup } from "../../Services/createNewUser.js";

import SignUpValidation from "./SignUpValidation";

const SignUp = props => {

  const [errors, setErrors] = useState({});


  const handleChange = (event) => {
    SignupContext.setSignupData({
      ...SignupContext.signupData,
      [event.target.name]: event.target.value,
    })
  }


  //   const createUserContext = useContext(SignupContext);
  const SignupContext = useContext(AppContext);


  // Signup Modal is not visible
  if (!props.showSignup) {
    return null;
  }

  const stop = event => {
    event.stopPropagation();
  };

  // Fetch request for signing up
  const handleSubmit = event => {
    event.preventDefault();
    signup(SignupContext.signupData, SignupContext.setSignupData);
    setErrors(SignUpValidation(SignupContext.signupData));
  };

  return (
    <>
      <div
        className={styles["signup-modal-container"]}
        onClick={props.closeSignup}
      >
        {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
        <div className={styles.content} onClick={stop}>
          <div className={styles.header}>
            <div className={styles.pointer} onClick={props.closeSignup}>X</div>

            <div className={styles.title}>Sign up</div>
          </div>
          <div className={styles.body}>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-container"]}>
                <input
                  className={styles["input-signup"]}
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={SignupContext.signupData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className={styles["error"]}>{errors.firstName}</p>}
                <input
                  className={styles["input-signup"]}
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={SignupContext.signupData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className={styles["error"]}>{errors.lastName}</p>}
                <input
                  className={styles["input-signup"]}
                  type="text"
                  placeholder="E-Mail"
                  name="email"
                  value={SignupContext.signupData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className={styles["error"]}>{errors.email}</p>}

                <input
                  className={styles["input-signup"]}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={SignupContext.signupData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className={styles["error"]}>{errors.password}</p>}
                <input
                  className={styles["input-signup"]}
                  type="password"
                  placeholder="Repeat Password"
                  name="confirmedPassword"
                  value={SignupContext.signupData.confirmedPassword}
                  onChange={handleChange}
                />
                {errors.confirmedPassword && <p className={styles["error"]}>{errors.confirmedPassword}</p>}

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
