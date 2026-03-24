"use client";

interface ComingSoonData {
  title: string;
  tagline: string;
  comingSoonText: string;
  email: string;
  companyName: string;
  location: string;
}

interface Props {
  data: ComingSoonData;
  bgImageUrl: string;
}

export function ComingSoonClient({ data, bgImageUrl }: Props) {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      />

      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/35 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[600px] px-6">
        {/* Decorative line */}
        <div
          className="w-10 h-px mx-auto mb-12 animate-fade-up"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        />

        {/* Title */}
        <h1
          className="animate-fade-up mb-10"
          style={{
            fontFamily: "var(--font-title)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            lineHeight: 1.2,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            animationDelay: "0.4s",
            animationFillMode: "both",
          }}
        >
          {data.title}
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-up mb-16"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            fontWeight: 300,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.9,
            animationDelay: "0.7s",
            animationFillMode: "both",
          }}
        >
          {data.tagline}
        </p>

        {/* Coming Soon */}
        <p
          className="animate-fade-up inline-block mb-12"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.6rem",
            fontWeight: 400,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
            padding: "0.8rem 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.25)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
            animationDelay: "1s",
            animationFillMode: "both",
          }}
        >
          {data.comingSoonText}
        </p>

        {/* Email */}
        <div
          className="animate-fade-up"
          style={{ animationDelay: "1.3s", animationFillMode: "both" }}
        >
          <a
            href={`mailto:${data.email}`}
            className="group relative inline-block transition-colors duration-300 hover:!text-white"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.7)",
              letterSpacing: "0.05em",
              textDecoration: "none",
            }}
          >
            {data.email}
            <span
              className="absolute bottom-[-3px] left-0 w-full h-px group-hover:bg-white/70 transition-colors duration-300"
              style={{ background: "rgba(255, 255, 255, 0.3)" }}
            />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="fixed bottom-0 left-0 right-0 flex justify-between px-10 py-6 animate-fade-up z-10 max-sm:flex-col max-sm:items-center max-sm:gap-1 max-sm:px-6"
        style={{ animationDelay: "1.6s", animationFillMode: "both" }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          &copy; {new Date().getFullYear()} {data.companyName}. All rights
          reserved.
        </span>
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          {data.location}
        </span>
      </footer>
    </main>
  );
}
