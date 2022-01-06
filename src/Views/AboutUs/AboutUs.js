import React, { useContext } from "react";

import { AppContext } from "../../App";

// ? Stylesheet
import styles from "../AboutUs/AboutUs.module.scss";

// ? All Component and View imports
import Search from "../../Components/Search/Search";
import Navbar from "../../Components/Navbar/Navbar";

// ? All Images
import title from "../AboutUs/static/pexels-roman-odintsov-4553618.jpg";

const AboutUs = () => {
  const SearchContext = useContext(AppContext);

  return (
    <>
      <Navbar />
      {/* // !!! NOTE: Search bar is conditionally rendered onClick of magnifying glass in Navbar.js !!! */}
      {/* {SearchContext.openSearch ? <Search /> : null} */}
      {/* // !! */}
      <Search />

      <div className={styles["main-container"]}>
        {/* <div className={styles["content-container"]}></div> */}

        <div className={styles["heading-image"]}>
          {/* <div className={styles["heading-title"]}>About us</div> */}

          <img
            className={styles["title-image"]}
            src={title}
            alt="Camper by Devries from Pexels"
          />
        </div>
        <div className={styles["content-container"]}>
          <div className={styles.heading}>About Freshbnb</div>
          Freshbnb was born in 2021 when ice cream dragée apple pie pudding
          shortbread. Jelly sesame snaps cake lollipop macaroon chupa chups.
          Cupcake bear claw donut halvah carrot cake donut donut icing oat cake.
          Brownie jelly marshmallow dessert candy canes. <br />
          <br />
          Tiramisu wafer carrot cake dessert cheesecake chupa chups cake dessert
          gingerbread. Dessert bonbon chupa chups tart wafer tart powder. Apple
          pie bonbon cookie danish gummies jelly cheesecake.
          <br />
          <br />
          Candy canes cheesecake icing cheesecake caramels biscuit. Biscuit
          gummi bears topping croissant jujubes ice cream. Candy sweet roll
          pastry jelly-o candy canes tiramisu gingerbread lemon drops lemon
          drops. Caramels gummies brownie jujubes halvah chocolate bar cookie
          cake danish.
          <br />
          <br />
          Cake cake gummi bears bear claw candy gingerbread cake carrot cake.
          Danish chupa chups apple pie marshmallow ice cream lemon drops donut
          sesame snaps. Biscuit tart bear claw pudding tootsie roll shortbread
          cotton candy. Brownie wafer soufflé chupa chups pastry topping.
          <br />
          <br />
          Cookie caramels tootsie roll gummies cookie jelly-o danish. Sesame
          snaps tart sweet shortbread chocolate cake oat cake gummi bears
          dessert. Jelly jelly jelly beans pastry danish. Gummies caramels
          chocolate jujubes muffin caramels sesame snaps cupcake.
        </div>
        {/* <div className={styles.heading}>IMAGE</div> */}
      </div>
    </>
  );
};

export default AboutUs;

// import React from "react";

// // ? All Component and View imports
// // import Search from "../../Components/Search/Search";
// import Navbar from "../../Components/Navbar/Navbar";
// import Search from "../../Components/Search/Search";

// // ? Stylesheet
// import styles from "../AboutUs/AboutUs.module.scss";

// const AboutUs = () => {
//     return (
//         <>
//             <Search />
//             {/* <Navbar /> */}
//             {/* <div className={styles.header}></div> */}
//             <div className={styles["main-container"]}>
//                 <div className={styles["content-container"]}>
//                     <div className={styles.heading}>About us</div>
//                     <div></div>
//                     <div></div>
//                     <div></div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AboutUs;
