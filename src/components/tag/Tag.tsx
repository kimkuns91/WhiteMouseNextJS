"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import styles from "./Tag.module.css";

interface TagProps {
  text: string;
}

export default function Tag(props: TagProps) {
  return (
    <motion.div variants={slideInFromTop} className={styles.tag}>
      <h1 className={styles.text}>{props.text}</h1>
    </motion.div>
  );
}
