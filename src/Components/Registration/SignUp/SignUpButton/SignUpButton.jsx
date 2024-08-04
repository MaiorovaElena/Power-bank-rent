import styles from "./SignUpButton.module.css";

export default function SignUpButton({ onClick, t, i18n }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {i18n.t("sign-up")}
    </button>
  );
}
