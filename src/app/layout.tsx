import type { Metadata } from "next";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao",
  description:
    "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
  keywords: [
    "Thắp Sáng",
    "JCI Danang",
    "từ thiện",
    "điện mặt trời",
    "vùng cao",
    "Đà Nẵng",
    "năng lượng xanh",
    "show từ thiện",
    "On The Radio",
    "Phòng Trà",
  ].join(", "),
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
    title: "Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao",
    description:
      "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
    url: "https://thapsang.site",
    siteName: "Thắp Sáng - JCI Danang",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Thắp Sáng - JCI Danang | Mang ánh sáng đến vùng cao",
        type: "image/png",
      },
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Thắp Sáng - JCI Danang",
        type: "image/png",
      },
    ],
    locale: "vi_VN",
    type: "website",
    emails: ["duanthapsang@gmail.com"],
    phoneNumbers: ["+84972261739"],
    countryName: "Vietnam",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao",
    description:
      "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
    images: [
      {
        url: "/images/banner.png",
        alt: "Thắp Sáng - JCI Danang | Mang ánh sáng đến vùng cao",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@thapsang_jci",
    site: "@thapsang_jci",
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
  category: "charity",
  classification: "Non-profit Organization",
  other: {
    // Facebook specific
    "fb:app_id": "your-facebook-app-id",
    "fb:admins": "your-facebook-admin-id",
    "article:author": "https://www.facebook.com/duanthapsang",
    "article:publisher": "https://www.facebook.com/duanthapsang",
    "article:section": "Charity",
    "article:tag":
      "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
    "fb:page_id": "your-facebook-page-id",

    // Zalo specific meta tags
    "zalo:app_id": "your-zalo-app-id",
    "zalo:image": "/images/banner.png",
    "zalo:title": "Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao",
    "zalo:description":
      "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
    "zalo:url": "https://thapsang.site",
    "zalo:type": "website",

    // LinkedIn specific
    "linkedin:owner": "your-linkedin-company-id",
    "linkedin:author": "JCI Danang",
    "linkedin:title": "Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao",
    "linkedin:description":
      "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
    "linkedin:image": "/images/banner.png",

    // WhatsApp specific
    "whatsapp:title": "Thắp Sáng - JCI Danang",
    "whatsapp:description":
      "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
    "whatsapp:image": "/images/banner.png",
    "whatsapp:url": "https://thapsang.site",

    // Discord specific
    "discord:title": "Thắp Sáng - JCI Danang",
    "discord:description": "Dự án từ thiện mang ánh sáng đến vùng cao 🌟",
    "discord:image": "/images/banner.png",
    "discord:color": "#FDC619",

    // Slack specific
    "slack:card": "summary_large_image",
    "slack:title": "Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao",
    "slack:description": "Dự án từ thiện Thắp Sáng - JCI Đà Nẵng 🌟",
    "slack:image": "/images/banner.png",

    // Instagram specific
    "instagram:hashtags":
      "#ThapSang #JCIDanang #TuThien #VungCao #DienMatTroi #NangLuongXanh #ShowTuThien #DaNang",
    "instagram:caption":
      "Thắp Sáng - JCI Danang | Mang ánh sáng đến vùng cao 🌟 #ThapSang #TuThien",
    "instagram:image": "/images/banner.png",
    "instagram:title": "Thắp Sáng - JCI Danang",

    // Geographic data
    "geo.region": "VN-DN",
    "geo.placename": "Danang, Vietnam",
    "geo.position": "16.0471;108.2068",
    ICBM: "16.0471, 108.2068",

    // Business contact data
    "business:contact_data:locality": "Danang",
    "business:contact_data:region": "Danang",
    "business:contact_data:country_name": "Vietnam",
    "business:contact_data:phone_number": "+84972261739",
    "business:contact_data:email": "duanthapsang@gmail.com",
    "business:contact_data:website": "https://thapsang.site",

    // Mobile app links
    "al:android:app_name": "Thắp Sáng",
    "al:android:package": "com.thapsang.app",
    "al:android:url": "thapsang://",
    "al:ios:app_name": "Thắp Sáng",
    "al:ios:app_store_id": "your-ios-app-id",
    "al:ios:url": "thapsang://",
    "al:web:url": "https://thapsang.site",

    // Additional social media
    "pinterest:description":
      "Dự án từ thiện Thắp Sáng - JCI Đà Nẵng mang ánh sáng đến vùng cao 🌟",
    "telegram:channel": "@thapsang_jci",
    "telegram:username": "@thapsang_jci",

    // Rich snippets
    "application-name": "Thắp Sáng - JCI Danang",
    "msapplication-TileColor": "#FDC619",
    "msapplication-TileImage": "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='vi' className='scroll-smooth'>
      <head>
        {/* Primary Meta Tags */}
        <meta
          name='title'
          content='Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao'
        />
        <meta
          name='description'
          content='Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng. 🌟'
        />
        <meta
          name='keywords'
          content='Thắp Sáng, JCI Danang, từ thiện, điện mặt trời, vùng cao, Đà Nẵng, năng lượng xanh, show từ thiện'
        />
        <meta name='author' content='JCI Danang' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='Vietnamese' />
        <meta name='revisit-after' content='7 days' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://thapsang.site/' />
        <meta
          property='og:title'
          content='Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao'
        />
        <meta
          property='og:description'
          content='Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng. 🌟'
        />
        <meta
          property='og:image'
          content='https://thapsang.site/images/banner.png'
        />
        <meta
          property='og:image:secure_url'
          content='https://thapsang.site/images/banner.png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          property='og:image:alt'
          content='Thắp Sáng - JCI Danang | Mang ánh sáng đến vùng cao'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:site_name' content='Thắp Sáng - JCI Danang' />
        <meta property='og:locale' content='vi_VN' />
        <meta property='og:locale:alternate' content='en_US' />

        {/* Facebook Specific */}
        <meta property='fb:app_id' content='your-facebook-app-id' />
        <meta property='fb:admins' content='your-facebook-admin-id' />
        <meta property='fb:page_id' content='your-facebook-page-id' />
        <meta
          property='article:author'
          content='https://www.facebook.com/duanthapsang'
        />
        <meta
          property='article:publisher'
          content='https://www.facebook.com/duanthapsang'
        />
        <meta property='article:section' content='Charity' />
        <meta property='article:tag' content='Thắp Sáng' />
        <meta property='article:tag' content='JCI Danang' />
        <meta property='article:tag' content='Từ thiện' />
        <meta property='article:tag' content='Điện mặt trời' />
        <meta property='article:tag' content='Vùng cao' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://thapsang.site/' />
        <meta
          property='twitter:title'
          content='Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao'
        />
        <meta
          property='twitter:description'
          content='Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng. 🌟'
        />
        <meta
          property='twitter:image'
          content='https://thapsang.site/images/banner.png'
        />
        <meta
          property='twitter:image:alt'
          content='Thắp Sáng - JCI Danang | Mang ánh sáng đến vùng cao'
        />
        <meta property='twitter:site' content='@thapsang_jci' />
        <meta property='twitter:creator' content='@thapsang_jci' />

        {/* LinkedIn */}
        <meta property='linkedin:owner' content='your-linkedin-company-id' />
        <meta
          name='linkedin:title'
          content='Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao'
        />
        <meta
          name='linkedin:description'
          content='Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng. 🌟'
        />
        <meta
          name='linkedin:image'
          content='https://thapsang.site/images/banner.png'
        />
        <meta name='linkedin:author' content='JCI Danang' />

        {/* Zalo */}
        <meta property='zalo:app_id' content='your-zalo-app-id' />
        <meta property='zalo:type' content='website' />
        <meta
          property='zalo:title'
          content='Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao'
        />
        <meta
          property='zalo:description'
          content='Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng. 🌟'
        />
        <meta
          property='zalo:image'
          content='https://thapsang.site/images/banner.png'
        />
        <meta property='zalo:url' content='https://thapsang.site' />

        {/* WhatsApp */}
        <meta name='whatsapp-title' content='Thắp Sáng - JCI Danang' />
        <meta
          name='whatsapp-description'
          content='Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng. 🌟'
        />
        <meta
          name='whatsapp-image'
          content='https://thapsang.site/images/banner.png'
        />
        <meta name='whatsapp-url' content='https://thapsang.site' />

        {/* Discord */}
        <meta name='discord-title' content='Thắp Sáng - JCI Danang' />
        <meta
          name='discord-description'
          content='Dự án từ thiện mang ánh sáng đến vùng cao 🌟'
        />
        <meta
          name='discord-image'
          content='https://thapsang.site/images/banner.png'
        />
        <meta name='discord-color' content='#FDC619' />
        <meta name='theme-color' content='#FDC619' />

        {/* Slack */}
        <meta name='slack-app-id' content='your-slack-app-id' />
        <meta name='slack:card' content='summary_large_image' />
        <meta
          name='slack:title'
          content='Thắp Sáng - JCI Danang | Mang Ánh Sáng Đến Vùng Cao'
        />
        <meta
          name='slack:description'
          content='Dự án từ thiện Thắp Sáng - JCI Đà Nẵng 🌟'
        />
        <meta
          name='slack:image'
          content='https://thapsang.site/images/banner.png'
        />

        {/* Instagram */}
        <meta name='instagram:title' content='Thắp Sáng - JCI Danang' />
        <meta
          name='instagram:description'
          content='Mang ánh sáng đến vùng cao 🌟'
        />
        <meta
          name='instagram:image'
          content='https://thapsang.site/images/banner.png'
        />
        <meta
          name='instagram:hashtags'
          content='#ThapSang #JCIDanang #TuThien #VungCao #DienMatTroi #NangLuongXanh #ShowTuThien #DaNang'
        />
        <meta
          name='instagram:caption'
          content='Thắp Sáng - JCI Danang | Mang ánh sáng đến vùng cao 🌟 #ThapSang #TuThien'
        />

        {/* Telegram */}
        <meta name='telegram:channel' content='@thapsang_jci' />
        <meta name='telegram:username' content='@thapsang_jci' />
        <meta name='telegram:title' content='Thắp Sáng - JCI Danang' />
        <meta
          name='telegram:description'
          content='Dự án từ thiện mang ánh sáng đến vùng cao 🌟'
        />
        <meta
          name='telegram:image'
          content='https://thapsang.site/images/banner.png'
        />

        {/* Pinterest */}
        <meta name='pinterest:title' content='Thắp Sáng - JCI Danang' />
        <meta
          name='pinterest:description'
          content='Dự án từ thiện Thắp Sáng - JCI Đà Nẵng mang ánh sáng đến vùng cao 🌟'
        />
        <meta
          name='pinterest:image'
          content='https://thapsang.site/images/banner.png'
        />

        {/* Mobile App Links */}
        <meta property='al:android:app_name' content='Thắp Sáng' />
        <meta property='al:android:package' content='com.thapsang.app' />
        <meta property='al:android:url' content='thapsang://' />
        <meta property='al:ios:app_name' content='Thắp Sáng' />
        <meta property='al:ios:url' content='thapsang://' />
        <meta property='al:web:url' content='https://thapsang.site' />

        {/* Structured Data for Charity Organization */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: "Thắp Sáng - JCI Danang",
              alternateName: "Dự án Thắp Sáng",
              description:
                "Thắp Sáng là dự án trực thuộc JCI Danang, hướng đến cải thiện chất lượng cuộc sống cho người dân vùng khó khăn, thiếu điều kiện ánh sáng.",
              url: "https://thapsang.site",
              logo: "https://thapsang.site/images/logo.png",
              image: "https://thapsang.site/images/banner.png",
              telephone: "+84972261739",
              email: "duanthapsang@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Danang",
                addressRegion: "Danang",
                addressCountry: "VN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "16.0471",
                longitude: "108.2068",
              },
              foundingDate: "2024",
              slogan: "Mang ánh sáng đến vùng cao",
              knowsAbout: [
                "Solar Energy",
                "Charity",
                "Community Development",
                "Renewable Energy",
              ],
              areaServed: {
                "@type": "Country",
                name: "Vietnam",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "JCI Danang",
                url: "https://www.facebook.com/duanthapsang",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Charity Events & Activities",
                itemListElement: [
                  {
                    "@type": "Event",
                    name: "Show từ thiện On The Radio",
                    description:
                      "Đêm nhạc từ thiện tại On The Radio với các nghệ sĩ indie địa phương",
                    location: {
                      "@type": "Place",
                      name: "On The Radio",
                      address: "Danang, Vietnam",
                    },
                  },
                  {
                    "@type": "Event",
                    name: "Show từ thiện Phòng Trà Hương Sen",
                    description: "Buổi tối thơ ca và trà đạo từ thiện",
                    location: {
                      "@type": "Place",
                      name: "Phòng Trà Hương Sen",
                      address: "Danang, Vietnam",
                    },
                  },
                  {
                    "@type": "Event",
                    name: "Acoustic Night The Coffee Bean",
                    description: "Acoustic night với các ca sĩ trẻ Đà Nẵng",
                    location: {
                      "@type": "Place",
                      name: "The Coffee Bean",
                      address: "Danang, Vietnam",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/duanthapsang",
                "https://www.instagram.com/thapsang_jci",
                "https://zalo.me/thapsang",
                "https://t.me/thapsang_jci",
                "https://www.linkedin.com/company/thapsang-jci",
                "https://discord.gg/thapsang",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84972261739",
                contactType: "Customer Service",
                email: "duanthapsang@gmail.com",
                availableLanguage: ["Vietnamese", "English"],
              },
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name='color-scheme' content='light' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta
          name='apple-mobile-web-app-title'
          content='Thắp Sáng - JCI Danang'
        />
        <meta name='application-name' content='Thắp Sáng - JCI Danang' />
        <meta name='msapplication-TileColor' content='#FDC619' />
        <meta name='msapplication-TileImage' content='/images/logo.png' />

        {/* Preconnect to external domains for performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://images.unsplash.com' />
        <link rel='preconnect' href='https://www.facebook.com' />
        <link rel='preconnect' href='https://zalo.me' />
        <link rel='preconnect' href='https://www.linkedin.com' />
        <link rel='preconnect' href='https://discord.com' />
        <link rel='preconnect' href='https://api.whatsapp.com' />
        <link rel='preconnect' href='https://t.me' />

        {/* Canonical and alternate URLs */}
        <link rel='canonical' href='https://thapsang.site/' />
        <link rel='alternate' hrefLang='vi' href='https://thapsang.site/' />
        <link rel='alternate' hrefLang='en' href='https://thapsang.site/en/' />

        {/* Favicon and app icons */}
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
