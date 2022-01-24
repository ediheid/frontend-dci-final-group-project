import React, { useContext } from "react";

// !!! Add useContext to React and import AppContext below
import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../LogIn/LogIn.module.scss";

// importing fetch request from services
import { login } from "../../Services/getLoggedUser.js";

const LogIn = (props) => {
  // !!! This is where we define Context from App to use in current Component
  const loginContext = useContext(AppContext);

  // Login Modal is not visible
  if (!props.showLogin) {
    return null;
  }

  const stop = (event) => {
    event.stopPropagation();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(
      loginContext.loginData,
      loginContext.setLoginData,
      loginContext.setCurrentUser,
      loginContext.setShowLoginModal,
      loginContext.setCookie,
      loginContext.history
    );
  };

  return (
    <>
      <div
        className={styles["login-modal-container"]}
        onClick={props.closeLogin}
      >
        {/* <SignUp onCloseSignup={closeSignUp} showSignup={showSignUp} /> */}
        <div className={styles.content} onClick={stop}>
          <div className={styles.header}>
            <div className={styles.pointer} onClick={props.closeLogin}>
              X
            </div>

            <div className={styles.title}>Log in</div>
          </div>
          <div className={styles.body}>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-container"]}>
                <input
                  className={styles["input-login"]}
                  type="text"
                  placeholder="E-Mail"
                  name="email"
                  onChange={loginContext.collectLoginData}
                  value={loginContext.loginData.email}
                />
                <input
                  className={styles["input-login"]}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={loginContext.collectLoginData}
                  value={loginContext.loginData.password}
                />

                <input
                  className={styles["input-login-button"]}
                  type="submit"
                  value="Log In"
                />
                <div className={styles["modal-footer"]}>
                  <div className={styles["forgot-password"]}>
                    Forgot your password?
                  </div>
                  <div>
                    Not a member yet? {""}
                    <span onClick={props.openSignup} className={styles.link}>
                      Sign up
                    </span>
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
