"use client";
import React from "react";
type Props = {};
import "./contact.scss";
import PageBackground from "../components/pbg/PageBackground";
import IntersectBackground from "../components/pbg/IntersectBackground";
import useBackgroundChanger from "../utils/useBackgroundChanger";
import { FaXTwitter } from "react-icons/fa6";
export default function Contact({}: Props) {
  const { scope, activeBG } = useBackgroundChanger();
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
          <form className="r">
            <div className="fg">
              <div className="if">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Write your name here!"
                />
              </div>
              <div className="if">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  id="email"
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
              ></textarea>
            </div>
            <div className="actions">
              <button className="btn btn-main">SUBMIT</button>
            </div>
          </form>
        </div>
      </IntersectBackground>
    </main>
  );
}
