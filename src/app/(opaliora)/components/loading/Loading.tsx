"use client";
import React, { useEffect, useState } from "react";

type Props = {};
import "./loading.scss";
export default function Loading({}: Props) {
  const [finishLoading, setFinishLoading] = useState(false);
  const [enter, setEnter] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(true);
    }, 3500);
  }, []);
  return (
    <div
      id="loading"
      className={`${enter ? "enter" : ""} ${!finishLoading ? "loading" : "done"} `}
    >
      {!finishLoading ? (
        <div className="loading-bar">
          <p>Loading</p>
          <div className="bar"></div>
        </div>
      ) : (
        <div id="gate">
          <button
            className="btn btn-enter"
            onClick={() => {
              setEnter(true);
            }}
          >
            <img src="/p/btn-enter.png" alt="" />
          </button>
        </div>
      )}
    </div>
  );
}
