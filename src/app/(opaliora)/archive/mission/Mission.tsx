"use client";
import IntersectBackground from "@/app/(opaliora)/components/pbg/IntersectBackground";
import PageBackground from "@/app/(opaliora)/components/pbg/PageBackground";
import useBackgroundChanger from "@/app/(opaliora)/utils/useBackgroundChanger";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./mission.scss";
import { Archive, Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
type Props = { d: Archive };

export default function Mission({ d }: Props) {
  const { scope, activeBG } = useBackgroundChanger();

  return (
    <main id="p_mission" ref={scope}>
      <PageBackground bg={activeBG} />
      <IntersectBackground bg="/b/bg7.png" id="mirror">
        <div className="mh">
          <p className="sh">The Mission</p>
          <h2 className="sth">
            — Ora’s Journey from Crystal Slumber to Streaming —
          </h2>
        </div>
        <div className="ml">
          <div className="mirror stp flat">
            <img src="/d/oribon.png" alt="" className="oribon" />
            <img src="/b/bg_mission1.png" alt="" className="bg" />
            <h2 className="title"> The Slumber & Awakening</h2>
            <a href="#slumber" className="btn btn-enter btn-main">
              ENTER
            </a>
          </div>
          <div className="mirror stp flat">
            <img src="/d/oribon.png" alt="" className="oribon" />
            <img src="/b/bg_mission2.png" alt="" className="bg" />
            <h2 className="title">Gathering Radiance on Earth</h2>
            <a href="#radiance" className="btn btn-enter btn-main">
              ENTER
            </a>
          </div>
          <div className="mirror stp flat">
            <img src="/d/oribon.png" alt="" className="oribon" />
            <img src="/b/bg_mission3.png" alt="" className="bg" />
            <h2 className="title"> The Future Path</h2>
            <a href="#future" className="btn btn-enter btn-main">
              ENTER
            </a>
          </div>
        </div>
      </IntersectBackground>
      <IntersectBackground bg="/b/bg_mission1.png" id="slumber">
        <div className="confine">
          <div className="top">
            <img src="/d/clock.png" alt="" className="clock" />
            <p className="quote">{d["slumber-text"]}</p>
          </div>
          <div className="bottom">
            <div className="l">
              <h2 className="sth"> Timeline Fragments</h2>
              <div className="fragments-list">
                {d.fragments?.map((f, i) => {
                  return (
                    <div className="fragment btn" key={f.id}>
                      <div className="stp">
                        <img
                          src={(f.art as Media)?.url ?? undefined}
                          alt=""
                          className="frag-art"
                        />
                      </div>
                      <h3>{f.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="r">
              <div className="crystal-chamber stp flat ">
                <img
                  src={(d["crystal-chamber-art"] as Media)?.url ?? undefined}
                  alt=""
                  className="art"
                />
              </div>
              <a href="#mirror" className="btn btn-main btn-backto">
                <FaArrowLeft /> Back To Crystal Mirror
              </a>
            </div>
          </div>
        </div>
      </IntersectBackground>
      <IntersectBackground bg="/b/bg_mission2.png" id="radiance">
        <div className="confine">
          <h2 className="mt sth">Gathering Radiance On earth</h2>
          {d["gathering-radiance"]?.map((f, i) => {
            const isOdd = i % 2 === 0;

            return (
              <div className={`point-text ${isOdd ? "l" : "r"}`} key={f.id}>
                {isOdd ? (
                  <>
                    <h2 className="sth">{f.title}</h2>
                    <RichText
                      data={f.description as SerializedEditorState}
                    ></RichText>
                  </>
                ) : (
                  <>
                    <RichText
                      data={f.description as SerializedEditorState}
                    ></RichText>
                    <h2 className="sth">{f.title}</h2>
                  </>
                )}
              </div>
            );
          })}
          {/* <div className="point-text r">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              nesciunt porro nemo, fugit exercitationem perspiciatis magni
              tempore aut, blanditiis nisi quos. A aliquam veniam cumque vero
              dignissimos itaque, voluptas corrupti perspiciatis alias fugit,
              architecto blanditiis reiciendis doloribus! Accusamus fugiat ipsum
              expedita quas reiciendis voluptas maiores quisquam quos, tempora
              quo illo.
            </p>
            <h2 className="sth">Dissonance</h2>
          </div> */}

          <div className="why-stream">
            <div className="l">
              <img src="/g/art1.png" alt="" className="pfp" />
            </div>
            <div className="r">
              <h2 className="sth">Why She Streams</h2>
              <p>
                <strong>
                  "To gather Radiance—one echo, one smile, one heartbeat at a
                  time."
                </strong>
              </p>
              <p>
                Streaming is how Opaliora, the Crystal Warden, connects with the
                mortal world. Each stream is more than content—it's a ritual of
                remembrance, a beacon to attract the forgotten light of dreams
                and emotion. Every moment of joy, every shared laugh or quiet
                comfort, sends shimmering energy back to Opalshine, nurturing
                the crystals that keep her realm alive.
              </p>
            </div>
          </div>
          <div className="action">
            <a href="#mirror" className="btn btn-main btn-backto">
              <FaArrowLeft /> Back To Crystal Mirror
            </a>
          </div>
        </div>
      </IntersectBackground>
      <IntersectBackground bg="/b/bg_mission3.png" id="future">
        <div className="confine">
          <div className="l">
            <h2 className="sth"> The Future Path</h2>
            <div className="teaser stp flat">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${d["future-lore"]}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <a href="#mirror" className="btn btn-main btn-backto">
              <FaArrowLeft /> Back To Crystal Mirror"
            </a>
          </div>
          <div className="r">
            <h2 className="sth">
              “The next path is veiled. Only through Radiance shall the veil
              lift.”
            </h2>
            <p className="desc">
              When enough Radiance is gathered, the sealed gate will open, and
              Opaliora will reclaim a lost fragment of Starsong.
            </p>

            <div className="locked-list">
              {d.unlocks?.map((u, i) => {
                return (
                  <div className="item stp flat" key={u.id}>
                    <h2>{u.name}</h2>
                    <div className="goal">
                      <p>{u.goal}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </IntersectBackground>
    </main>
  );
}
