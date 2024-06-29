import OfferText from "../OfferText/OfferText";
import QrCode from "../QrCode/QrCode";
import GoogleButton from "../../../Common/Buttons/GoogleButton";
import AppButton from "../../../Common/Buttons/AppButton";
import styles from "./OfferContainer.module.css";

export default function OfferContainer() {
  return (
    <div className={styles.container}>
      <OfferText />
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
