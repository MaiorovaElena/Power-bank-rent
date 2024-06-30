import Benefits from "../Benefits/Benefits/Benefts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RegistrationSection from "../Registration/RegistrationSection/RegistrationSection";
import st from "./App.module.css";

function App() {
  return (
    <div className={st.container}>
      <Header />
      <RegistrationSection />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
