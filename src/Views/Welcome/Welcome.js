import React, { useContext, useState, useEffect } from "react";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../Welcome/Welcome.module.scss";

// ? All Component and View imports
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";

const Welcome = () => {
    const SearchContext = useContext(AppContext);

    // Redirect automatily to landig page
    // const navigate = useNavigate();
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate.push("/");
    //     }, 2000);
    // }, []);

    const username = SearchContext.currentUser.firstname;

    const [hour, setHour] = useState(null);
    // const [minute, setMinute] = useState(null);

    useEffect(() => {
        getHour();
    });

    const getHour = () => {
        const date = new Date();
        const hour = date.getHours();
        // const minute = date.getMinutes();
        setHour(hour);
        // setMinute(minute);
    };

    // hour >= 02 && hour < 6
    const early = ", you are a little night bird, ";

    // hour >= 06 && hour < 12
    const morning = "Good morning, ";

    // hour >= 12 && hour < 18
    const afternoon = "Good afternoon, ";

    // hour >= 18 && hour < 22
    const evening = "Good evening, ";

    // hour >= 22 && hour <= 24
    const late = "Whoa! Browsing late, ";

    // hour >= 0 && hour < 2
    const superLate = "Whoa! Browsing late, ";

    return (
        <>
            <Navbar />
            {/* // !!! NOTE: Search bar is conditionally rendered onClick of magnifying glass in Navbar.js !!! */}
            {SearchContext.openSearch ? <Search /> : null}
            {/* // !! */}

            <div className={styles["main-container"]}>
                <div className={styles["content-container"]}>
                    <div className={styles["personalized-message"]}>
                        {hour >= 2 && hour < 6 ? `${username}${early}` : ""}

                        {hour >= 6 && hour < 12
                            ? `${morning} \n ${username}`
                            : "" || (hour >= 12 && hour < 18)
                            ? `${afternoon} \n ${username}`
                            : "" || (hour >= 18 && hour < 22)
                            ? `${evening} \n ${username}`
                            : "" || (hour >= 22 && hour < 24)
                            ? `${late} \n ${username}`
                            : "" || (hour >= 0 && hour < 2)
                            ? `${superLate} \n ${username}`
                            : ""}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
