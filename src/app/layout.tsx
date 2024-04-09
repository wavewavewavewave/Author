import type {Metadata, Viewport} from "next";
import "./globals.css";
export const viewport: Viewport = {
    initialScale: 1,
    height: 1080,
    width: 1920,
    userScalable: true,
}
export const metadata: Metadata = {
    title: "Author",
    description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        {children}
        </body>
        </html>
    );
}
