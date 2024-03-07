import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nippon Air",
  description:
    "Fly with us! Travel around Japan and explore the country. Find your perfect location, rest in our hotels / homes / ryoukans and find your inner peace in the country of the rising sun.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
