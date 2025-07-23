import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export { Layout };
