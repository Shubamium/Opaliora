"use client";
import { Gallery, Media } from "@/payload-types";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { BiFullscreen } from "react-icons/bi";

type Props = {
  gl: Gallery[];
};

export default function GalleryList({ gl }: Props) {
  const [activeCat, setActiveCat] = useState(0);

  const activeGallery = gl[activeCat];
  return (
    <section id="gallery-two">
      <div className="controls">
        <img src="/d/oribon.png" alt="" className="oribon" />
        <div className="cats">
          {gl?.map((g, i) => {
            return (
              <button
                className={`btn btn-c ${activeCat === i ? "act" : ""}`}
                key={"keyfanart" + g["category-name"]}
                onClick={() => {
                  setActiveCat(i);
                }}
              >
                {g["category-name"]}
              </button>
            );
          })}
          {/* <button className="btn btn-c">Animated Clips / Emotes</button> */}
        </div>
      </div>

      <div className="gl">
        <AnimatePresence mode="popLayout">
          {(activeGallery?.["media-list"] as Media[])?.map((g, i) => {
            return (
              <motion.div
                initial={{
                  y: -300,
                  filter: "brightness(250%) blur(10px)",
                  opacity: 0,
                  scale: 1,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  filter: "brightness(100%)",
                }}
                exit={{
                  opacity: 0,
                  y: 300,
                  filter: "brightness(250%) blur(10px)",
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * i,
                }}
                className="gcard stp flat"
                key={g.id + i + activeCat}
              >
                <img src="/d/gem8.png" alt="" className="top-g" />
                <img src="/d/gem6.png" alt="" className="bottom-g" />
                <img src={g.url ?? undefined} alt="" className="art" />
                {g.artist && (
                  <a
                    href={g["artist-link"] ?? undefined}
                    target="_blank"
                    className="credit"
                  >
                    {g.artist}
                  </a>
                )}
                <button className="btn btn-fs">
                  <BiFullscreen />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
        {/* <div className="gcard stp flat">
          <img src="/d/gem8.png" alt="" className="top-g" />
          <img src="/d/gem6.png" alt="" className="bottom-g" />
          <img src="/g/art2.png" alt="" className="art" />
          <a href="#" className="credit">
            @username
          </a>
          <button className="btn btn-fs">
            <BiFullscreen />
          </button>
        </div>
        <div className="gcard stp flat">
          <img src="/d/gem8.png" alt="" className="top-g" />
          <img src="/d/gem6.png" alt="" className="bottom-g" />
          <img src="/g/art1.png" alt="" className="art" />
          <a href="#" className="credit">
            @username
          </a>
          <button className="btn btn-fs">
            <BiFullscreen />
          </button>
        </div>
        <div className="gcard stp flat">
          <img src="/d/gem8.png" alt="" className="top-g" />
          <img src="/d/gem6.png" alt="" className="bottom-g" />
          <img src="/g/art1.png" alt="" className="art" />
          <a href="#" className="credit">
            @username
          </a>
          <button className="btn btn-fs">
            <BiFullscreen />
          </button>
        </div>
        <div className="gcard stp flat">
          <img src="/d/gem8.png" alt="" className="top-g" />
          <img src="/d/gem6.png" alt="" className="bottom-g" />
          <img src="/g/art1.png" alt="" className="art" />
          <a href="#" className="credit">
            @username
          </a>
          <button className="btn btn-fs">
            <BiFullscreen />
          </button>
        </div>
        <div className="gcard stp flat">
          <img src="/d/gem8.png" alt="" className="top-g" />
          <img src="/d/gem6.png" alt="" className="bottom-g" />
          <img src="/g/art1.png" alt="" className="art" />
          <a href="#" className="credit">
            @username
          </a>
          <button className="btn btn-fs">
            <BiFullscreen />
          </button>
        </div>
        <div className="gcard stp flat">
          <img src="/d/gem8.png" alt="" className="top-g" />
          <img src="/d/gem6.png" alt="" className="bottom-g" />
          <img src="/g/art1.png" alt="" className="art" />
          <a href="#" className="credit">
            @username
          </a>
          <button className="btn btn-fs">
            <BiFullscreen />
          </button>
        </div>
        <div className="gcard stp flat">
          <img src="/d/gem8.png" alt="" className="top-g" />
          <img src="/d/gem6.png" alt="" className="bottom-g" />
          <img src="/g/art1.png" alt="" className="art" />
          <a href="#" className="credit">
            @username
          </a>
          <button className="btn btn-fs">
            <BiFullscreen />
          </button>
        </div> */}
      </div>
    </section>
  );
}
