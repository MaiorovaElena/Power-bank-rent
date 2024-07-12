import st from "./HowToRent.module.css";
import search from "../../assets/howToRent/search.svg";
import qrIcon from "../../assets/howToRent/qrIcon.svg";
import battery from "../../assets/howToRent/battery.svg";
import returnIcon from "../../assets/howToRent/returnIcon.svg";

const HowToRent = ({ howToRentRef }) => {
  return (
    <section className={st.howToRent} ref={howToRentRef}>
      <h3 className={st.title}>How to Rent</h3>
      <div className={st.steps}>
        <div className={st.step}>
          <span className={st.number}>1</span>
          <div className={st.gradient_container}>
            <div className={st.border}>
              <p className={st.description}>Find your nearest station</p>
              <img className={st.image} src={search} alt="search" />
            </div>
          </div>
        </div>
        <div className={st.step}>
          <div className={st.gradient_container}>
            <div className={st.border}>
              <img className={st.image} src={qrIcon} alt="qr-icon" />
              <p className={st.description}>Scan the QR code</p>
            </div>
          </div>
          <span className={st.number}>2</span>
        </div>
        <div className={st.step}>
          <span className={st.number}>3</span>
          <div className={st.gradient_container}>
            <div className={st.border}>
              <p className={st.description}>Take the power bank</p>
              <img className={st.image} src={battery} alt="battery" />
            </div>
          </div>
        </div>
        <div className={st.step}>
          <div className={st.gradient_container}>
            <div className={st.border}>
              <img className={st.image} src={returnIcon} alt="return-icon" />
              <p className={st.description}>
                Return it to any convenient place
              </p>
            </div>
          </div>
          <span className={st.number}>4</span>
        </div>
      </div>
    </section>
  );
};

export default HowToRent;
