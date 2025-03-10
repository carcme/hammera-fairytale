// App level imports
import { Navbar } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="pt-navHeight bg-background">{children}</section>
    </>
  );
};

export default Layout;
