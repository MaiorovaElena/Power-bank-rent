import Map from "../Map/Map";
import styles from "./Benefits.module.css";
import IconMap from "../../../assets/benefits/IconMap.png";
import IconMoney from "../../../assets/benefits/IconMoney.png";
import IconPhone from "../../../assets/benefits/IconPhone.png";

export default function Benefits({ benefitsRef }) {
  return (
    <div className={styles.container} ref={benefitsRef}>
      <div className={styles.benefits}>
        <h3 className={styles.title}>In the right place at the right time</h3>
        <div className={styles.list}>
          <img className={styles.image} src={IconMap} alt="Map" />
          Don't worry if the battery is running out. Wide network of rental
          stations.
        </div>
        <div className={styles.list}>
          <img className={styles.image} src={IconMoney} alt="Money" />
          You always know the cost in advance. Convenient tariffs with the
          possibility of extension.
        </div>
        <div className={styles.list}>
          <img className={styles.image} src={IconPhone} alt="Phone" />
          Simple and fast rental service. The app is always at hand.{" "}
        </div>
      </div>
      <Map />
    </div>
  );
}
