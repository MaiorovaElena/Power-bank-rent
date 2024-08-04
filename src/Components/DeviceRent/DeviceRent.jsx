import st from "./DeviceRent.module.css";
import electricity from "../../assets/rent/electricity.gif";
import deviceImg from "../../assets/rent/rentImg.png";

export default function DeviceRent({i18n}) {
  return (
    <div className={st.device}>
      <div className={st.deviceTitle}>
        <h2 className={st.titleLight}>{i18n.t("phone-dying")}</h2>
        <h2 className={st.titleViolet}>{i18n.t("take-the-power")}</h2>
      </div>
      <div className={st.images}>
        <img src={deviceImg} className={st.deviceImg} alt="device rent" />
      </div>
      <img src={electricity} className={st.electricity} alt="electricity" />
    </div>
  );
}
