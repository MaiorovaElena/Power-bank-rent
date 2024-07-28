import styles from "./DownloadOffer.module.css";
import qrCode from "../../assets/offer/QR.png";
import AppButton from "../Common/Buttons/AppButton";
import GoogleButton from "../Common/Buttons/GoogleButton";

export default function DownloadOffer({i18n}) {
  return (
    <div className={styles.container}>
      <div className={styles.downloadOfferContainer}>
        <div className={styles.qr}>
          <img className={styles.image} src={qrCode} alt="QRcode" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>
          {i18n.t("install-the-application")}
          </h3>
          <div className={styles.buttons}>
            <GoogleButton i18n={i18n}/>
            <AppButton i18n={i18n}/>
          </div>
        </div>
      </div>
    </div>
  );
}
