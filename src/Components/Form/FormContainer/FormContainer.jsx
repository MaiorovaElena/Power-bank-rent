import Title from "../Title/Title";
import styles from "./FormContainer.module.css";
import Fields from "../Fields/Fields";

export default function FormContainer() {
  return (
    <div className={styles.container}>
      <Title />
      <form
        className={styles.form}
        action="https://formspree.io/f/mqazknww"
        method="POST"
      >
        <Fields />
      </form>
    </div>
  );
}
