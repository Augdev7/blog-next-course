import { mainNavConfig } from '@/config';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';

import '@/styles/globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-gray-100">
        <Header />

        <Layout>
          <div className="pt-20">{children}</div>
        </Layout>

        <Footer items={mainNavConfig.mainNav} />
      </body>
    </html>
  );
}
