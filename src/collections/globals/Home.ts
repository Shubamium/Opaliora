import { GlobalConfig } from "payload";
const Home: GlobalConfig = {
  slug: "home",
  fields: [
    {
      name: "intro",
      label: "Intro Text",
      type: "textarea",
    },
    {
      name: "bio",
      type: "textarea",
    },
    {
      name: "intro-vid",
      label: "Intro Video (Youtube Video ID)",
      admin: {
        description:
          "The ID of the video you want to display, the part after https://www.youtube.com/watch?v= {video id here}",
      },
      type: "text",
    },
  ],
};

export default Home;
