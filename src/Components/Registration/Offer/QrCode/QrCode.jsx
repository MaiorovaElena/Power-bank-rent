import styles from "./QrCode.module.css";
import image from "../../../../assets/offer/QR.png";

export default function QrCode() {
  return <img className={styles.image} src={image} alt="QR-code" />;
}
