import { Inter } from "next/font/google";
import "../assets/scss/main.scss";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ekweozor Innocent",
  description:
    "Ekweozor Innocent is a full-stack developer and technical writer passionate about building impactful digital products and seamless user experiences.",
  image: "https://wwww.josephtunde.me/tunde.png",
  twitterHandle: "@codesbycent",
  siteUrl: "https://www.josephtunde.me",
  siteLanguage: "en",
  siteLocale: "en_US",
  authorName: "Ekweozor innocent",
  authorAvatar: "https://wwww.josephtunde.me/tunde.png",
  authorDescription:
    "Ekweozor Innocent is a full-stack developer and technical writer passionate about building impactful digital products and seamless user experiences.",
  defaultTitle: "Ekweozor innocent",
  defaultDescription:
    "Ekweozor Innocent is a full-stack developer and technical writer passionate about building impactful digital products and seamless user experiences.",
  defaultImage: "https://wwww.josephtunde.me/tunde.png",
  defaultTwitterHandle: "@__jot",
  defaultAuthor: "Ekweozor innocent",
  defaultAuthorAvatar: "https://wwww.josephtunde.me/tunde.png",
  defaultAuthorDescription:
    "Ekweozor Innocent is a full-stack developer and technical writer passionate about building impactful digital products and seamless user experiences.",
  socialLinks: {
    twitter: "https://x.com/codesbycent",
    linkedin: "https://www.linkedin.com/in/ekweozor-innocent-026336223/",
    github: "https://github.com/Inno-cent",
    email: "mailto:ekweozorinnocent@gmail.com",
  },
  metadataBase: new URL("https://www.josephtunde.me"),
  icons: {
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
    maskIcon: "/safari-pinned-tab.svg",
    msTileImage: "/mstile-150x150.png",
  },
  keywords: [
    "Ekweozor innocent",
    "Ekweozor innocent Blog",
    "software developer",
    "software engineer",
    "Writer",
    "Ekweozor innocent Projects",
    "software developing",
    "software engineering",
    "Writing",
    "Software developer Portfolio",
    "Software developer Blog",
    "Ekweozor innocent Contact",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    description:
      "Ekweozor Innocent is a full-stack developer and technical writer passionate about building impactful digital products and seamless user experiences.",
    url: "https://www.josephtunde.me",
    site_name: "Joseph Tunde",
    images: [
      {
        url: "https://wwww.josephtunde.me/tunde.png",
        width: 800,
        height: 600,
        alt: "Joseph Tunde",
      },
    ],
  },

  twitter: {
    card: "summary_large_image", // Use this instead of cardType
    site: "@codesbycent",
    creator: "@codesbycent",
    title: "Ekweozor innocent",
    handle: "@codesbycent",
    description:
      "Ekweozor Innocent is a full-stack developer and technical writer passionate about building impactful digital products and seamless user experiences.",
    images: ["https://wwww.josephtunde.me/tunde.png"],
  },

  //robots and canonical urls
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://wwww.josephtunde.me",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
