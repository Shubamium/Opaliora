"use client";
import IntersectBackground from "@/app/components/pbg/IntersectBackground";
import PageBackground from "@/app/components/pbg/PageBackground";
import useBackgroundChanger from "@/app/utils/useBackgroundChanger";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./mission.scss";
type Props = {};

export default function Mission({}: Props) {
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
            <p className="quote">
              “Sealed in slumber within the heart of Opalshine, Ora dreamt in
              echoes until the world cried out for balance…”
            </p>
          </div>
          <div className="bottom">
            <div className="l">
              <h2 className="sth"> Timeline Fragments</h2>
              <div className="fragments-list">
                <div className="fragment btn">
                  <div className="stp">
                    <img src="/g/art3.png" alt="" className="frag-art" />
                  </div>
                  <h3>Starsong Fall</h3>
                </div>
                <div className="fragment btn">
                  <div className="stp">
                    <img src="/g/art1.png" alt="" className="frag-art" />
                  </div>
                  <h3>Starsong Fall</h3>
                </div>
                <div className="fragment btn">
                  <div className="stp">
                    <img src="/g/art2.png" alt="" className="frag-art" />
                  </div>
                  <h3>Starsong Fall</h3>
                </div>
              </div>
            </div>
            <div className="r">
              <div className="crystal-chamber stp flat ">
                <img src="/g/crystalchamber.png" alt="" className="art" />
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
          <div className="point-text l">
            <h2 className="sth">Radiance</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus porro esse odit quo ipsam hic ut quaerat ipsa,
              perspiciatis aut eum tenetur obcaecati quisquam aperiam inventore
              temporibus possimus voluptates nesciunt! Optio unde sunt iure
              ipsam? Eos quod, laborum consequatur dolorum inventore quis
              repellat ducimus, esse soluta, laudantium deserunt sed molestiae.
            </p>
          </div>
          <div className="point-text r">
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
          </div>

          <div className="why-stream">
            <div className="l">
              <img src="/g/art1.png" alt="" className="pfp" />
            </div>
            <div className="r">
              <h2 className="sth">Why She Streams</h2>
              <p>
                Ora appears to humans as a <strong>VTuber</strong>, channeling
                Radiance through digital resonance. Every kind moment becomes a
                bloom in <strong>Opalshine</strong>.
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
                src="https://www.youtube.com/embed/05tIKTjqDgU?si=Dea_MX9l7PVDtvkg"
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
            <h2 className="sth">Locked Placeholder</h2>
            <p className="desc">
              (Placeholder) Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="locked-list">
              <div className="item stp flat">
                <h2>???</h2>
                <div className="goal">
                  <p>5000 Followers</p>
                </div>
              </div>
              <div className="item stp flat">
                <h2>???</h2>
                <div className="goal">
                  <p>5000 Followers</p>
                </div>
              </div>
              <div className="item stp flat">
                <h2>???</h2>
                <div className="goal">
                  <p>5000 Followers</p>
                </div>
              </div>
              <div className="item stp flat">
                <h2>???</h2>
                <div className="goal">
                  <p>5000 Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </IntersectBackground>
    </main>
  );
}
