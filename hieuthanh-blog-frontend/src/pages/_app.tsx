import "@/styles/globals.css"
import "@/styles/reset.css"
import { ChakraProvider } from "@chakra-ui/react"
import type { ReactElement, ReactNode } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <ChakraProvider>
            {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
    )
}
