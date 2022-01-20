import React, { useState, createContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import signup from "./Services/createNewUser.js";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

// ? Main scss
import styles from "./Styling/app.module.scss";

// ? All Component and View imports
import ScrollToTop from "./Components/ScrollToTop.js";
import LandingPage from "./Views/LandingPage/LandingPage";
import AboutUs from "./Views/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Verification from "./Components/Verification/Verification";
import CheckMail from "./Components/CheckMail/CheckMail.js";
import LocationCards from "./Components/LocationCards/LocationCards.js";
import Welcome from "./Views/Welcome/Welcome";
import LocationDetails from "./Components/LocationDetails/LocationDetails";
import LocationForm from "./Components/LocationForm/LocationForm";
import LoggedInLandingPage from "./Views/LoggedInLandingPage/LoggedInLandingPage";

import { locations } from "./Services/getLocationData.js";

// ? createContext variable
export const AppContext = createContext();

const MAP_API = process.env.REACT_APP_MAP_API;

const App = () => {
  // ?  State hooks
  // ?  State passed into fetch request for our database locations
  const [mapEventData, setMapEventData] = useState([]);
  const [locationInfo, setLocationInfo] = useState(false);

  // ? Display and Hide map functionality
  const [openMap, setOpenMap] = useState(false);
  // ? Passed down to Form.js - is used to to openSearch but also to change bg opacity
  const [openSearch, setOpenSearch] = useState(false);
  // ? Saved/Liked property..
  const [like, setLike] = useState(false);
  // ? user/login and signup context
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [currentUser, setCurrentUser] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    locations: [],
    bookings: [],
    // adress: {
    //     street: "",
    //     number: "",
    //     city: "",
    //     postcode: "",
    // },
    // birthday: ""
  });

  const [locationData, setLocationData] = useState({
    propertyType: [],
    spaceType: "",
    address: "",
    maxCapacity: 0,
    amenities: [],
    essentialAmenities: [],
    title: "",
    description: "",
    regionalDescription: "",
    houseRules: "",
    price: 0,
    cancellation: "",
  });

  useEffect(() => {
    console.log(locationData);
  }, [locationData]);

  // !! TEST: cards
  const [populateCards, setPopulateCards] = useState([]);

  useEffect(() => {
    locations(setPopulateCards);
  }, []);
  //   console.log("QQQQ", populateCards);

  // ? login/signup state
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  // !! Moved cookie state hook to top to sit with all other state hooks
  const [cookies, setCookie, removeCookie] = useCookies(["UserCookie"]);

  // ? opens map view - And closes search dropdown so user can see the full map
  const mapView = () => {
    // event.preventDefault();
    setOpenMap(true);

    // Set map location markers from fetch request (getLocationData.js)
    locations(setMapEventData);

    setOpenSearch(false);
  };

  // ? Close map for close map button
  const closeMap = () => {
    setOpenMap(false);
  };

  // !! Testing auto complete for map input

  // ? Allows user to click on Caravan(home) button without re-rendering the page but will close both map and search without state conflicts
  const returnHome = () => {
    setOpenMap(false);
    setOpenSearch(false);
  };

  let history = useHistory();

  // ? User can like and unlike a property (heart on location info boxes)
  const toggleLike = () => {
    setLike(!like);
  };

  // ? Close locationInfo box
  const closeLocationInfoBox = () => {
    setLocationInfo(false);
  };

  // ? Open Search Form function
  const openForm = () => {
    setOpenSearch(true);
    setOpenMap(false);
  };

  // ? Toggles the Search open and close for the buttons and NOT the search field
  const toggleSearchDropdown = (event) => {
    event.preventDefault();
    setOpenSearch(!openSearch);
    setOpenMap(false);
  };

  // ? useEffect to pass in location Data from fetch request
  // useEffect(() => {
  //   locations(setMapEventData);
  // }, []);
  // console.log("!!!!!MAPEVENT", mapEventData);

  const collectSignupData = (event) => {
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
  };

  const collectLoginData = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const collectLocationData = (event) => {
    if (
      event.target.name === "field" ||
      event.target.name === "forest" ||
      event.target.name === "lake" ||
      event.target.name === "river"
    ) {
      if (event.target.checked) {
        setLocationData({
          ...locationData,
          ...locationData.propertyType.push(event.target.name),
        });
      } else {
        let newArr = locationData.propertyType.filter(
          (value) => !value.includes(event.target.name)
        );

        console.log("!!!", newArr);

        locationData.propertyType = newArr;

        console.log("???", locationData);
        // setLocationData()
        // setLocationData({...locationData, ...locationData.propertyType = newArr})
      }

      // propertyType: {
      // ...locationData.propertyType, [event.target.name]: event.target.checked}
    } else if (
      event.target.name === "animalsWelcome" ||
      event.target.name === "barrierFree" ||
      event.target.name === "electricity" ||
      event.target.name === "wifi" ||
      event.target.name === "sauna" ||
      event.target.name === "washingMachine" ||
      event.target.name === "playground" ||
      event.target.name === "kiosk" ||
      event.target.name === "fireplace" ||
      event.target.name === "batteryCharger" ||
      event.target.name === "basin"
    ) {
      if (event.target.checked) {
        setLocationData({
          ...locationData,
          ...locationData.amenities.push(event.target.name),
        });
      } else {
        let newArr = locationData.amenities.filter(
          (value) => !value.includes(event.target.name)
        );

        locationData.amenities = newArr;
      }
      //   setLocationData({...locationData, amenities: {
      //     ...locationData.amenities, [event.target.name]: event.target.checked
      //   }
      // })
    } else if (
      event.target.name === "water" ||
      event.target.name === "shower" ||
      event.target.name === "lavatory"
    ) {
      if (event.target.checked) {
        setLocationData({
          ...locationData,
          ...locationData.essentialAmenities.push(event.target.name),
        });
      } else {
        let newArr = locationData.essentialAmenities.filter(
          (value) => !value.includes(event.target.name)
        );

        locationData.essentialAmenities = newArr;
      }
      //   setLocationData({...locationData, essentialAmenities: {
      //     ...locationData.essentialAmenities, [event.target.name]: event.target.checked
      //   }
      // })
    } else {
      setLocationData({
        ...locationData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const setCapacity = (val) => {
    setLocationData({ ...locationData, maxCapacity: val });
  };

  const setPrice = (val) => {
    setLocationData({ ...locationData, price: val });
  };

  const setImage = (val) => {
    setLocationData({ ...locationData, locationImage: val });
  };

  return (
    <div>
      {/* // !!! This is where our context lives */}
      <AppContext.Provider
        value={{
          // ? Collect signup and login data context
          collectSignupData: collectSignupData,
          collectLoginData: collectLoginData,

          // ? Collect locationData context
          locationData,
          setLocationData,
          collectLocationData,
          setCapacity,
          setPrice,
          setImage,

          // ? Search Context to pass down to Search and Navbar..
          openSearch: openSearch,
          openForm: openForm,
          toggleSearchDropdown: toggleSearchDropdown,

          // ! TEST: Cards
          populateCards: populateCards,
          setPopulateCards: setPopulateCards,

          // ? Map Context
          mapView: mapView,
          openMap: openMap,
          closeMap: closeMap,
          mapEventData: mapEventData,
          locationInfo: locationInfo,
          setLocationInfo: setLocationInfo,
          closeLocationInfoBox: closeLocationInfoBox,

          // ! TEST: Autocomplete
          PlacesAutocomplete: PlacesAutocomplete,

          // ? Sign up and login Context
          setShowSignupModal: setShowSignupModal,
          setShowLoginModal: setShowLoginModal,
          showLoginModal: showLoginModal,
          showSignupModal: showSignupModal,

          signupData: signupData,
          setSignupData: setSignupData,
          loginData: loginData,
          setLoginData: setLoginData,

          // ? Set currentUser Data after Login
          currentUser: currentUser,
          setCurrentUser: setCurrentUser,

          // ? pass down cookies
          cookies: cookies,
          setCookie: setCookie,
          removeCookie: removeCookie,

          // ? Liked/Saved property
          like: like,
          toggleLike: toggleLike,

          // ? Return home without re-rendering page but also closing map and search dropdown..
          returnHome: returnHome,

          // ? useHistory
          history: history,
        }}
      >
        {/* NAVBAR and Search Components live in respective View Components */}
        <main>
          <ScrollToTop />
          <Switch>
            {/* // ? Template/placeholder for how to setup paths with components.. */}
            {/* <Route path="/" exact component={LandingPage} /> */}
            <Route exact path="/" component={LandingPage} />
            {/* {cookies.UserCookie !== "null" ?
                <Redirect to="/welcome-page" />  */}
            {/* :  */}
            {/* <LandingPage />
            </Route> */}

            {/* // ? About us overview */}
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/verify-email" exact component={Verification} />
            <Route path="/user-signed-up" exact component={CheckMail} />
            {/* <Route path="/location-cards" exact component={LocationCards} /> */}
            <Route path="/welcome-page" exact component={Welcome} />

            <Route
              path="/location-details/:id"
              exact
              // render={({ match }) => {
              //   const selectedLocation = locationData.find(
              //     (location) => location._id === match.params._id
              //   );

              //   return <LocationDetails selected={selectedLocation} />;
              // }
              component={LocationDetails}
            />

            <Route path="/location-form" exact component={LocationForm} />

            <Route path="/logged-in" exact component={LoggedInLandingPage} />
            {/* // ? Url redirect to landing page on unknown path */}
            <Redirect to="/" exact />
          </Switch>
        </main>
        {/* // ? Footer lives outside of Main and is only visible on tablet + views */}
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default App;
