import { Roboto } from "next/font/google";
import "../(styles)/globals.css";
import Nav from "../(shared)/components/nav/Nav";
import Footer from "../(shared)/components/Footer";
import { Suspense } from "react";
import Loading from "../(shared)/components/Loading";
import Context from "../(shared)/context/Context";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "GlamMarket E-commerce Website",
  description:
    "Welcome to GlamMarket We're more than just a clothing store, we're your style destination",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
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
