import { CollectionConfig } from "payload";

const Gallery: CollectionConfig = {
  slug: "gallery",
  orderable: true,
  fields: [
    {
      name: "category-name",
      type: "text",
      required: true,
    },
    {
      name: "media-list",
      type: "upload",
      relationTo: "media",
      hasMany: true,
    },
  ],
};

export default Gallery;
