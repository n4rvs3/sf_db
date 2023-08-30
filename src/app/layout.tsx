import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'SF6_DB',
  description: 'SF6の情報まとめサイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
