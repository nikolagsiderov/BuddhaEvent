import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="bg-midnightBlack scroll-smooth text-white min-h-screen"
        id="app-root"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
