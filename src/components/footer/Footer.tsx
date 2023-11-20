import { social } from "@/data/imageData";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.imageWrap}>
        {social.map((image, index) => (
          <a href={image.link} key={index} className={styles.a}>
            <Image
              alt={image.skill_name}
              src={image.Image}
              width={image.width}
              height={image.height}
              className={styles.image}
            />
          </a>
        ))}
      </div>
      <div>
        <p>Copyright © 2023 Kun Woo Kim, Designed By Kun Woo Kim</p>
      </div>
    </div>
  );
}
