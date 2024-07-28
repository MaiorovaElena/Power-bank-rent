import { GooglePlayButton } from "react-mobile-app-button";
import styles from "./GoogleButton.module.css";

export default function GoogleButton({i18n}) {
  const link = "https://play.google.com/store/apps";
  const title = "Download in the";
  const theme = "dark";
  const width = "26vw";
  const height = "2em";

  return (
    <div>
      <GooglePlayButton
        url={link}
        title={title}
        theme={theme}
        width={width}
        height={height}
        className={styles.button}
      />
    </div>
  );
}
