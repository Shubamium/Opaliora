"use client";
import PageBackground from "../components/pbg/PageBackground";
import useBackgroundChanger from "../utils/useBackgroundChanger";
import IntersectBackground from "../components/pbg/IntersectBackground";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import { useState } from "react";

type Props = {};

export default function About({}: Props) {
  const { scope, activeBG } = useBackgroundChanger();

  return (
    <main id="p_about" ref={scope}>
      <PageBackground bg={activeBG} />
      <IntersectBackground bg="/b/bg3.png" id="origin">
        <div className="frame">
          <div className="l">
            <h2>Origin</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
          <div className="r">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
      </IntersectBackground>
      <IntersectBackground bg="/b/bg1.png" id="lorepart">
        <div className=" title">
          <div className="title-part">
            <h2>Title Here</h2>
          </div>
        </div>
        <div className="confine">
          <div className="ctrl">
            <button className="btn btn-control">
              <FaArrowLeft />
            </button>
          </div>
          <div className="list">
            <LoreCard></LoreCard>
            <LoreCard></LoreCard>
            <LoreCard></LoreCard>
            <LoreCard></LoreCard>
            <LoreCard></LoreCard>
            <LoreCard></LoreCard>
          </div>
          <div className="ctrl">
            <button className="btn btn-control">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="pager">
          <div className="btn p act"></div>
          <div className="btn p"></div>
          <div className="btn p"></div>
        </div>
      </IntersectBackground>
      <IntersectBackground bg="/b/bg2.png" id="power">
        <div className="powerhead">
          <div className="text">
            <h2>Powers and Personality</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              corrupti voluptate dignissimos ipsam quaerat fugiat esse quos non
              vitae iste earum accusamus neque eligendi deserunt, id omnis ex
              voluptatibus aperiam!
            </p>
          </div>
          <img src="/g/runes1.png" alt="" />
        </div>

        <div className="powerlist">
          <div className="power stp">
            <img src="/g/chibi1.png" alt="" className="chib" />
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
          </div>
        </div>
      </IntersectBackground>

      <section id="likes">
        <div className="stickybg"></div>
        <div className="ld">
          <div className="sd likes">
            <h2> LIKES</h2>
            <div className="r stp">
              <p>Likes</p>
            </div>
            <div className="r stp">
              <p>Likes</p>
            </div>
            <div className="r stp">
              <p>Likes</p>
            </div>
            <div className="r stp">
              <p>Likes</p>
            </div>
          </div>
          <div className="sd dislikes">
            <h2> DISLIKES</h2>
            <div className="r stp">
              <p>Likes</p>
            </div>
            <div className="r stp">
              <p>Likes</p>
            </div>
            <div className="r stp">
              <p>Likes</p>
            </div>
            <div className="r stp">
              <p>Likes</p>
            </div>
            <div className="r stp">
              <p>Likes</p>
            </div>
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
            <div className="ff-card">
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
            </div>
          </div>
        </div>
        <section id="voices">
          <div className="l">
            <h2>Voices</h2>
            <div className="vl">
              <div className="v stp flat">
                <h3>Voice Name </h3>
                <button className="btn btn-pause">
                  <FaPlay />
                </button>
              </div>
              <div className="v stp flat">
                <h3>Voice Name </h3>
                <button className="btn btn-pause">
                  <FaPlay />
                </button>
              </div>
              <div className="v stp flat">
                <h3>Voice Name </h3>
                <button className="btn btn-pause">
                  <FaPlay />
                </button>
              </div>
              <div className="v stp flat">
                <h3>Voice Name </h3>
                <button className="btn btn-pause">
                  <FaPlay />
                </button>
              </div>
              <div className="v stp flat">
                <h3>Voice Name </h3>
                <button className="btn btn-pause">
                  <FaPlay />
                </button>
              </div>
              <div className="v stp flat">
                <h3>Voice Name </h3>
                <button className="btn btn-pause">
                  <FaPlay />
                </button>
              </div>
              <div className="v stp flat">
                <h3>Voice Name </h3>
                <button className="btn btn-pause">
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
          <div className="r">
            <div className="voicepanel stp flat">
              <h3>Voice Title #1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                ratione omnis, incidunt dicta dolores nemo molestias neque
                tempora eaque cupiditate at exercitationem voluptates sint eius
                saepe soluta assumenda impedit temporibus aliquam! Est, corrupti
                vel reprehenderit ducimus at laborum maxime iste eaque
                consectetur facilis velit! Nisi, eum necessitatibus. Accusamus,
                est vel.
              </p>
              <img src="/d/oribon.png" className="oribon" alt="" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function LoreCard({}) {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`lorecard stp btn ${active && "active"}`}
      onClick={() => setActive(!active)}
    >
      <div className="cardfront">
        <img src="/g/art1.png" alt="" className="art" />
        <h2>Lore Part Title</h2>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores,
          eius? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis nihil magni doloremque sunt. Cumque, aut praesentium
          ratione suscipit inventore repudiandae.
        </p>
      </div>
    </div>
  );
}
