import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { setupStore } from "../store";

import "../styles/global.css";
import { Modal } from "../components/common/Modal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer/Footer";

if (process.env.NODE_ENV === "development") {
    require("../__mocks__");
}

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Provider store={setupStore()}>
                <Header />
                <Component {...pageProps} />
                <Footer />
                <Modal />
            </Provider>
        </>
    );
}
