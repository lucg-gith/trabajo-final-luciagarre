import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
export { Layout };
