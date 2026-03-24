import { getComingSoonPage, urlFor } from "@/lib/sanity";
import { ComingSoonClient } from "./coming-soon-client";

// Revalidate every 60 seconds so Sanity changes show up quickly
export const revalidate = 60;

// Fallback data when Sanity isn't connected yet
const defaults = {
  title: "Pelham Ružić",
  tagline: "Architectural & Interior Design · Creative Consulting",
  comingSoonText: "Coming Soon",
  email: "info@pelhamruzic.com",
  companyName: "Pelham Ružić Ltd",
  location: "London",
  backgroundImage: null,
};

export default async function Home() {
  let data = defaults;

  try {
    const sanityData = await getComingSoonPage();
    if (sanityData) {
      data = { ...defaults, ...sanityData };
    }
  } catch {
    // Sanity not configured yet — use defaults
  }

  const bgImageUrl = data.backgroundImage
    ? urlFor(data.backgroundImage).width(1920).quality(85).url()
    : "/ruffles-image.png";

  return <ComingSoonClient data={data} bgImageUrl={bgImageUrl} />;
}
