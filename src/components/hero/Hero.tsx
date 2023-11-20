"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import styles from "./Hero.module.css";
import HeroContent from "../heroContent/HeroContent";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video autoPlay muted loop className={styles.video}>
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
}
