import { CollectionConfig, GlobalConfig } from "payload";

const Merch: CollectionConfig = {
  slug: "merch",
  labels: {
    plural: "Merch Category List",
  },
  orderable: true,
  fields: [
    {
      name: "category-name",
      type: "text",
    },
    {
      name: "product-list",
      type: "relationship",
      relationTo: "product",
      hasMany: true,
    },
  ],
};

export default Merch;
