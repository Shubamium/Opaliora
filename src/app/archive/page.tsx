import React from "react";
import PageBackground from "../components/pbg/PageBackground";

type Props = {};
import "./archive.scss";
import Link from "next/link";
export default function page({}: Props) {
  return (
    <main id="p_archive">
      <PageBackground bg="/b/bg1.png" />
      <div className="glow-top"></div>
      <div className="archive-title">
        <h2 className="sth">LORE ARCHIVE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          dolores fugiat repudiandae nam nemo. Qui perspiciatis eos doloribus
          aliquid incidunt nostrum optio quia doloremque dolores aut! Illo
          quisquam harum voluptatibus fuga, deleniti repellendus architecto enim
          totam similique! Ducimus, modi quos id quis odio, quod aliquam labore
          consequatur aspernatur commodi tempore!
        </p>
      </div>
      {/* Desktop Only */}
      <section id="selector">
        <div className="back"></div>
        <div className="center">
          <div className="pillar">
            <img src="/g/pillar_r.png" alt="" className="plart" />
            <button className="btn btn-pillar stp">
              <img src="/b/bg2.png" alt="" className="bg" />
              <img src="/d/magic_circle1.png" alt="" className="magic" />
              <div className="content">
                <img src="/d/gem7.png" alt="" className="gem" />
                <h2>Interactive Map</h2>
                <p>{`(Currently Unavailable)`}</p>
              </div>
            </button>
          </div>
          <div className="pillar">
            <img src="/g/pillar_c.png" alt="" className="plart" />
            <Link href={"/archive/vaelorans"} className="btn btn-pillar stp">
              <img src="/g/art8.png" alt="" className="bg" />
              <img src="/d/magic_circle1.png" alt="" className="magic" />
              <div className="content">
                <img src="/d/gem1.png" alt="" className="gem" />
                <h2>The Vaelorans</h2>
              </div>
            </Link>
          </div>
          <div className="pillar">
            <img src="/g/pillar_l.png" alt="" className="plart" />
            <Link href={"/archive/mission"} className="btn btn-pillar stp">
              <img src="/g/art6.png" alt="" className="bg" />
              <img src="/d/magic_circle1.png" alt="" className="magic" />
              <div className="content">
                <img src="/d/gem3.png" alt="" className="gem" />
                <h2>The Mission</h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="front">
          <img src="/d/fpl.png" alt="" className="fp l" />
          <img src="/d/fpr.png" alt="" className="fp r" />
        </div>
      </section>
    </main>
  );
}
