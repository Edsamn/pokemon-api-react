import {Container} from "@mui/material";
import {ReactNode} from "react";
import MyAppHeader from "../../components/MyAppHeader";
import Footer from "../../components/Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <>
      <MyAppHeader />
      <Container>{children}</Container>;
      <Footer />
    </>
  );
}

export default DefaultLayout;
