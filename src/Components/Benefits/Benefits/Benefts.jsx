import Powerbank from "../Powerbank/Powerbank";
import styles from "./Benefits.module.css";
import IconMap from "../../../assets/benefits/IconMap.png";
import IconMoney from "../../../assets/benefits/IconMoney.png";
import IconPhone from "../../../assets/benefits/IconPhone.png";

export default function Benefits({ benefitsRef, i18n}) {
  return (
    <div className={styles.container} ref={benefitsRef}>
      <div className={styles.benefits}>
        <h3 className={styles.title}>{i18n.t("in-the-right")}</h3>
        <div className={styles.list}>
          <img className={styles.image} src={IconMap} alt="Map" />
          {i18n.t("rental-stations")}
        </div>
        <div className={styles.list}>
          <img className={styles.image} src={IconMoney} alt="Money" />
          {i18n.t("you-always")}
        </div>
        <div className={styles.list}>
          <img className={styles.image} src={IconPhone} alt="Phone" />
          {i18n.t("simple")}{" "}
        </div>
      </div>
      <Powerbank />
    </div>
  );
}
