import styles from "./FormButton.module.css";

export default function FormButton({ disabled, i18n }) {
  return (
    <button className={styles.button} type="submit" disabled={disabled}>
      {i18n.t("submit")}
    </button>
  );
}
