import styles from "./Title.module.css";

export default function Title({i18n}) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{i18n.t("sign-up")}</h3>
    </div>
  );
}
