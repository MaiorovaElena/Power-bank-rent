import styles from "./signUpOffer.module.css";
import SignUpButton from "../SignUpButton/SignUpButton";

export default function SignUpOffer() {
  return (
    <div className={styles.container}>
      <SignUpButton />
      <p className={styles.offer}>
        25% discount on the first charge for registering on the site
      </p>
    </div>
  );
}
