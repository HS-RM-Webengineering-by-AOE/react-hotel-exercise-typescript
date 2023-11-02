import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import Styles from "./Layout.module.css";
import { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header></Header>
      <div className={Styles.content}>{children}</div>
      <Footer></Footer>
    </>
  );
};
