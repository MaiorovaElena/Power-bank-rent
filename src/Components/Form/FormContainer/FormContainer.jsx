import Title from "../Title/Title";
import styles from "./FormContainer.module.css";
import FormButton from "../FormButton/FormButton";
import Fields from "../Fields/Fields";

export default function FormContainer() {
  return (
    <div className={styles.container}>
      <Title />
      <form className={styles.form}>
        <Fields />
        <FormButton />
      </form>
    </div>
  );
}
