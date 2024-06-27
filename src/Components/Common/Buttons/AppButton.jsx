import { AppStoreButton } from "react-mobile-app-button";
import styles from "./AppleButton.module.css";

export default function AppButton() {
  const link = "https://apps.apple.com";
  const title = "Download in the";
  const theme = "dark";
  const width = "18em";
  const height = "2em";

  return (
    <div>
      <AppStoreButton
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
