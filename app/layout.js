import Navbar from "./compoents/Navbar";
import "./globals.css";

export const metadata = {
  title: "Youtube App",
  description: "Video Sharing App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="light-theme">
        <main id="youtube">
          <div className="youtube-fixed-navbar">
            <Navbar />
          </div>
          <div className="youtube-main-content">{children}</div>
        </main>
      </body>
    </html>
  );
}
