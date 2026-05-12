import "./globals.css";

export const metadata = {
  title: "DebtDash",
  description: "AI Debt Dashboard",
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
