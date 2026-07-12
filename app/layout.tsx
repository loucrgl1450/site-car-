import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SITE_URL = 'https://zolingrivault-lab.github.io/site-car-/';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Speed & Clean | Detailing Automobile Premium à Mouilleron-le-Captif',
  description:
    "Speed & Clean, préparateur esthétique automobile en Vendée : nettoyage intérieur/extérieur, déstickage, lustrage, rénovation d'optiques et detailing premium. Particuliers & professionnels.",
  keywords: [
    'detailing automobile',
    'nettoyage voiture premium',
    'lustrage',
    'rénovation optiques',
    'esthétique automobile',
    'Mouilleron-le-Captif',
    'Vendée',
  ],
  openGraph: {
    title: 'Speed & Clean | Detailing Automobile Premium',
    description:
      "Redonnez à votre véhicule son éclat d'origine. Préparateur esthétique automobile, particulier & professionnel.",
    url: SITE_URL,
    siteName: 'Speed & Clean',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0B0B',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoWash',
  name: 'Speed & Clean',
  description:
    "Detailing automobile premium : nettoyage intérieur/extérieur, déstickage, lustrage, rénovation d'optiques.",
  url: SITE_URL,
  telephone: '+33662291553',
  email: 'boriscorniere9@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '72 Route de Beaupuy',
    postalCode: '85000',
    addressLocality: 'Mouilleron-le-Captif',
    addressCountry: 'FR',
  },
  priceRange: '€€',
  openingHours: 'Mo-Sa 09:00-19:00',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
