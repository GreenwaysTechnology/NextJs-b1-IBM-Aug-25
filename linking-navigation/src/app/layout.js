import NavBar from "@/app/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Header</h1>
           <NavBar/>
        </header>
        {/* Body : page */}
        {children}
        <footer>
          <p>This is footer</p>
        </footer>
      </body>
    </html>
  );
}
