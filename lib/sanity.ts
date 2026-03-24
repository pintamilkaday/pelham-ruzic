import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Fetch the coming soon page data
export async function getComingSoonPage() {
  return client.fetch(`
    *[_type == "comingSoon"][0] {
      title,
      tagline,
      comingSoonText,
      email,
      backgroundImage,
      companyName,
      location
    }
  `);
}
