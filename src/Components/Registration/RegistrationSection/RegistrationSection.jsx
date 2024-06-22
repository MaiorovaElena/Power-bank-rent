import OfferContainer from "../Offer/OfferContainer/OfferContainer";
import SignUpButton from "../SignUp/SignUpButton/SignUpButton";
import SignUpOffer from "../SignUp/SignUpOffer/SignUpOffer";

export default function RegistrationSection() {
  return (
    <>
      <SignUpOffer />
      <SignUpButton />
      <OfferContainer />
    </>
  );
}
