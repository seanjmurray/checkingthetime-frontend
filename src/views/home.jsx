// Components
import { Container, Row } from "react-bootstrap";
import Watch from "./components/card";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Container sm={10}>
        <Watch />
      </Container>
    </>
  );
};

export default Home;
