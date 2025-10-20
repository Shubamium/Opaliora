import type { CollectionConfig, ImageUploadFormatOptions } from "payload";

const formatOptions: ImageUploadFormatOptions = {
  format: "webp",
  options: {
    quality: 80,
  },
};
export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "artist",
      type: "text",
    },
    {
      name: "artist-link",
      type: "text",
    },
  ],
  upload: {
    formatOptions: formatOptions,
  },
};
