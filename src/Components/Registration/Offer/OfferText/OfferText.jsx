import styles from "./OfferText.module.css";

export default function OfferText({ i18n}) {
  return (
    <h2 className={styles.text}>
      {i18n.t("rent-a-power")}
    </h2>
  );
}
