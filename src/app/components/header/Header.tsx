"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, stagger, useAnimate } from "framer-motion";
type Props = {};

import "./header.scss";

const artList = [
  "/g/art1.png",
  "/g/art2.png",
  "/g/art3.png",
  "/g/art4.png",
  "/g/art5.png",
  "/g/art6.png",
  "/g/art7.png",
];
export default function Header({}: Props) {
  const [fs, setFS] = useState(false);
  const [aa, setActiveArt] = useState(0);

  const [scope, animate] = useAnimate();
  useEffect(() => {
    async function animateIn() {
      // await animate(
      //   ".nav .btn",
      //   {
      //     x: 1500,
      //   },
      //   {
      //     duration: 0,
      //   }
      // );
      animate(
        ".nav .btn",
        {
          x: 0,
        },
        {
          delay: stagger(0.15),
          duration: 0.5,
          ease: "easeInOut",
        }
      );
    }
    async function animateOut() {
      animate(
        ".nav .btn",
        {
          x: 500,
        },
        {
          delay: stagger(0.1),
          duration: 0.1,
          ease: "easeInOut",
        }
      );
    }
    if (fs) {
      animateIn();
    } else {
      animateOut();
    }
  }, [fs]);
  return (
    <>
      <header id="header">
        <Link href="/" className="btn logo">
          <img src="/p/logo_head.png" alt="" className="" />
        </Link>
        <button
          className="btn btn-menu"
          onClick={() => {
            setFS(true);
          }}
        >
          <img src="/p/menu.png" alt="" className="" />
        </button>
      </header>
      <header
        id="fs-head"
        className={` ${fs ? "visible" : "closed"}`}
        onClick={() => setFS(false)}
        ref={scope}
      >
        <div className="content">
          <button className="btn closebtn">
            <p>༻close༺</p>
          </button>
          <img src="/d/magic_circle1.png" alt="" className="circle" />
          <div className="nav">
            <Link
              href={"/"}
              className="btn"
              onPointerOver={() => {
                setActiveArt(0);
              }}
            >
              <span>HOME</span>
              <img src="/d/gem1.png" alt="" className="gem" />
            </Link>
            <Link
              href={"/about"}
              className="btn"
              onPointerOver={() => {
                setActiveArt(4);
              }}
            >
              <span>ABOUT</span>
              <img src="/d/gem2.png" alt="" className="gem" />
            </Link>
            <Link
              href={"/archive"}
              className="btn"
              onPointerOver={() => {
                setActiveArt(6);
              }}
            >
              <span>LORE ARCHIVE</span>
              <img src="/d/gem3.png" alt="" className="gem" />
            </Link>
            <Link
              href={"/gallery"}
              className="btn"
              onPointerOver={() => {
                setActiveArt(3);
              }}
            >
              <span>GALLERY</span>
              <img src="/d/gem4.png" alt="" className="gem" />
            </Link>
            <Link
              href={"/merch"}
              className="btn"
              onPointerOver={() => {
                setActiveArt(2);
              }}
            >
              <span>MERCH</span>
              <img src="/d/gem5.png" alt="" className="gem" />
            </Link>
            <Link
              href={"/contact"}
              className="btn"
              onPointerOver={() => {
                setActiveArt(5);
              }}
            >
              <span>CONTACT</span>
              <img src="/d/gem6.png" alt="" className="gem" />
            </Link>
          </div>
          <div className="art stp">
            <AnimatePresence mode="popLayout">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={artList[aa]}
                transition={{
                  duration: 1,
                }}
                alt=""
                key={"art" + aa}
              />
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  );
}
