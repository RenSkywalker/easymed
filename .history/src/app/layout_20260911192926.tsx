import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: {
    default: "EasyMed Perícias | Suporte especializado para peritos",
    template: "%s | EasyMed Perícias",
  },

  description:
    "A EasyMed Perícias oferece suporte especializado para peritos, com serviços de cadastro em varas, pré-laudos, esclarecimentos e gestão de agenda.",

  keywords: [
    "EasyMed Perícias",
    "perícias",
    "suporte para peritos",
    "serviços para peritos",
    "cadastro em varas",
    "pré-laudos",
    "gestão de agenda para peritos",
  ],

  applicationName: "EasyMed Perícias",

  authors: [
    {
      name: "EasyMed Perícias",
    },
  ],

  creator: "EasyMed Perícias",
  publisher: "EasyMed Perícias",

  metadataBase: siteUrl ? new URL(siteUrl) : undefined,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "EasyMed Perícias",
    title: "EasyMed Perícias | Suporte especializado para peritos",
    description:
      "Suporte especializado para peritos, da burocracia ao essencial.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "EasyMed Perícias",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "EasyMed Perícias | Suporte especializado para peritos",
    description:
      "Suporte especializado para peritos, da burocracia ao essencial.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/logo.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "#organization",
  name: "EasyMed Perícias",
  alternateName: "EasyMed",
  description:
    "Empresa especializada em suporte para profissionais que atuam com perícias.",
  logo: {
    "@type": "ImageObject",
    url: "/logo.png",
  },
  knowsAbout: [
    "Perícias",
    "Suporte para peritos",
    "Cadastro em varas",
    "Pré-laudos",
    "Esclarecimentos",
    "Gestão de agenda",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "#website",
  name: "EasyMed Perícias",
  description:
    "Suporte especializado para profissionais que atuam com perícias.",
  publisher: {
    "@id": "#organization",
  },
  inLanguage: "pt-BR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}