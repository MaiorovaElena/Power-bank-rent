import styles from "./SignUpOffer.module.css";
import SignUpButton from "../SignUpButton/SignUpButton";
import { useState } from "react";
import Modal from "react-modal";
import FormContainer from "../../../Form/FormContainer/FormContainer";

export default function SignUpOffer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = <FormContainer />;

  return (
    <div className={styles.container}>
      <SignUpButton onClick={openModal} />
      <Modal
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {modalContent}
      </Modal>
      <div className={styles.offer}>
        <p>
          25% discount on the first charge for <br />
          registering on the site
        </p>
      </div>
    </div>
  );
}
