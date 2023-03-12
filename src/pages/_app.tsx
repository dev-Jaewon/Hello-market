import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "../store";

import "../styles/global.css";
import { Modal } from "../components/common/Modal";
import { Header } from "../components/Header";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Provider store={setupStore()}>
                <Header />
                <Component {...pageProps} />
                <Modal />
            </Provider>
        </>
    );
}
