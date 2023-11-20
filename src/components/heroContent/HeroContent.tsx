"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import styles from "./HeroContent.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeroContent = () => {
  const router = useRouter();
  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={styles.heroContent}
    >
      <div className={styles.left}>
        <motion.div variants={slideInFromTop} className={styles.welcomeBox}>
          <h1 className={styles.welcomeText}>Fullstack Developer WhiteMouse</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className={styles.welcomeContents}
        >
          <span>
            Providing
            <span className={styles.welcomeSpan}> the best </span>
            project exprience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className={styles.welcomeIntro}
        >
          As a full-stack developer, I work on website, application, and machine
          learning development.
        </motion.p>

        <motion.a variants={slideInFromLeft(1)} className={styles.contactBtn} onClick={handleContactClick}>
          Contact Me
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className={styles.rightImgWrap}
      >
        <Image
          src="/images/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
