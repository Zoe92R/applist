import type { Metadata } from "next";
import { geistSans, manrope } from "@/app/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Applyst",
  description: "Track every job application to its next step.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
