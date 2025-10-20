import React from "react";
import PageBackground from "../components/pbg/PageBackground";

type Props = {};
import "./gallery.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { BiFullscreen } from "react-icons/bi";
import { getPayload } from "payload";
import getConfig from "next/config";
import payloadConfig from "@/payload.config";
import GalleryPanel from "./GalleryPanel";
import { Media } from "@/payload-types";
import GalleryList from "./GalleryList";

export default async function page({}: Props) {
  const payload = await getPayload({
    config: await payloadConfig,
  });

  const featured = await payload.findGlobal({
    slug: "featured-gallery",
  });
  const gallery = await payload.find({
    collection: "gallery",
  });
  const sheets = featured["character-sheets"];
  const render = featured["character-sheets"];
  return (
    <main id="p_gallery">
      <PageBackground bg="/b/bg1.png" />
      <div className="glow-top"></div>
      <section id="gallery-main">
        <div className="confine">
          <div className="l">
            <GalleryPanel ml={render as Media[]} />
          </div>
          <div className="r">
            <div className="gmh">
              <h2 className="sth">Gallery</h2>
              <p>
                (Missing Text Here) Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Et, consequuntur? Optio iste error porro magni
                vero iusto ratione tempora non tenetur. Quibusdam recusandae hic
                officia. Voluptatum deleniti ipsum dolore distinctio?
              </p>
            </div>

            <GalleryPanel ml={sheets as Media[]} />
          </div>
        </div>
      </section>

      <GalleryList gl={gallery.docs}></GalleryList>
    </main>
  );
}
