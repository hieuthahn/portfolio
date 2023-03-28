import Head from "next/head"
import React from "react"
import { Inter } from "next/font/google"
import Main from "@/layouts/Main"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Hieu Thanh | Developer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{ minHeight: "1000px" }}>content</div>
        </>
    )
}

Home.getLayout = (page: React.ReactNode) => <Main>{page}</Main>
