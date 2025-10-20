import { GlobalConfig } from "payload";

const FeaturedGallery: GlobalConfig = {
  slug: "featured-gallery",
  fields: [
    {
      name: "character-sheets",
      type: "upload",
      relationTo: "media",
      label: "Character Sheets (Right 16:10)",
      hasMany: true,
    },
    {
      name: "render",
      label: "Render (Left 2:1)",
      type: "upload",
      relationTo: "media",
      hasMany: true,
    },
  ],
};

export default FeaturedGallery;
