import React from "react";
import "../styles/global.css";

async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}

export default RootLayout;
