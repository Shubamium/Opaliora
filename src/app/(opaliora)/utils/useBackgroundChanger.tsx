import { useEffect, useRef, useState } from "react";

export default function useBackgroundChanger() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeBG, setActiveBG] = useState("/b/bg1.png");
  useEffect(() => {
    const page = pageRef.current;
    if (page) {
      // page.style.setProperty("--bg", "url('/b/bg1.png')");
      const intersection = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveBG(entry.target.getAttribute("data-bg") || "");
              console.log(
                "background changed to:",
                entry.target.getAttribute("data-bg")
              );
            }
          });
        },
        {
          threshold: [0.5],
        }
      );
      const allIntersect = page.getElementsByClassName("intersect-bg");
      for (let i = 0; i < allIntersect.length; i++) {
        intersection.observe(allIntersect[i]);
        console.log("intersect observed for:", allIntersect[i]);
      }
    }
  }, []);

  return {
    scope: pageRef,
    activeBG,
  };
}
