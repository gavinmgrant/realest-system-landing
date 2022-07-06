import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../public/logo.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Realest System - Coming Soon</title>
        <meta
          name="description"
          content="A real estate system for independent landlords."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a href="https://www.instagram.com/realestsystem/">
          <Image
            alt="Realest System Logo"
            src={logo}
            layout="intrinsic"
            width={243}
            height={95}
            quality={100}
          />
        </a>
        <p className={styles.description}>
          A real estate system for independent landlords.{" "}
          <span className={styles.blink}>Coming soon.</span>
        </p>
      </main>
    </div>
  );
}
