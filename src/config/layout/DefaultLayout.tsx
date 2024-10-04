import {Container} from "@mui/material";
import {ReactNode} from "react";
import MyAppHeader from "../../components/MyAppHeader";

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <>
      <MyAppHeader />
      <Container>{children}</Container>;
    </>
  );
}

export default DefaultLayout;
