import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Persholja Web CSS",
  description: "Official site of Sasha Persholja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page-container">
          <Navbar />
          <main>{children}</main>
          <footer>
            <p>© 2025 MKUD Music Arts</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
