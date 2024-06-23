import { GooglePlayButton } from "react-mobile-app-button";

export default function GoogleButton() {
  const link = "https://play.google.com/store/apps";
  const title = "Download in the";
  const theme = "dark";

  return (
    <div>
      <GooglePlayButton url={link} title={title} theme={theme} />
    </div>
  );
}
