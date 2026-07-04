import "./globals.css";
import styles from "./background.module.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});
export const metadata = {
  title: "Sepehr Portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#070A12]">
        <div className={styles.background}>
          <div className={styles.grid}></div>

          <div className={`${styles.glow} ${styles.g1}`}></div>
          <div className={`${styles.glow} ${styles.g2}`}></div>
          <div className={`${styles.glow} ${styles.g3}`}></div>
          <div className={`${styles.glow} ${styles.g4}`}></div>

          <span className={`${styles.dot} ${styles.d1}`}></span>
          <span className={`${styles.dot} ${styles.d2}`}></span>
          <span className={`${styles.dot} ${styles.d3}`}></span>
          <span className={`${styles.dot} ${styles.d4}`}></span>
          <span className={`${styles.dot} ${styles.d5}`}></span>
        </div>

        <main className="app-content relative z-10">{children}</main>
      </body>
    </html>
  );
}
