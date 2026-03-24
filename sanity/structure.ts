import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Coming Soon Page")
        .id("comingSoonSingleton")
        .child(
          S.document()
            .schemaType("comingSoon")
            .documentId("comingSoonPage")
            .title("Coming Soon Page"),
        ),
    ]);
