import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HowToRent from "../HowToRent/HowToRent";
import RegistrationSection from "../Registration/RegistrationSection/RegistrationSection";
import st from "./App.module.css";

function App() {
  return (
    <div className={st.container}>
      {/* <Header /> */}
      {/* <RegistrationSection /> */}
      <HowToRent />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
