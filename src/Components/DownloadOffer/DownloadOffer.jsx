import styles from "./DownloadOffer.module.css";
import qrCode from "../../assets/offer/QR.png";
import AppButton from "../Common/Buttons/AppButton";
import GoogleButton from "../Common/Buttons/GoogleButton";

export default function DownloadOffer() {
  return (
    <div className={styles.container}>
      <div className={styles.qr}>
        <img className={styles.image} src={qrCode} alt="QRcode" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          Install the application and rent a power bank.
        </h3>
        <div className={styles.buttons}>
          <GoogleButton />
          <AppButton />
        </div>
      </div>
    </div>
  );
}
