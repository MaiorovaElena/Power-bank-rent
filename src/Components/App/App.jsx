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
import DownloadOffer from "../DownloadOffer/DownloadOffer";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const homeRef = useRef(null);
  const benefitsRef = useRef(null);
  const howToRentRef = useRef(null);
  const pricesRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const homeScroll = () => scrollToRef(homeRef);
  const benefitsScroll = () => scrollToRef(benefitsRef);
  const howToRentScroll = () => scrollToRef(howToRentRef);
  const pricesScroll = () => scrollToRef(pricesRef);
  const faqScroll = () => scrollToRef(faqRef);

  return (
    <div className={st.container}>
      <Header
        howToRentScroll={howToRentScroll}
        benefitsScroll={benefitsScroll}
        homeScroll={homeScroll}
        pricesScroll={pricesScroll}
        faqScroll={faqScroll}
        changeLanguage={changeLanguage}
        t={t}
        i18n={i18n}
      />
      <RegistrationSection homeRef={homeRef} t={t} i18n={i18n} />
      <Benefits benefitsRef={benefitsRef} i18n={i18n}/>
      <DeviceRent i18n={i18n}/>
      <HowToRent howToRentRef={howToRentRef} i18n={i18n}/>
      <Prices pricesRef={pricesRef} i18n={i18n}/>
      <InviteFriends i18n={i18n}/>
      <Reviews i18n={i18n}/>
      <Faq faqRef={faqRef} i18n={i18n}/>
      <DownloadOffer i18n={i18n}/>
      <Footer
        benefitsScroll={benefitsScroll}
        howToRentScroll={howToRentScroll}
        pricesScroll={pricesScroll}
        faqScroll={faqScroll}
        i18n={i18n}
      />
    </div>
  );
}

export default App;
