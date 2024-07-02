import Map from "../Map/Map";
import styles from "./Benefits.module.css";
import IconMap from "../../../assets/IconMap.png";
import IconMoney from "../../../assets/IconMoney.png";
import IconPhone from "../../../assets/IconPhone.png";

export default function Benefits() {
  return (
    <div className={styles.container}>
      <div className={styles.benefits}>
        <div className={styles.list}>
          <img className={styles.image} src={IconMap} alt="Map" />
          Не переживай, если батарея на исходе. Широкая сеть станций аренды.
        </div>
        <div className={styles.list}>
          <img className={styles.image} src={IconMoney} alt="Money" />
          Всегда знаешь стоимость заранее. Удобные тарифы с возможностью
          продления.
        </div>
        <div className={styles.list}>
          <img className={styles.image} src={IconPhone} alt="Phone" />
          Простое и быстрое оформление. Приложение всегда под рукой.
        </div>
      </div>
      <Map />
    </div>
  );
}