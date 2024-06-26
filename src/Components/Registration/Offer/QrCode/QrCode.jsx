import styles from "./qrCode.module.css";
import image from "../../Images/QR.png";

export default function QrCode() {
  return <img className={styles.image} src={image} alt="QR-code" />;
}
