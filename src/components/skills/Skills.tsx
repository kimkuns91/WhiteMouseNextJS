"use client";

import React from "react";
import Tag from "@/components/tag/Tag";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { Skill_data_1, Skill_data_2, Skill_data_3 } from "@/data/imageData";
import Image from "next/image";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <Tag text={"Think better with Next js 14"} />
      <motion.div variants={slideInFromLeft(0.5)} className={styles.title}>
        Making apps with modern technologies
      </motion.div>
      <div className={styles.imgWrap}>
        {Skill_data_1.map((image, index) => (
          <Image
            key={index}
            alt={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.imgWrap}>
        {Skill_data_2.map((image, index) => (
          <Image
            key={index}
            alt={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.imgWrap}>
        {Skill_data_3.map((image, index) => (
          <Image
            key={index}
            alt={image.skill_name}
            src={image.Image}
            width={image.width}
            height={image.height}
            className={styles.image}
          />
        ))}
      </div>

      <div className={styles.videoSection}>
        <div className={styles.videoWrap}>
          <video
            className={styles.video}
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/videos/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
}
