import OfferText from "../OfferText/OfferText";
import QrCode from "../QrCode/QrCode";
import GoogleButton from "../../../Common/Buttons/GoogleButton";
import AppButton from "../../../Common/Buttons/AppButton";
import styles from "./OfferContainer.module.css";
import phoneImage from "../../../../assets/offer/Phone.png";

export default function OfferContainer({ i18n}) {
  return (
    <div className={styles.container}>
      <OfferText i18n={i18n}/>
      <div className={styles.device}>
        <div className={styles.deviceTitle}>
          <h3 className={styles.titleLight}>{i18n.t("phone-dying")}</h3>
          <h3 className={styles.titleViolet}>{i18n.t("take-the-power")}</h3>
        </div>
      </div>
      <img className={styles.image} src={phoneImage} alt="Phone"></img>
      <p className={styles.text}>{i18n.t("find-it")}</p>
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
