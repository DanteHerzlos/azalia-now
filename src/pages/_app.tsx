import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import localFont from "@next/font/local"

const roboto = localFont({
  src: [
    {
      path: "../../public/fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "./Roboto-BoldItalic.woff2",
    //   weight: "700",
    //   style: "italic",
    // },
  ],
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
