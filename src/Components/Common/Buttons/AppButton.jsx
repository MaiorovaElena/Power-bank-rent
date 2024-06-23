import { AppStoreButton } from "react-mobile-app-button";

export default function AppButton() {
  const link = "https://apps.apple.com";
  const title = "Download in the";
  const theme = "dark";

  return (
    <div>
      <AppStoreButton url={link} title={title} theme={theme} />
    </div>
  );
}
