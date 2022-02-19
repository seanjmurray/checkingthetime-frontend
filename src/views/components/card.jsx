import { Card, Col } from "react-bootstrap";

const Watch = () => {
  return (
    <Col xl={3} lg={4} md={9} className="my-3">
      <Card>
        <Card.Header>Test</Card.Header>
        <Card.Img
          className="p-1"
          src="https://via.placeholder.com/150"
        ></Card.Img>
        <Card.Body>Test body</Card.Body>
      </Card>
    </Col>
  );
};

export default Watch;
