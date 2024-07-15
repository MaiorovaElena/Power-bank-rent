import styles from "./FormButton.module.css";

export default function FormButton({ disabled }) {
  return (
    <button className={styles.button} type="submit" disabled={disabled}>
      Submit
    </button>
  );
}
