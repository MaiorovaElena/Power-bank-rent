import OfferContainer from "../Offer/OfferContainer/OfferContainer";
import OfferImage from "../Offer/OfferImage/OfferImage";
import SignUpOffer from "../SignUp/SignUpOffer/SignUpOffer";
import styles from "./RegistrationSection.module.css";

export default function RegistrationSection({homeRef, t, i18n}) {
  return (
    <div className={styles.registration} ref={homeRef}>
      <SignUpOffer t={t} i18n={i18n}/>
      <div className={styles.container}>
        <OfferContainer i18n={i18n} />
        <OfferImage />
      </div>
    </div>
  );
}
