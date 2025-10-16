import React from "react";

type Props = {};
import "./vaelorans.scss";
import PageBackground from "@/app/components/pbg/PageBackground";
import Scrolls from "./Scrolls";
export default function Vaeloran({}: Props) {
  return (
    <main id="p_vaelorans">
      <PageBackground bg="/b/bg8.png" />
      <section id="vaetitle">
        <div className="top">
          <p className="sh">The Vaelorans</p>
          <h2 className="sth">— Ethereal Beings of Light and Memory —</h2>
        </div>
        <div id="hovercube">
          <img src="/g/vaecrystal.png" alt="" className="center-crystal" />
          <img src="/d/floormagic.png" alt="" className="floor-magic" />
          <img src="/d/elips1.png" alt="" className="elips a" />
          <img src="/d/elips2.png" alt="" className="elips b" />
        </div>
      </section>

      <Scrolls />
    </main>
  );
}
