import st from "./HowToRent.module.css";
import search from "../../assets/howToRent/search.svg";
import qrIcon from "../../assets/howToRent/qrIcon.svg";
import battery from "../../assets/howToRent/battery.svg";
import returnIcon from "../../assets/howToRent/returnIcon.svg";

const HowToRent = ({ howToRentRef, i18n }) => {
  return (
    <section className={st.container} ref={howToRentRef}>
      <h3 className={st.title}>{i18n.t("howToRent")}</h3>
      <ol className={st.steps}>
        <li className={st.step}>
          <span className={st.number}>1</span>
          <div className={st.gradient_container}>
            <div className={st.border}>
              <p className={st.description}>{i18n.t("find")}</p>
              <img className={st.image} src={search} alt="search" />
            </div>
          </div>
        </li>
        <li className={st.step}>
          <div className={st.gradient_container}>
            <div className={st.border}>
              <img className={st.image} src={qrIcon} alt="qr-icon" />
              <p className={st.description}>{i18n.t("scan")}</p>
            </div>
          </div>
          <span className={st.number}>2</span>
        </li>
        <li className={st.step}>
          <span className={st.number}>3</span>
          <div className={st.gradient_container}>
            <div className={st.border}>
              <p className={st.description}>{i18n.t("take")}</p>
              <img className={st.image} src={battery} alt="battery" />
            </div>
          </div>
        </li>
        <li className={st.step}>
          <div className={st.gradient_container}>
            <div className={st.border}>
              <img className={st.image} src={returnIcon} alt="return-icon" />
              <p className={st.description}>
              {i18n.t("return")}
              </p>
            </div>
          </div>
          <span className={st.number}>4</span>
        </li>
      </ol>
    </section>
  );
};

export default HowToRent;
