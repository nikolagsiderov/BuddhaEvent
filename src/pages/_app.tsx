import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Ubuntu } from "next/font/google";
import "../style/globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;
