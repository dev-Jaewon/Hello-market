import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../store";

import "../styles/global.css";
import { Modal } from "../components/common/Modal";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer/Footer";

if (process.env.NODE_ENV === "development") {
    require("../__mocks__");
}

export default function MyApp({ Component, ...res }: AppProps): JSX.Element {
    const { store, props } = wrapper.useWrappedStore(res);

    return (
        <>
            <Provider store={store}>
                <Header />
                <Component {...props.pageProps} />
                <Footer />
                <Modal />
            </Provider>
        </>
    );
}
