import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import "../styles/globals.css";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      
    <Component {...pageProps} />
    <Footer/>
    </ChakraProvider>
  );
}

export default MyApp;
