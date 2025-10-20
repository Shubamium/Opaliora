import React from "react";
import PageBackground from "../components/pbg/PageBackground";

type Props = {};
import "./merch.scss";
import Link from "next/link";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
import MerchList from "./MerchList";
export default async function Merch({}: Props) {
  const payload = await getPayload({
    config: await payloadConfig,
  });
  const merch = await payload.find({ collection: "merch" });
  return (
    <main id="p_merch">
      <PageBackground bg="/b/bg4.png" />
      <section id="merch-h">
        <h2 className="sth">MERCH</h2>
        <p>
          (Waiting for placeholder text)Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptatibus omnis a, perspiciatis tempore magni
          corporis soluta repellat laudantium cumque quidem?
        </p>
      </section>

      <MerchList ml={merch.docs} />
    </main>
  );
}
