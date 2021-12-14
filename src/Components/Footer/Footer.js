import React from "react";
import Collapsible from "react-collapsible";

import styles from "../Footer/footer.module.scss";

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
              Cupcake ipsum dolor sit amet toffee. Biscuit gingerbread chupa
              chups gingerbread cotton candy ice cream. Tiramisu chocolate cake
              cake chupa chups croissant marshmallow bear claw. Bear claw
              cupcake gingerbread candy croissant sesame snaps pudding cake.
              Biscuit cupcake tootsie roll soufflé lollipop chocolate cake sweet
              roll marshmallow. Lemon drops lollipop croissant cupcake apple pie
              sweet. Soufflé chocolate cake sweet roll dessert jelly-o bonbon.
              Tootsie roll chupa chups lemon drops gingerbread wafer dragée
              jujubes fruitcake donut. Jelly beans pudding dessert marshmallow
              sesame snaps candy cotton candy. Soufflé cheesecake bonbon candy
              sesame snaps bonbon lemon drops chocolate cake chocolate cake.
              <p className={styles["extra-paragraphs"]}>
                Danish cookie bear claw macaroon marshmallow. Soufflé oat cake
                candy canes danish cookie cotton candy sesame snaps cake. Muffin
                carrot cake dessert lollipop biscuit shortbread oat cake topping
                ice cream. Wafer macaroon gingerbread candy canes topping.
                Cookie caramels icing jelly beans cotton candy marshmallow.
                Candy pudding tart muffin muffin marzipan marzipan chupa chups.
                Jelly candy canes ice cream chocolate bar jelly oat cake
                gummies. Topping dessert donut donut cake pudding tiramisu.
                Chocolate halvah powder gummi bears shortbread.
              </p>
              <p className={styles["extra-paragraphs"]}>
                Jelly-o apple pie sweet ice cream cake shortbread halvah tootsie
                roll. Jujubes brownie chocolate bar tootsie roll apple pie
                macaroon sweet. Cake jujubes lollipop lollipop cake icing
                macaroon chupa chups. Caramels lemon drops jelly-o croissant
                lemon drops icing. Pastry pie jelly gingerbread jelly-o. Lemon
                drops biscuit muffin jelly beans bear claw croissant lemon
                drops.
              </p>
              <p className={styles["extra-paragraphs"]}>
                Powder ice cream chupa chups bonbon lollipop. Macaroon candy
                canes sweet roll pudding caramels tootsie roll bear claw sweet
                roll. Tootsie roll wafer gingerbread gummies cotton candy jelly
                tiramisu donut. Lollipop pastry brownie biscuit cotton candy
                liquorice. Topping pastry apple pie pie shortbread oat cake
                donut wafer oat cake. Toffee caramels cookie marzipan ice cream
                oat cake brownie lollipop sweet roll. Fruitcake gingerbread
                muffin croissant sweet carrot cake chocolate bar.
              </p>
              <p className={styles["extra-paragraphs"]}>
                Ice cream brownie tart cake jelly-o shortbread brownie lollipop
                cheesecake. Pastry cookie shortbread brownie cupcake chocolate.
                Jujubes liquorice pudding pie sweet. Cake powder soufflé cake
                pudding tart. Lollipop soufflé sugar plum tart halvah brownie
                shortbread. Caramels dragée jelly ice cream powder chocolate
                cake fruitcake chocolate bar. Cake apple pie tiramisu chocolate
                bar chocolate bar biscuit biscuit. Biscuit brownie marzipan
                toffee cake tart. Dessert icing fruitcake biscuit cake sweet
                roll.
              </p>
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
              <p className={styles["extra-paragraphs"]}>
                Cupcake ipsum dolor sit amet caramels gingerbread. Macaroon
                apple pie bear claw powder sweet. Sweet biscuit macaroon icing
                bonbon muffin danish oat cake pudding. Sweet roll donut
                chocolate bar jujubes macaroon topping lemon drops. Toffee
                shortbread tiramisu marshmallow oat cake biscuit marshmallow
                chocolate cake halvah. Cupcake lemon drops sugar plum croissant
                dessert jelly beans macaroon chocolate bar apple pie. Icing
                carrot cake brownie marshmallow chocolate gingerbread pie
                soufflé. Jujubes candy canes dessert wafer marshmallow ice cream
                macaroon jelly beans muffin. Danish chocolate cake jelly beans
                tiramisu marshmallow brownie chocolate marzipan. Jelly beans
                cheesecake lemon drops soufflé soufflé macaroon jelly. Topping
                chocolate cupcake ice cream pudding brownie. Biscuit oat cake
                cake gummi bears gummies sweet roll sweet roll sesame snaps. Ice
                cream gummies halvah lollipop liquorice. Candy jelly beans bear
                claw cheesecake marzipan fruitcake pie muffin jelly.
              </p>
              <p className={styles["extra-paragraphs"]}>
                Gummies chupa chups pie cheesecake croissant pastry sweet roll
                macaroon. Cheesecake biscuit sweet biscuit jujubes. Marshmallow
                cotton candy danish fruitcake tiramisu. Lemon drops carrot cake
                halvah dragée jelly-o topping. Toffee sweet danish tart cake
                cake oat cake. Muffin danish muffin lemon drops dessert
                gingerbread bonbon sweet roll. Sweet cookie carrot cake cake
                jelly beans powder shortbread chupa chups marzipan. Sesame snaps
                tootsie roll croissant jujubes dessert. Cupcake wafer cake
                toffee cotton candy. Apple pie soufflé dessert jelly icing
                dessert apple pie halvah candy canes. Cake wafer candy tart oat
                cake pastry. Cupcake ice cream chupa chups pudding jelly-o
                tootsie roll fruitcake shortbread. Cake chocolate bar biscuit
                icing marzipan. Gummies powder caramels brownie croissant bear
                claw bonbon carrot cake.
              </p>
              <p className={styles["extra-paragraphs"]}>
                Marshmallow cake chocolate bar cookie cotton candy. Danish
                toffee croissant gummi bears apple pie sweet dessert. Danish oat
                cake pie croissant bonbon icing tiramisu chocolate chocolate
                cake. Macaroon muffin candy apple pie chupa chups gingerbread
                dragée. Bear claw sesame snaps tart gingerbread tart tart. Gummi
                bears shortbread soufflé lemon drops candy bear claw sweet roll
                bear claw marshmallow. Donut bear claw powder muffin danish
                jelly marzipan. Dessert danish sesame snaps topping sugar plum
                cookie sugar plum topping sesame snaps. Cotton candy bonbon
                pastry candy jelly beans brownie sweet roll bear claw. Jelly
                brownie dessert marshmallow lollipop dessert. Jujubes shortbread
                cupcake gingerbread carrot cake topping donut bonbon. Halvah
                cake candy cookie chocolate bar.
              </p>
              <p className={styles["extra-paragraphs"]}>
                Cookie fruitcake powder chocolate tiramisu shortbread sugar
                plum. Cotton candy muffin muffin lollipop liquorice cookie
                shortbread cookie. Jelly soufflé carrot cake brownie tart jelly
                beans gingerbread candy canes. Ice cream fruitcake chocolate
                chocolate cake tootsie roll gummi bears sweet biscuit danish.
                Gummi bears fruitcake candy tiramisu pastry pastry tart
                shortbread. Bonbon marzipan sweet roll gummi bears marzipan
                chocolate bar chocolate cake. Candy biscuit cake lollipop
                soufflé macaroon. Chocolate gummi bears dessert icing candy.
                Marzipan wafer apple pie dessert tiramisu jelly beans cupcake.
                Bonbon lollipop liquorice biscuit liquorice. Macaroon marzipan
                caramels halvah halvah candy canes lollipop gummies. Jelly-o
                donut lollipop marzipan chocolate cake soufflé sesame snaps
                biscuit. Chocolate bar bonbon marzipan chocolate cake halvah.
                Caramels halvah liquorice biscuit danish tiramisu cake
                fruitcake.
              </p>
              <p className={styles["extra-paragraphs"]}>
                Pastry candy canes lemon drops danish carrot cake pudding cookie
                marzipan chupa chups. Shortbread cake caramels topping marzipan.
                Biscuit icing jelly-o dragée icing sweet brownie biscuit sweet
                roll. Dessert cotton candy jelly sweet ice cream cake danish
                fruitcake. Jujubes topping jelly beans candy brownie macaroon
                ice cream croissant. Lemon drops dragée jujubes brownie
                croissant soufflé. Candy gummies topping chocolate cake
                gingerbread sweet marshmallow icing carrot cake. Jelly beans
                pastry chocolate bar donut sweet roll chupa chups. Liquorice
                jujubes donut brownie fruitcake. Cheesecake toffee candy sweet
                roll powder jelly beans. Carrot cake soufflé croissant cotton
                candy biscuit chocolate bar marzipan chocolate macaroon.
                Marzipan oat cake cookie sesame snaps powder carrot cake.
                Brownie carrot cake marzipan jelly-o shortbread sugar plum
                muffin. Tart dessert icing muffin fruitcake toffee topping
                brownie.
              </p>
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
        <span>
          {" "}
          <a
            target="_blank"
            alt="link to frontend repo of project"
            rel="noreferrer noopener"
            href="https://github.com/ediheid/frontend-dci-final-group-project"
          >
            {" "}
            Web design by Freshbnb
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
