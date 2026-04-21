import "./globals.css";

export const metadata = {
  title: "Auth System",
  description: "Next.js MongoDB Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
