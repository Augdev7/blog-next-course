import { Header } from '@/components/Header';
import '@/styles/globals.css';
import { Layout } from '@/components/Layout';

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
      </body>
    </html>
  );
}
