import React from "react";
import PageBackground from "../components/pbg/PageBackground";

type Props = {};
import "./gallery.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BiFullscreen } from "react-icons/bi";

export default function page({}: Props) {
  return (
    <main id="p_gallery">
      <PageBackground bg="/b/bg1.png" />
      <div className="glow-top"></div>
      <section id="gallery-main">
        <div className="confine">
          <div className="l">
            <div className="gallery-panel stp flat">
              <img src="/g/art1.png" alt="" className="art" />
              <div className="pager">
                <div className="p act"></div>
                <div className="p"></div>
                <div className="p"></div>
              </div>
              <div className="controls">
                <button className="btn prev">
                  {" "}
                  <FaArrowLeft />
                </button>
                <button className="btn next">
                  {" "}
                  <FaArrowRight />
                </button>
              </div>
              {/* <img src="/g/art1.png" alt="" className="art" /> */}
            </div>
          </div>
          <div className="r">
            <div className="gmh">
              <h2 className="sth">Gallery</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                consequuntur? Optio iste error porro magni vero iusto ratione
                tempora non tenetur. Quibusdam recusandae hic officia.
                Voluptatum deleniti ipsum dolore distinctio?
              </p>
            </div>

            <div className="gallery-panel stp flat">
              <img src="/g/art1.png" alt="" className="art" />
              <div className="pager">
                <div className="p act"></div>
                <div className="p"></div>
                <div className="p"></div>
              </div>
              <div className="controls">
                <button className="btn prev">
                  {" "}
                  <FaArrowLeft />
                </button>
                <button className="btn next">
                  {" "}
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery-two">
        <div className="controls">
          <img src="/d/oribon.png" alt="" className="oribon" />
          <div className="cats">
            <button className="btn btn-c act">Fan Art</button>
            <button className="btn btn-c">Animated Clips / Emotes</button>
          </div>
        </div>

        <div className="gl">
          <div className="gcard stp flat">
            <img src="/d/gem8.png" alt="" className="top-g" />
            <img src="/d/gem6.png" alt="" className="bottom-g" />
            <img src="/g/art5.png" alt="" className="art" />
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
          </div>
        </div>
      </section>
    </main>
  );
}
