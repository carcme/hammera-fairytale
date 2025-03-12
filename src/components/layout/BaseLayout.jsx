// App level imports
import { Navbar } from "../../components";
import Footer from "./navbar/Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <section>{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
