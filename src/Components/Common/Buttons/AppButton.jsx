import { AppStoreButton } from "react-mobile-app-button";
import styles from "./appleButton.module.css";

export default function AppButton() {
  const link = "https://apps.apple.com";
  const title = "Download in the";
  const width = "20em";
  const height = "2em";

  return (
    <div>
      <AppStoreButton
        url={link}
        title={title}
        width={width}
        height={height}
        className={styles.button}
      />
    </div>
  );
}
