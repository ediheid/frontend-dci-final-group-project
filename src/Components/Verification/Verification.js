import React from "react";
import styles from "./Verification.module.scss";
import Button from "../../UI/Button/Button.js";

const useQuery = () => {
    return new URLSearchParams(window.location.search).get("message")
}

const Verification = () => {
    const query = useQuery();

    return(
        <main className={styles.main}>
            <div className={styles.msgbox}>
                <h1 className={styles.heading}>{query}</h1>
                <Button>Login</Button>
            </div>    
        </main>
    )
}

export default Verification;