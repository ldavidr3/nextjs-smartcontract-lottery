import Head from "next/head"
import Image from "next/image"

import styles from "@/styles/Home.module.css"

//import ManualHeader from "./components/ManualHeader"
import Header from "./components/Header"

export default function Home() {
    return (
        <>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Smart contract lottery by 212ldavidr" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h5> Hi this is the title of this test page </h5>
            <br />
            {/* <ManualHeader />*/}
            <Header />
        </>
    )
}
