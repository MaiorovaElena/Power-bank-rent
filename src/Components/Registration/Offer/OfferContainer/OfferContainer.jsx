import OfferText from "../OfferText/OfferText";
import GoogleButton from "../OfferButtons/GoogleButton";
import AppleButton from "../OfferButtons/AppleButton";
import QrCode from "../QrCode/QrCore";
import OfferImage from "../OfferImage/OfferImage";

export default function OfferContainer() {
  return (
    <div>
      <OfferText />
      <GoogleButton />
      <AppleButton />
      <QrCode />
      <OfferImage />
    </div>
  );
}
