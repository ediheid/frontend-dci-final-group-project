import React from "react";
import Collapsible from "react-collapsible";

import styles from "../Footer/Footer.module.scss";

// React icons - Bootstrap family
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import { BsArrowsCollapse } from "react-icons/bs";

const Footer = () => {
  //  Get date and year to pass into copyright
  let currentTime = new Date();
  let currentYear = currentTime.getFullYear();

  return (
    <div className={styles["footer-container"]}>
      {/* // todo Freshbnb heading can be changed  */}

      <h2 id={styles["footer-heading"]}>Freshbnb</h2>

      {/* Links and main section content.. */}
      <div className={styles["footer-main-content"]}>
        <span className={styles["copyright-span"]}>
          {" "}
          &copy; {currentYear} Freshbnb{" "}
        </span>

        {/* Collapsible Mock Data Policy */}
        <Collapsible
          className={styles["content-spans"]}
          trigger={"Data Policy"}
          // !! Maybe update with an icon to close
          triggerWhenOpen={
            <BsArrowsCollapse className={styles["collapse-icon"]} />
          }
          contentHiddenWhenClosed={"true"}
          overflowWhenOpen={"scroll"}
          lazyRender={"true"}
        >
          <div className={styles["collapsible-content-container"]}>
            <p className={styles["collapsible-content-paragraph"]}>
              {" "}
              Cupcake ipsum dolor sit amet sesame snaps jelly beans sesame
              snaps. Chocolate cake soufflé chupa chups chupa chups cotton candy
              wafer. Sweet roll liquorice sesame snaps carrot cake marzipan.
              Donut lemon drops halvah candy canes topping macaroon gingerbread.
              Marshmallow cheesecake cake shortbread powder carrot cake. Sweet
              donut cookie powder marzipan pudding jelly beans cake. Pudding
              brownie brownie powder icing ice cream. Sesame snaps donut pie
              cheesecake croissant liquorice bear claw toffee. Ice cream brownie
              tart cake jelly-o shortbread brownie lollipop cheesecake. Pastry
              cookie shortbread brownie cupcake chocolate. Jujubes liquorice
              pudding pie sweet. Cake powder soufflé cake pudding tart. Lollipop
              soufflé sugar plum tart halvah brownie shortbread.
            </p>
          </div>
        </Collapsible>

        {/* Collapsible Mock Terms and Conditions */}
        <Collapsible
          className={styles["content-spans"]}
          trigger={"Terms & Conditions"}
          // !! Maybe update with an icon to close
          triggerWhenOpen={
            <BsArrowsCollapse className={styles["collapse-icon"]} />
          }
          contentHiddenWhenClosed={"true"}
          overflowWhenOpen={"scroll"}
          lazyRender={"true"}
        >
          <div className={styles["collapsible-content-container"]}>
            <p className={styles["collapsible-content-paragraph"]}>
              {" "}
              Danish cookie bear claw macaroon marshmallow. Soufflé oat cake
              candy canes danish cookie cotton candy sesame snaps cake. Muffin
              carrot cake dessert lollipop biscuit shortbread oat cake topping
              ice cream. Wafer macaroon gingerbread candy canes topping. Cookie
              caramels icing jelly beans cotton candy marshmallow. Candy pudding
              tart muffin muffin marzipan marzipan chupa chups. Jelly candy
              canes ice cream chocolate bar jelly oat cake gummies. Topping
              dessert donut donut cake pudding tiramisu. Chocolate halvah powder
              gummi bears shortbread. Jelly-o apple pie sweet ice cream cake
              shortbread halvah tootsie roll. Jujubes brownie chocolate bar
              tootsie roll apple pie macaroon sweet. Cake jujubes lollipop
              lollipop cake icing macaroon chupa chups.
            </p>
          </div>
        </Collapsible>

        {/* Social media icons container */}
        <div className={styles["social-media-container"]}>
          <span>
            <BsInstagram className={styles["social-media-icons"]} />
          </span>
          <span>
            <BsTwitter className={styles["social-media-icons"]} />
          </span>
        </div>
      </div>

      <div id={styles["design-by-section"]}>
        <span>Web design by Freshbnb</span>
      </div>
    </div>
  );
};

export default Footer;
