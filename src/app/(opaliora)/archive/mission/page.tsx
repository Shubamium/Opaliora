import PageBackground from "@/app/(opaliora)/components/pbg/PageBackground";
import React from "react";
import Mission from "./Mission";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";

type Props = {};

export default async function page({}: Props) {
  const payload = await getPayload({
    config: await payloadConfig,
  });

  const archive = await payload.findGlobal({ slug: "archive" });

  return <Mission d={archive} />;
}
