import Map from "../Map/Map";
import styles from "./Benefits.module.css";
import IconMap from "../../../assets/benefits/IconMap.png";
import IconMoney from "../../../assets/benefits/IconMoney.png";
import IconPhone from "../../../assets/benefits/IconPhone.png";

export default function Benefits() {
  return (
    <div id="benefits" className={styles.container}>
      <div className={styles.benefits}>
        <h3 className={styles.title}>In the right place at the right time</h3>
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
