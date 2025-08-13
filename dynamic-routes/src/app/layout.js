import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href={{ pathname: "/todos" }}>Todos</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
