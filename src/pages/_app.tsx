import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "../store";

import "../styles/global.css";
import { Modal } from "../components/common/Modal";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Provider store={setupStore()}>
                <Component {...pageProps} />
                <Modal />
            </Provider>
        </>
    );
}
