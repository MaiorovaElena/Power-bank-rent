import image from "../../../assets/Map.png";
import styles from "./Map.module.css";

export default function Map() {
  return <img className={styles.image} src={image} alt="Map" />;
}
