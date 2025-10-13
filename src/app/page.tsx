import Link from "next/link";
import PageBackground from "./components/pbg/PageBackground";
import "./home.scss";
export default function Home() {
  return (
    <main id={"p_home"}>
      <PageBackground bg="/b/bg1.png" />

      {/* <div className="stp">
        <img src="/g/art1.png" alt="" className="art" />
      </div> */}
      <div className="introtext stp">
        <div className="content">
          <img src="/d/oribon.png" alt="" className="oribon" />
          <h2>“Once a slumbering fae dragon, now wandering among humans…”</h2>
        </div>
      </div>

      <div className="introvid stp">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/05tIKTjqDgU?si=Dea_MX9l7PVDtvkg"
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <Link href={"/about"} className="btn btn-main">
            Meet Ora
          </Link>
        </article>
      </div>
    </main>
  );
}
