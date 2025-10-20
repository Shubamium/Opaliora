// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import Product from "./collections/Product";
import Home from "./collections/globals/Home";
import About from "./collections/globals/About";
import Voiceover from "./collections/Voiceover";
import Merch from "./collections/Merch";
import { s3Storage } from "@payloadcms/storage-s3";
import FeaturedGallery from "./collections/globals/FeaturedGallery";
import Archive from "./collections/globals/Archive";
import Gallery from "./collections/Gallery";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Gallery, Voiceover, Product, Merch, Users, Media],
  globals: [Home, About, Archive, FeaturedGallery],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
    s3Storage({
      bucket: "opaliora",
      collections: {
        media: {
          disablePayloadAccessControl: true,
        },
      },
      clientUploads: true,
      config: {
        endpoint: "https://minio-api.venmi.art",
        forcePathStyle: true,
        region: "us-east-1",
        credentials: {
          accessKeyId: process.env.MINIO_K ?? "",
          secretAccessKey: process.env.MINIO_S ?? "",
        },
      },
    }),
  ],
});
