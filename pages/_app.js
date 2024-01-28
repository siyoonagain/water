import "../styles/font.css";
import HeaderPage from "../src/layout/header/index.jsx";
export default function App({ Component, pageProps }) {
  return (
    <>
      <HeaderPage />
      <Component {...pageProps} />
    </>
  );
}
