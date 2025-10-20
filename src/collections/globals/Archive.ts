import { GlobalConfig } from "payload";

const Archive: GlobalConfig = {
  slug: "archive",
  fields: [
    {
      name: "archive-description",
      type: "textarea",
    },
    {
      name: "slumber-text",
      type: "textarea",
    },
    {
      name: "fragments",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "art",
          type: "upload",
          relationTo: "media",
        },
      ],
    },

    {
      name: "crystal-chamber-art",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "gathering-radiance",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "richText",
        },
      ],
    },
    {
      name: "future-lore",
      label: "Future Lore Teaser Video (Youtube Video ID)",
      admin: {
        description:
          "The ID of the video you want to display, the part after https://www.youtube.com/watch?v= {video id here}",
      },
      type: "text",
    },
    {
      name: "unlocks",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "goal",
          type: "text",
        },
      ],
    },
    {
      name: "vaelorans-description",
      type: "textarea",
    },
    {
      name: "jasper-descriptions",
      type: "richText",
    },
    {
      name: "jasper-message",
      type: "text",
    },
  ],
};

export default Archive;
