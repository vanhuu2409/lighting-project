import type { Metadata } from "next";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "Thắp Sáng - JCI Danang",
  description:
    "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
  keywords: ["Thắp Sáng - JCI Danang "].join(", "),
  authors: [{ name: "JCI Danang" }],
  creator: "JCI Danang",
  publisher: "JCI Danang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://thapsang.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thắp Sáng - JCI Danang",
    description:
      "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
    url: "https://thapsang.site",
    siteName: "Thắp Sáng - JCI Danang",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Thắp Sáng - JCI Danang",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thắp Sáng - JCI Danang",
    description:
      "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
    images: ["/images/banner.png"],
    creator: "@halongbaytours",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "travel",
  classification: "Travel & Tourism",
  other: {
    "geo.region": "VN-DN",
    "geo.placename": "Danang, Vietnam",
    "geo.position": "21.0285;105.8542",
    ICBM: "21.0285, 105.8542",
    "business:contact_data:locality": "Danang",
    "business:contact_data:region": "Danang",
    "business:contact_data:country_name": "Vietnam",
    "business:contact_data:phone_number": "+84 24 38364212",
    "business:contact_data:email": "duanthapsang@gmail.com",
    "business:contact_data:website": "https://thapsang.site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        {/* Structured Data for Organization */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Thắp Sáng - JCI Danang",
              description:
                "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
              url: "https://thapsang.site",
              logo: "https://thapsang.site/logo.png",
              image: "https://thapsang.site/images/banner.png",
              telephone: "+84 24 38364212",
              email: "duanthapsang@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Nguyen Van Linh Street",
                addressLocality: "Danang",
                addressRegion: "Danang",
                addressCountry: "Vietnam",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "21.0285",
                longitude: "105.8542",
              },
              foundingDate: "2002",
              slogan:
                "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
              areaServed: {
                "@type": "Country",
                name: "Vietnam",
              },
              serviceType: "Travel Agency",
              priceRange: "$250-$800",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Thắp Sáng - JCI Danang",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Thắp Sáng - JCI Danang",
                      description:
                        "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/duanthapsang",
                "https://www.instagram.com/duanthapsang",
              ],
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name='theme-color' content='#2563eb' />
        <meta name='color-scheme' content='light' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta
          name='apple-mobile-web-app-title'
          content='Thắp Sáng - JCI Danang '
        />

        {/* Preconnect to external domains */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
