import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./components/global/Nav";
import Footer from "./components/global/Footer";
import { Suspense } from "react";
import Loading from "./Loading";
import Context from "./context/Context";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "GlamMarket E-commerce Website",
  description:
    "Welcome to GlamMarket We're more than just a clothing store, we're your style destination",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-light-background overflow-x-hidden`}
      >
        <Context>
          <Suspense fallback={<Loading />}>
            <Nav />
            {children}
            <Footer />
          </Suspense>
        </Context>
      </body>
    </html>
  );
};

export default RootLayout;
