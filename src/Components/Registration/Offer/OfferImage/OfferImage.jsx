import styles from "./offerImage.module.css";
import image from "../../Images/Phone.png";

export default function OfferImage() {
  return <img className={styles.image} src={image} alt="Phone image" />;
}
