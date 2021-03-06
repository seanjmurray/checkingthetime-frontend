// Components
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Watch from "./components/card";

const url = process.env.REACT_APP_WATCH_API;

const Home = () => {
  const [watches, getWatches] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      getWatches(res.data);
    });
  }, []);
  return (
    <>
      <Container sm={10}>
        <Row className="justify-content-center">
          {watches.map((watch, i) => {
            return <Watch {...watch} key={i} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
