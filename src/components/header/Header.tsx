import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrap}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/Logo.png" alt="logo" width={35} height={35} />
          <span className={styles.logoText}>WhiteMouseDev</span>
        </Link>
        <div className={styles.nav}>
          <div className={styles.navWrap}>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className={styles.auth}>
          <Link href="/login">Login</Link>
          <Link href="/regist">Regist</Link>
        </div>
      </div>
    </div>
  );
}
