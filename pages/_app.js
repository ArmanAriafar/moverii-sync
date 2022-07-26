//? Required
import "antd/dist/antd.css";

//? Styles
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/Fonts.css";

//? Components
import Layout from "../components/Layout/Layout";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
