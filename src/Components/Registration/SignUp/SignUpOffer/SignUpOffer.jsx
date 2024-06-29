import styles from "./SignUpOffer.module.css";
import SignUpButton from "../SignUpButton/SignUpButton";

export default function SignUpOffer() {
  return (
    <div className={styles.container}>
      <SignUpButton />
      <div className={styles.offer}>
        <p>
          25% discount on the first charge for <br />
          registering on the site
        </p>
      </div>
    </div>
  );
}
