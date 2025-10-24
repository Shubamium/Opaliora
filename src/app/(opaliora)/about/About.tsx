"use client";
import PageBackground from "../components/pbg/PageBackground";
import useBackgroundChanger from "../utils/useBackgroundChanger";
import IntersectBackground from "../components/pbg/IntersectBackground";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { About as AboutType, Media, Voiceover } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  d: AboutType;
  vo: Voiceover[];
};

export default function About({ d, vo }: Props) {
  const { scope, activeBG } = useBackgroundChanger();

  // Lore Pages
  const [loreID, setLoreID] = useState(0);
  const [lorePages, setLorePages] = useState<AboutType["lore-points"][]>([]);
  const lorePerPage = 6;

  // Voiceover
  const apRef = useRef<HTMLAudioElement>(null);
  const [activeVoice, setActiveVoice] = useState(0);

  useEffect(() => {
    if (d["lore-points"]) {
      const toChop = [...d["lore-points"]];
      const lorePages = [];
      while (toChop.length > 0) {
        const page = toChop.splice(0, lorePerPage);
        lorePages.push(page);
      }
      setLorePages(lorePages);
    }
  }, [d]);
  return (
    <main id="p_about" ref={scope}>
      <PageBackground bg={activeBG} />
      <IntersectBackground bg="/b/bg3.png" id="origin">
        <div className="frame">
          <div className="l">
            <h2>Origin</h2>
            <RichText data={d["origin-a"] as SerializedEditorState} />
          </div>
          <div className="r">
            <RichText data={d["origin-b"] as SerializedEditorState} />
          </div>
        </div>
      </IntersectBackground>
      <IntersectBackground bg="/b/bg1.png" id="lorepart">
        <div className=" title">
          <div className="title-part">
            <h2>Story</h2>
          </div>
        </div>
        <div className="confine">
          <div className="ctrl l">
            <button
              className="btn btn-control"
              onClick={() => {
                setLoreID(Math.max(loreID - 1, 0));
              }}
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="list">
            <AnimatePresence mode="popLayout">
              {lorePages[loreID]?.map((l, i) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 200 }}
                    key={l.id}
                    transition={{
                      duration: 1,
                      delay: i * 100,
                    }}
                  >
                    <LoreCard
                      title={l.title ?? ""}
                      desc={l.description ?? ""}
                      art={(l.art as Media).url ?? ""}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="ctrl r">
            <button
              className="btn btn-control"
              onClick={() => {
                setLoreID(Math.min(loreID + 1, lorePages.length - 1));
              }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="pager">
          {lorePages.map((_, i) => {
            return (
              <div
                key={i + "lorepages"}
                className={`"btn p ${i === loreID && "act"} `}
              ></div>
            );
          })}
        </div>
      </IntersectBackground>
      <IntersectBackground bg="/b/bg2.png" id="power">
        <div className="powerhead">
          <div className="text">
            <h2>Powers and Personality</h2>
            <hr />
            <RichText data={d.ppdesc as SerializedEditorState} />
          </div>
          <img src="/g/runes1.png" alt="" />
        </div>

        <div className="powerlist">
          {d.powerlist?.map((p, i) => {
            const art = p.icon as Media;
            return (
              <div className="power stp" key={p.id}>
                <img src={art?.url ?? undefined} alt="" className="chib" />
                <h2>{p.title}</h2>
                <img src="/g/hr.svg" alt="" className="hr" />
                <p>{p.description}</p>
              </div>
            );
          })}
          {/* <div className="power stp">
            <img src="/g/chibi3.png" alt="" className="chib" />
            <h2>Crystal Conjuration</h2>
            <img src="/g/hr.svg" alt="" className="hr" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              voluptatem corporis corrupti, impedit cumque consequatur
              repudiandae iste saepe non eum dolorum libero nisi sapiente
              dolorem, error ipsam! Libero rem id nulla unde a! Est deleniti
              beatae, adipisci veniam nobis iure praesentium iusto sit
              rspiciatis voluptate!
            </p>
          </div>
          <div className="power stp">
            <img src="/g/chibi2.png" alt="" className="chib" />
            <h2>Crystal Conjuration</h2>
            <img src="/g/hr.svg" alt="" className="hr" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              voluptatem corporis corrupti, impedit cumque consequatur
              repudiandae iste saepe non eum dolorum libero nisi sapiente
              dolorem, error ipsam! Libero rem id nulla unde a! Est deleniti
              beatae, adipisci veniam nobis iure praesentium iusto sit
              rspiciatis voluptate!
            </p>
          </div> */}
        </div>
      </IntersectBackground>

      <section id="likes">
        <div className="stickybg"></div>
        <div className="ld">
          <div className="sd likes">
            <h2> LIKES</h2>
            {d.likes?.map((l, i) => {
              return (
                <div className="r stp" key={l + i}>
                  <p>{l}</p>
                </div>
              );
            })}
          </div>
          <div className="sd dislikes">
            <h2> DISLIKES</h2>
            {d.dislikes?.map((l, i) => {
              return (
                <div className="r stp" key={l + i}>
                  <p>{l}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="funfact stp flat">
          <div className="ff-h">
            <img src="/g/chibi4.png" alt="" />
            <div className="title">
              <h2>Opaliora</h2>
              <div className="line"></div>
              <p>Fun Fact</p>
            </div>
          </div>
          <div className="ff-l">
            {d.facts?.map((f, i) => {
              return (
                <div className="ff-card" key={f.id}>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                  <img src="/d/oribon.png" alt="" className="oribon" />
                </div>
              );
            })}
            {/* <div className="ff-card">
              <h3>FACT #1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                fugit quas reiciendis soluta asperiores eligendi voluptates, at
                veniam minima iste alias sint quibusdam minus eos beatae eveniet
                a delectus id nulla possimus.
              </p>
              <img src="/d/oribon.png" alt="" className="oribon" />
            </div>
            <div className="ff-card">
              <h3>FACT #1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                fugit quas reiciendis soluta asperiores eligendi voluptates, at
                veniam minima iste alias sint quibusdam minus eos beatae eveniet
                a delectus id nulla possimus.
              </p>
              <img src="/d/oribon.png" alt="" className="oribon" />
            </div> */}
          </div>
        </div>
        <section id="voices">
          <div className="l">
            <audio ref={apRef}></audio>
            <h2>Voices</h2>
            <div className="vl">
              {vo?.map((v, i) => {
                return (
                  <div
                    className={`v stp flat btn ${activeVoice === i ? "act" : ""}`}
                    key={v.id + " selector"}
                    onClick={() => {
                      setActiveVoice(i);
                    }}
                  >
                    <h3>{v.title} </h3>
                    <button
                      className="btn btn-pause"
                      onClick={() => {
                        if (apRef.current) {
                          apRef.current.pause();
                          apRef.current.src =
                            (v["voiceover-audio"] as Media).url ??
                            "/not-found.mp3";
                          apRef.current.load();
                          apRef.current.play();
                        }
                      }}
                    >
                      <FaPlay />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="r">
            <AnimatePresence mode="popLayout">
              <motion.div
                initial={{
                  x: -400,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  x: 400,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="voicepanel stp flat"
                key={vo[activeVoice].id}
              >
                <h3>{vo[activeVoice]?.title}</h3>
                <RichText
                  data={vo[activeVoice]?.description as SerializedEditorState}
                />
                <img src="/d/oribon.png" className="oribon" alt="" />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </section>
    </main>
  );
}

type LoreCardData = {
  title: string;
  desc: string;
  art: string;
};
function LoreCard({ title, desc, art }: LoreCardData) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`lorecard stp btn ${active && "active"}`}
      onClick={() => setActive(!active)}
    >
      <div className="cardfront">
        <img src={art} alt="" className="art" />
        <h2>{title}</h2>
      </div>
      <div className="content">
        <p>{desc}</p>
      </div>
    </div>
  );
}
