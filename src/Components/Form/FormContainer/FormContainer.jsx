import Title from "../Title/Title";
import styles from "./FormContainer.module.css";
import Fields from "../Fields/Fields";
import Modal from "react-modal";
import { useState } from "react";

export default function FormContainer() {
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
      Thank you for registering. This is a website prototype. We will send you a
      promotional code as soon as we launch the service
    </div>
  );

  return (
    <div className={styles.container}>
      <Title />

      <form
        className={styles.form}
        action="https://api.form-data.com/f/rreze912qmcz88kgurxwn"
        method="POST"
        onSubmit={handleSubmit}
      >
        <Fields />
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
