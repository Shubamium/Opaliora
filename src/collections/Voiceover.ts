import { CollectionConfig } from "payload";

const Voiceover: CollectionConfig = {
  slug: "voiceover",
  orderable: true,
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "voiceover-audio",
      type: "upload",
      admin: {
        description: "Audio  (MP3/WAV)",
      },
      required: true,
      relationTo: "media",
    },
  ],
};
export default Voiceover;
