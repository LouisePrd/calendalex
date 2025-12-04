import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "calendalex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/etq7pee.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
