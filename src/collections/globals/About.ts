import { GlobalConfig } from "payload";
const About: GlobalConfig = {
  slug: "about",
  fields: [
    {
      name: "origin-a",
      label: "Origin 1 (Left)",
      type: "richText",
    },
    {
      name: "origin-b",
      label: "Origin 2 (Right)",
      type: "richText",
    },
    {
      name: "lore-points",
      label: "Lore Lists",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "art",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "ppdesc",
      label: "Power And Personality Description",
      type: "richText",
    },
    {
      name: "powerlist",
      label: "Power And Personality List",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "icon",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
    {
      name: "likes",
      type: "text",
      hasMany: true,
    },
    {
      name: "dislikes",
      type: "text",
      hasMany: true,
    },
    {
      name: "facts",
      label: " Fun Fact",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
      ],
    },
  ],
};

export default About;
