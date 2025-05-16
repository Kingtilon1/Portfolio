import "./globals.css";

export const metadata = {
  title: "Tilon's Portfolio",
  description: "A look at my experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
