import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap"
                ></link>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
