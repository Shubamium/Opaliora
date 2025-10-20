import React from "react";
import About from "./About";
import "./about.scss";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
type Props = {};

export default async function page({}: Props) {
  const payload = await getPayload({
    config: await payloadConfig,
  });

  const about = await payload.findGlobal({ slug: "about" });
  const vo = await payload.find({ collection: "voiceover" });

  return <About d={about} vo={vo.docs} />;
}
