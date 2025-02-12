"use client";

import { motion } from "motion/react";

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1.5 }}
      transition={{ duration: 5 }}
      className="flex flex-col  items-center text-amber-600"
    >
      <h1>Welcome to my website</h1>
      <h2>hope you enjoy the animations</h2>
    </motion.div>
  );
}
