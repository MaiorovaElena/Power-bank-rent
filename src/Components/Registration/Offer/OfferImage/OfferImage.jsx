import styles from "./OfferImage.module.css";
import image from "../../../../assets/Phone.png";

export default function OfferImage() {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="Phone image" />;
    </div>
  );
}
