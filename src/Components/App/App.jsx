import { useRef } from "react";
import Benefits from "../Benefits/Benefits/Benefts";
import DeviceRent from "../DeviceRent/DeviceRent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HowToRent from "../HowToRent/HowToRent";
import Prices from "../Prices/Prices";
import RegistrationSection from "../Registration/RegistrationSection/RegistrationSection";
import st from "./App.module.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  

  const homeRef = useRef(null);
  const myRef = useRef(null);
  const myRefTwo = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  const homeScroll = () => scrollToRef(homeRef);
  const exeScroll = () => scrollToRef(myRef);
  const scrollToBlock = () => scrollToRef(myRefTwo);


  return (
    <div className={st.container}>
      <Header
        scrollToBlock={scrollToBlock}
        exeScroll={exeScroll}
        homeScroll={homeScroll}
        changeLanguage={changeLanguage}
        t={t}
        />
      <RegistrationSection homeRef={homeRef} t={t} i18n={i18n}/>
      <Benefits myRef={myRef}/>
      <DeviceRent />
      <HowToRent myRefTwo={myRefTwo} />
      <Footer />
    </div>
  );
}

export default App;
