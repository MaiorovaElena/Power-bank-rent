import styles from "./SignUpButton.module.css";

export default function SignUpButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      Sign Up
    </button>
  );
}
