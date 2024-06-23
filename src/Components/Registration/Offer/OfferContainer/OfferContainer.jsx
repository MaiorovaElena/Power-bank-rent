import OfferText from "../OfferText/OfferText";
import QrCode from "../QrCode/QrCore";
import OfferImage from "../OfferImage/OfferImage";
import GoogleButton from "../../../Common/Buttons/GoogleButton";
import AppButton from "../../../Common/Buttons/AppButton";

export default function OfferContainer() {
  return (
    <div>
      <OfferText />
      <GoogleButton />
      <AppButton />
      <QrCode />
      <OfferImage />
    </div>
  );
}
