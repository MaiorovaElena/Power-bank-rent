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
import DownloadOffer from "../DownloadOffer/DownloadOffer";

function App() {
  return (
    <div className={st.container}>
      <Header />
      <RegistrationSection />
      <Benefits />
      <DeviceRent />
      <HowToRent />
      <Prices />
      <InviteFriends />
      <Faq />
      <DownloadOffer />
      <Footer />
    </div>
  );
}

export default App;
