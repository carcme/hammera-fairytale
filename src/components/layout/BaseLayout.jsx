// App level imports
import { Navbar } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="pt-navHeight bg-background">{children}</section>

      <footer className="flex px-4 justify-between py-3  bg-brown-800">
        <a href="/">
          <span className="text-bisque text-sm">Home</span>
        </a>
        <a href="https://hammer3.com">
          <span className="text-bisque text-sm">Hammer3 © 2022</span>
        </a>
      </footer>
    </>
  );
};

export default Layout;
