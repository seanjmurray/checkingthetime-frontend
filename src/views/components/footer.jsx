import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar className="justify-content-center" bg="dark" variant="dark">
      <Navbar.Text>
        &copy; 2022 <a href="https://github.com/seanjmurray">Sean Murray</a>
      </Navbar.Text>
    </Navbar>
  );
};

export default Footer;
