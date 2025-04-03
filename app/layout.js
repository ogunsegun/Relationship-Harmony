import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Provider from "./components/Provider";

export const metadata = {
  title: "Relationship Harmony - Discover Your Perfect Match",
  description:
    "Take our comprehensive relationship assessment to understand your personality dynamics and receive tailored advice for a stronger partnership.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
