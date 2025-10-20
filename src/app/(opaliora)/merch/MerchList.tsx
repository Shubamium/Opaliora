"use client";
import { Media, Merch, Product } from "@/payload-types";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
type Props = {
  ml: Merch[];
};

export default function MerchList({ ml }: Props) {
  const [activeCat, setActiveCat] = useState(0);

  const activeMerchCat = ml[activeCat];
  return (
    <section id="merch-l">
      <div className="cats">
        {ml?.map((m, i) => {
          return (
            <button
              className={`btn btn-c ${activeCat === i ? "act" : ""}`}
              key={m.id + "selection"}
              onClick={() => {
                setActiveCat(i);
              }}
            >
              {m["category-name"]}
            </button>
          );
        })}
        {/* <button className="btn btn-c">Charms</button>
          <button className="btn btn-c">Keychains</button>
          <button className="btn btn-c">Voice Packs</button> */}
      </div>
      <div className="cl">
        <AnimatePresence mode="wait">
          {(activeMerchCat?.["product-list"] as Product[])?.map((p, i) => {
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
                key={p.id + i + "" + activeCat}
              >
                <div className="pcard">
                  <img
                    src={(p.image as Media)?.url ?? undefined}
                    alt=""
                    className="pimg"
                  />
                  <div className="details">
                    <h3 className="title">{p.title}</h3>
                    <RichText
                      data={p.description as SerializedEditorState}
                      className="desc"
                    ></RichText>

                    {/* Detail Footer */}
                    <div className="df">
                      <p className="price">{p.price}</p>
                      <Link
                        href={p["buy-link"] ?? "#"}
                        target="_blank"
                        className="btn btn-main btn-buy"
                      >
                        BUY
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
