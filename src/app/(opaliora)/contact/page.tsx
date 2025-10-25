"use client";
import React, { useState } from "react";
type Props = {};
import "./contact.scss";
import PageBackground from "../components/pbg/PageBackground";
import IntersectBackground from "../components/pbg/IntersectBackground";
import useBackgroundChanger from "../utils/useBackgroundChanger";
import { FaXTwitter } from "react-icons/fa6";
import { MailProps, sendMail } from "../utils/mail.";
import { BiLoaderCircle } from "react-icons/bi";
export default function Contact({}: Props) {
  const { scope, activeBG } = useBackgroundChanger();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  return (
    <main id="p_contact" ref={scope}>
      <PageBackground bg={activeBG} />
      <IntersectBackground bg="/b/bg1.png" id="contact-list">
        <div className="confine">
          <div className="l">
            <img src="/g/orahalfbody.png" alt="" className="hbd" />
          </div>
          <div className="r">
            <div className="c-h">
              <h2 className="sth"> Contact</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
            <div className="cl">
              <a href="#" target="_blank" className="btn btn-ct stp flat">
                <FaXTwitter />
                <span>Twitter</span>
                <img src="/d/oribon.png" alt="" className="oribon" />
              </a>
              <a href="#" target="_blank" className="btn btn-ct stp flat">
                <FaXTwitter />
                <span>Twitter</span>
                <img src="/d/oribon.png" alt="" className="oribon" />
              </a>
              <a href="#" target="_blank" className="btn btn-ct stp flat">
                <FaXTwitter />
                <span>Twitter</span>
                <img src="/d/oribon.png" alt="" className="oribon" />
              </a>
            </div>
            <div className="cl">
              <a href="#" target="_blank" className="btn btn-ct stp flat">
                <FaXTwitter />
                <span>Twitter</span>
                <img src="/d/oribon.png" alt="" className="oribon" />
              </a>
              <a href="#" target="_blank" className="btn btn-ct stp flat">
                <FaXTwitter />
                <span>Twitter</span>
                <img src="/d/oribon.png" alt="" className="oribon" />
              </a>
              <a href="#" target="_blank" className="btn btn-ct stp flat">
                <FaXTwitter />
                <span>Twitter</span>
                <img src="/d/oribon.png" alt="" className="oribon" />
              </a>
            </div>
          </div>
        </div>
      </IntersectBackground>
      <div className={`loading ${loading ? "active" : ""}`}>
        <BiLoaderCircle />
        <p className="message">{status}</p>
      </div>
      <IntersectBackground bg="/b/bg6.png" id="contact-form">
        <div className="confine">
          <div className="l">
            <img src="/g/chibi3.png" alt="" className="chib" />
            <h2 className="sth"> Fan Mail Submission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              repellat similique suscipit? Lorem ipsum dolor sit amet.
            </p>
          </div>
          <form
            className="r"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(formData) as MailProps;
              setLoading(true);
              setStatus("Please wait, submitting form . . .");
              const result = await sendMail(data);
              setStatus(
                result
                  ? "Message sent!"
                  : "ERROR: Failed to send the message..."
              );
              setTimeout(() => {
                setLoading(false);
              }, 2000);

              if (result) {
                (e.target as HTMLFormElement).reset();
              }
            }}
          >
            <div className="fg">
              <div className="if">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Write your name here!"
                  required
                />
              </div>
              <div className="if">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Write your email here!"
                />
              </div>
            </div>
            <div className="if">
              <label htmlFor="subject">SUBJECT</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Write the subject of your message here!"
              />
            </div>
            <div className="if">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message here!"
                required
              ></textarea>
            </div>
            <div className="actions">
              <button className="btn btn-main" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </IntersectBackground>
    </main>
  );
}
