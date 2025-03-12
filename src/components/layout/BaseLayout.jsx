// App level imports
import { Link } from "react-router-dom";
import { Navbar } from "../../components";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="pt-navHeight bg-background">{children}</section>

      <footer className="flex px-4 justify-between py-3  bg-brown-800">
        <Link to="/">
          <span className="text-bisque text-sm">Home</span>
        </Link>
        <a href="https://hammer3.com" target="_blank">
          <span className="text-bisque text-sm">Hammer3 © 2022</span>
        </a>
      </footer>
    </>
  );
};

export default Layout;
