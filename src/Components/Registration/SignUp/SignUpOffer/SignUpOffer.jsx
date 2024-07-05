import styles from "./SignUpOffer.module.css";
import SignUpButton from "../SignUpButton/SignUpButton";
import { useState } from "react";
import Modal from "react-modal";
import FormContainer from "../../../Form/FormContainer/FormContainer";

export default function SignUpOffer({t, i18n}) {
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
        style={{ overlay: { zIndex: 100 } }}
        className={styles.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        {modalContent}
      </Modal>
      <div className={styles.offer}>
        <p>
          {i18n.t("discount")} <br />
          {i18n.t("registering")}
        </p>
      </div>
    </div>
  );
}
