// Components
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Watch from "./components/card";

const url = "http://localhost:8080/api/watches";

const Home = () => {
  const [watches, getWatches] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      getWatches(res.data);
    });
  });
  return (
    <>
      <Container sm={10}>
        <Row>
          {watches.map((watch, i) => {
            return <Watch {...watch} key={i} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
