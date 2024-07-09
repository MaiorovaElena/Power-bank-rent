import Benefits from "../Benefits/Benefits/Benefts";
import DeviceRent from "../DeviceRent/DeviceRent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HowToRent from "../HowToRent/HowToRent";
import Prices from "../Prices/Prices";
import RegistrationSection from "../Registration/RegistrationSection/RegistrationSection";
import st from "./App.module.css";

function App() {
  return (
    <div className={st.container}>
      {/* <Header /> */}
      <RegistrationSection />
      <Benefits />
      <DeviceRent />
      <HowToRent />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
