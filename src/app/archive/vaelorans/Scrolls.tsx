"use client";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
type Props = {};

export default function Scrolls({}: Props) {
  const [revealed, setRevealed] = useState(2);
  const router = useRouter();
  return (
    <div className="scroll">
      <section id="stop"></section>
      <AnimatePresence mode="wait">
        {revealed > 1 && (
          <section id="general-vae" key={"general-vae"}>
            <h2 className=" vh"> The Vaelorans</h2>
            <img src="/d/hrwhite.svg" alt="" className="hr" />
            <p className="title">Whispered Wings of Opalshine</p>
            <img src="/g/vaeloranart.png" alt="" className="var" />

            <div className="desc stp flat ">
              <p>
                “Carved of starlight and silence, the Vaelorans guard the
                boundary between realms. To hear their song is to remember what
                the world forgot.”
              </p>
            </div>
          </section>
        )}
        {revealed > 2 && (
          <motion.section
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: "200vh" }}
            id="anatomy"
            key={"anatomy"}
          >
            <h2 className="vh">Anatomy & Traits</h2>
            <div className="traits-list">
              <div className="trait stp flat">
                <img src="/g/trait1.png" alt="" className="icon" />
                <p>
                  Wing Variants – flowing spectral wings with fading
                  constellations
                </p>
              </div>
              <div className="trait stp flat">
                <img src="/g/trait2.png" alt="" className="icon" />
                <p>
                  Wing Variants – flowing spectral wings with fading
                  constellations
                </p>
              </div>
              <div className="trait stp flat">
                <img src="/g/trait3.png" alt="" className="icon" />
                <p>
                  Wing Variants – flowing spectral wings with fading
                  constellations
                </p>
              </div>
              <div className="trait stp flat">
                <img src="/g/trait4.png" alt="" className="icon" />
                <p>
                  Wing Variants – flowing spectral wings with fading
                  constellations
                </p>
              </div>
            </div>
            <div className="gems">
              <img src="/g/diamond.gif" alt="" />
            </div>
          </motion.section>
        )}
        {revealed > 3 && (
          <section id="jasper" key={"jasper"}>
            <div className="l">
              <div className="panel stp"></div>
              <img src="/g/jasper.png" alt="" className="jasper" />
            </div>
            <div className="r">
              <div className="rhead">
                <p className="sh">The First Light</p>
                <h2 className="vh">Jasper</h2>
              </div>
              <div className="desc">
                <p>
                  (Placeholder)Carved of starlight and silence, the Vaelorans
                  guard the boundary between realms. To hear their song is to
                  remember what the world forgot, ndary between realms. To hear
                  their song is to remember what the world forgot
                </p>
                <p>
                  (Placeholder)Carved of starlight and silence, the Vaelorans
                  guard the boundary between realms. To hear their song is to
                  remember what the world forgot, ndary between realms. To hear
                  their song is to remember what the world forgot
                </p>
              </div>

              <div className="message stp flat">
                <p className="msh">Jasper's Message</p>
                <p className="quote">
                  “You were not made to sleep forever, Echo-bearer.”
                </p>
                <img src="/d/oribon.png" alt="" className="oribon" />
              </div>
            </div>
          </section>
        )}
      </AnimatePresence>

      <section id="sfoot">
        <button
          className="btn btn-main"
          onClick={() => {
            if (revealed < 4) {
              setRevealed(revealed + 1);
              scrollBy({
                top: 400,
              });
            } else {
              router.push("/archive");
            }
          }}
        >
          {" "}
          {revealed < 4 ? "Reveal More" : "Back to Archive"}{" "}
        </button>
      </section>
    </div>
  );
}
