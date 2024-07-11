import { useRef } from "react";
import Benefits from "../Benefits/Benefits/Benefts";
import DeviceRent from "../DeviceRent/DeviceRent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HowToRent from "../HowToRent/HowToRent";
import InviteFriends from "../InviteFriends/InviteFriends";
import Prices from "../Prices/Prices";
import RegistrationSection from "../Registration/RegistrationSection/RegistrationSection";
import Faq from "../Faq/Faq";
import st from "./App.module.css";
import { useTranslation } from "react-i18next";
import Reviews from "../Reviews/Reviews";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }


  const homeRef = useRef(null);
  const benefitsRef = useRef(null);
  const howToRentRef = useRef(null);
  const pricesRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  const homeScroll = () => scrollToRef(homeRef);
  const benefitsScroll = () => scrollToRef(benefitsRef);
  const howToRentScroll = () => scrollToRef(howToRentRef);
  const pricesScroll = () => scrollToRef(pricesRef);


  return (
    <div className={st.container}>
      <Header
        howToRentScroll={howToRentScroll}
        benefitsScroll={benefitsScroll}
        homeScroll={homeScroll}
        pricesScroll={pricesScroll}
        changeLanguage={changeLanguage}
        t={t}
        i18n={i18n}
        />
      <RegistrationSection homeRef={homeRef} t={t} i18n={i18n}/>
      <Benefits benefitsRef={benefitsRef}/>
      <DeviceRent />
      <HowToRent howToRentRef={howToRentRef} />
      <Prices pricesRef={pricesRef}/>
      <InviteFriends />
      <Reviews/>
      <Faq />
      <DownloadOff>
      <Footer />
    </div>
  );
}

export default App;
