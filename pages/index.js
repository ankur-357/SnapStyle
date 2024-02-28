import Head from "next/head";
import { useState } from "react";
import Header from "../components/header/Header";
import Parent from "../components/parent/Parent";
import Toolbar from "../components/toolbar/Toolbar";
import { ToastContainer } from "react-toastify";
import Script from "next/script";

export default function Home() {
  const [img, setImg] = useState();

  const onImageChange = (e) => {
    if (e.target.files.length !== 0) {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <Head>
        <title>SnapStyle - Beautiful Screenshots ✨</title>
        <link rel="icon" href="/logo.png" />
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3D883HVJ2F"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3D883HVJ2F', { page_path: window.location.pathname });
            `,
        }}
      />
      <main className="min-h-[100vh]">
        <Header />
        <Parent img={img} />
        {/* <LocalView/> */}
        <Toolbar onImageChange={onImageChange} img={img} />
      </main>
      <ToastContainer theme="colored" />
    </>
  );
}
