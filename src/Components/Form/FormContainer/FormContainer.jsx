import Title from "../Title/Title";
import styles from "./FormContainer.module.css";
import Fields from "../Fields/Fields";
import Modal from "react-modal";
import { useState } from "react";

export default function FormContainer({i18n}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = () => {
    openModal();
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      {i18n.t("website-prototype")}
    </div>
  );

  return (
    <div className={styles.container}>
      <Title i18n={i18n}/>

      <form
        className={styles.form}
        action="https://api.form-data.com/f/rreze912qmcz88kgurxwn"
        method="POST"
        onSubmit={handleSubmit}
      >
        <Fields i18n={i18n}/>
      </form>
      <Modal
        className={styles.modal}
        style={{ overlay: { zIndex: 100 } }}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
