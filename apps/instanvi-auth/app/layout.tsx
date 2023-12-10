import './global.css';
import 'tailwindcss/tailwind.css';

export const metadata = {
  title: 'Welcome to instanvi-auth',
  description: 'Generated by create-nx-workspace',
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