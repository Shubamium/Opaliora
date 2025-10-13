import React from "react";
import PageBackground from "../components/pbg/PageBackground";

type Props = {};
import "./merch.scss";
import Link from "next/link";
export default function Merch({}: Props) {
  return (
    <main id="p_merch">
      <PageBackground bg="/b/bg4.png" />
      <section id="merch-h">
        <h2 className="sth">MERCH</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          omnis a, perspiciatis tempore magni corporis soluta repellat
          laudantium cumque quidem?
        </p>
      </section>

      <section id="merch-l">
        <div className="cats">
          <button className="btn btn-c act">Prints</button>
          <button className="btn btn-c">Charms</button>
          <button className="btn btn-c">Keychains</button>
          <button className="btn btn-c">Voice Packs</button>
        </div>
        <div className="cl">
          <div className="pcard">
            <img src="/g/art2.png" alt="" className="pimg" />
            <div className="details">
              <h3 className="title">Product Name</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at
                aspernatur praesentium, labore aut ipsam aperiam expedita.
                Consequatur quo excepturi laboriosam magnam?
              </p>

              {/* Detail Footer */}
              <div className="df">
                <p className="price">$30</p>
                <Link
                  href={"#"}
                  target="_blank"
                  className="btn btn-main btn-buy"
                >
                  BUY
                </Link>
              </div>
            </div>
          </div>
          <div className="pcard">
            <img src="/g/art2.png" alt="" className="pimg" />
            <div className="details">
              <h3 className="title">Product Name</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at
                aspernatur praesentium, labore aut ipsam aperiam expedita.
                Consequatur quo excepturi laboriosam magnam?
              </p>

              {/* Detail Footer */}
              <div className="df">
                <p className="price">$30</p>
                <Link
                  href={"#"}
                  target="_blank"
                  className="btn btn-main btn-buy"
                >
                  BUY
                </Link>
              </div>
            </div>
          </div>
          <div className="pcard">
            <img src="/g/art2.png" alt="" className="pimg" />
            <div className="details">
              <h3 className="title">Product Name</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at
                aspernatur praesentium, labore aut ipsam aperiam expedita.
                Consequatur quo excepturi laboriosam magnam?
              </p>

              {/* Detail Footer */}
              <div className="df">
                <p className="price">$30</p>
                <Link
                  href={"#"}
                  target="_blank"
                  className="btn btn-main btn-buy"
                >
                  BUY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
