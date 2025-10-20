import Link from "next/link";
import PageBackground from "./components/pbg/PageBackground";
import "./home.scss";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
export default async function Home() {
  const payload = await getPayload({
    config: await payloadConfig,
  });

  const home = await payload.findGlobal({ slug: "home" });

  return (
    <main id={"p_home"}>
      <PageBackground bg="/b/bg1.png" />

      {/* <div className="stp">
        <img src="/g/art1.png" alt="" className="art" />
      </div> */}
      <div className="introtext stp">
        <div className="content">
          <img src="/d/oribon.png" alt="" className="oribon" />
          {/* <h2>“Once a slumbering fae dragon, now wandering among humans…”</h2> */}
          <h2>{home.intro}</h2>
        </div>
      </div>

      <div className="introvid stp">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${home["intro-vid"]}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="opaintro">
        <div className="splash-c">
          <img src="/g/orasplash.png" alt="" className="splash" />
        </div>
        <article>
          <h2>OPALIORA</h2>
          <p>{home.bio}</p>
          <Link href={"/about"} className="btn btn-main">
            Meet Ora
          </Link>
        </article>
      </div>
    </main>
  );
}
