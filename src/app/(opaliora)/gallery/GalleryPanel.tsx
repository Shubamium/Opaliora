"use client";
import { Media } from "@/payload-types";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
type Props = {
  ml: Media[];
};

export default function GalleryPanel({ ml }: Props) {
  const [id, setId] = useState(0);

  const currentImg = (ml[id] as Media).url;
  return (
    <div className="gallery-panel stp flat">
      <AnimatePresence mode="wait">
        <motion.img
          initial={{
            scale: 1.1,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          src={currentImg ?? undefined}
          key={ml[id].id}
          alt=""
          className="art"
        />
      </AnimatePresence>
      <div className="pager">
        {ml?.map((m, i) => {
          return (
            <div
              className={`btn p ${i === id ? "act" : ""} `}
              key={"key" + i + m.id}
              onClick={() => {
                setId(i);
              }}
            ></div>
          );
        })}
        {/* <div className="p"></div>
        <div className="p"></div> */}
      </div>
      <div className="controls">
        <button
          className="btn prev"
          onClick={() => {
            setId(Math.max(0, id - 1));
          }}
        >
          {" "}
          <FaArrowLeft />
        </button>
        <button
          className="btn next"
          onClick={() => {
            setId(Math.min(ml.length - 1, id + 1));
          }}
        >
          {" "}
          <FaArrowRight />
        </button>
      </div>
      {/* <img src="/g/art1.png" alt="" className="art" /> */}
    </div>
  );
}
