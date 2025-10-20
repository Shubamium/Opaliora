import { CollectionConfig } from "payload";

const Product: CollectionConfig = {
  slug: "product",
  admin: {
    useAsTitle: "title",
  },
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
    {
      name: "image",
      type: "upload",
      required: true,
      relationTo: "media",
    },
    {
      name: "price",
      type: "text",
    },
    {
      name: "buy-link",
      type: "text",
    },
  ],
};

export default Product;
