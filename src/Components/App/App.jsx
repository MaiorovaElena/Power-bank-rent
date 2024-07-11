import { useRef } from "react";
import Benefits from "../Benefits/Benefits/Benefts";
import DeviceRent from "../DeviceRent/DeviceRent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HowToRent from "../HowToRent/HowToRent";
import Prices from "../Prices/Prices";
import RegistrationSection from "../Registration/RegistrationSection/RegistrationSection";
import Faq from "../Faq/Faq";
import st from "./App.module.css";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
import Reviews from "../Reviews/Reviews";
=======
import DownloadOffer from "../DownloadOffer/DownloadOffer";
>>>>>>> cb2719dce7dc3f5f8396fb661bc0a5ac00517ae2

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
        />
      <RegistrationSection homeRef={homeRef} t={t} i18n={i18n}/>
      <Benefits benefitsRef={benefitsRef}/>
      <DeviceRent />
      <HowToRent howToRentRef={howToRentRef} />
      <Prices pricesRef={pricesRef}/>
      <Reviews/>
      <Footer />
    </div>
  );
}

export default App;
