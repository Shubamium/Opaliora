"use client";
import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import React from "react";

type Props = {
  bg: string;
};

export default function PageBackground({ bg }: Props) {
  const scroll = useScroll();
  const zoom = useTransform(scroll.scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="pbg">
      <AnimatePresence mode="popLayout">
        <motion.img
          src={bg ?? "/b/bg1.png"}
          alt=""
          style={{ scale: zoom }}
          className="bg"
          initial={{
            opacity: 0,
            y: 100,
            filter: "brightness(450%)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "brightness(100%)",
          }}
          exit={{ opacity: 0, filter: "brightness(250%)" }}
          key={bg}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>
      <img src="/d/mist1.png" alt="" className="mist" />
    </div>
  );
}
