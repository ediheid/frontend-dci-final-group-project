import React, { useContext } from "react";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../Welcome/Welcome.module.scss";

// ? All Component and View imports
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";

const Welcome = () => {
    const SearchContext = useContext(AppContext);
    return (
        <>
            <Navbar />
            {/* // !!! NOTE: Search bar is conditionally rendered onClick of magnifying glass in Navbar.js !!! */}
            {SearchContext.openSearch ? <Search /> : null}
            {/* // !! */}

            <div className={styles["main-container"]}>
                <div className={styles["content-container"]}>
                    <div className={styles["personalized-message"]}>
                        Good morning,
                        <br /> username
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
