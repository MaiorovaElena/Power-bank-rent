import OfferContainer from "../Offer/OfferContainer/OfferContainer";
import OfferImage from "../Offer/OfferImage/OfferImage";
import SignUpOffer from "../SignUp/SignUpOffer/SignUpOffer";
import styles from "./registrationSection.module.css";

export default function RegistrationSection() {
  return (
    <div className={styles.registration}>
      <SignUpOffer />
      <div className={styles.container}>
        <OfferContainer />
        <OfferImage />
      </div>
    </div>
  );
}
