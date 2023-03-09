import * as React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";

import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
