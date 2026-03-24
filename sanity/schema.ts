// Sanity schema for the Coming Soon page
// Import this when setting up your Sanity Studio

export const comingSoon = {
  name: "comingSoon",
  title: "Coming Soon Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The main logo text (e.g. PELHAM RUŽIĆ)",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "The line below the title",
    },
    {
      name: "comingSoonText",
      title: "Coming Soon Text",
      type: "string",
      description: "The 'Coming Soon' label",
    },
    {
      name: "email",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "companyName",
      title: "Company Name (Footer)",
      type: "string",
    },
    {
      name: "location",
      title: "Location (Footer)",
      type: "string",
    },
  ],
};
