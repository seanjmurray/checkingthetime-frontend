// Components
import { Container, Row } from "react-bootstrap";
import Watch from "./components/card";

const note =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const watch = {
  title: "test title",
  brand: "Test brand",
  model: "test model",
  caliber: "test caliber",
  origin: "test origin",
  notes: note,
};

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Container sm={10}>
        <Row>
          <Watch {...watch} />
          <Watch />
          <Watch />
          <Watch />
        </Row>
      </Container>
    </>
  );
};

export default Home;
