import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// This file is made to connect our project with the backend.

export const client = sanityClient({
  projectId: "mx5wrwjp",
  dataset: "production",
  apiVersion: "2023-03-07",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
