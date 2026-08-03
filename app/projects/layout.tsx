import { metadata } from './page';

export const dynamic = 'force-static';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
