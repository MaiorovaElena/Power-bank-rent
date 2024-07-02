import OfferContainer from "../Offer/OfferContainer/OfferContainer";
import OfferImage from "../Offer/OfferImage/OfferImage";
import SignUpOffer from "../SignUp/SignUpOffer/SignUpOffer";
import styles from "./RegistrationSection.module.css";

export default function RegistrationSection({homeRef}) {
  return (
    <div className={styles.registration} ref={homeRef}>
      <SignUpOffer />
      <div className={styles.container}>
        <OfferContainer />
        <OfferImage />
      </div>
    </div>
  );
}
