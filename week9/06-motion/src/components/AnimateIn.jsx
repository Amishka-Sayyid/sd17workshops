"use client";

import { motion } from "motion/react";
import StateAnimations from "./StateAnimations";
export function AnimateIn() {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <StateAnimations />
    </motion.div>
  );
}
