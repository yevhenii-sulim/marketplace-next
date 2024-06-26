import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"

// const jost = Jost({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create marketplace application",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="uk">
            <body className={nunito.className}>{children}</body>
        </html>
    )
}
