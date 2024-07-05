import st from "./DeviceRent.module.css";
import electricity from "../../assets/rent/electricity.gif";
// import device from '../../assets/rent/rent-img.png';
import deviceImg from "../../assets/rent/rentImg.png";

export default function DeviceRent() {
  return (
    <div className={st.device}>
      <div className={st.deviceTitle}>
        <h2 className={st.titleLight}>Is your phone dying?</h2>
        <h2 className={st.titleViolet}>Take the power bank!</h2>
      </div>
      <div className={st.images}>
        <img src={deviceImg} className={st.deviceImg} alt="device rent" />
      </div>
      <img src={electricity} className={st.electricity} alt="electricity" />
    </div>
  );
}
