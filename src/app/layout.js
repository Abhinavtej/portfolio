import "./globals.css";

export const metadata = {
  title: "Portfolio | Abhinavtej Reddy",
  description:
    "The founder portfolio of Abhinavtej Reddy – showcasing the journey behind Unifesto, projects, skills, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&family=Syne:wght@400..800&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
