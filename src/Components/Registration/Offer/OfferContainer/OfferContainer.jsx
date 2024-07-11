import OfferText from "../OfferText/OfferText";
import QrCode from "../QrCode/QrCode";
import GoogleButton from "../../../Common/Buttons/GoogleButton";
import AppButton from "../../../Common/Buttons/AppButton";
import styles from "./OfferContainer.module.css";
import phoneImage from "../../../../assets/offer/Phone.png";

export default function OfferContainer() {
  return (
    <div className={styles.container}>
      <OfferText />
      <div className={styles.device}>
        <div className={styles.deviceTitle}>
          <h3 className={styles.titleLight}>Is your phone dying?</h3>
          <h3 className={styles.titleViolet}>Take the power bank!</h3>
        </div>
      </div>
      <img className={styles.image} src={phoneImage} alt="Phone"></img>
      <p className={styles.text}>Pronađite na mapi</p>
      <div className={styles.details}>
        <div className={styles.buttons}>
          <GoogleButton />
          <AppButton />
        </div>
        <QrCode />
      </div>
    </div>
  );
}
