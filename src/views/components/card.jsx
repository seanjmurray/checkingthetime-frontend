<<<<<<< HEAD
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
=======
import { Card, CardImg, Col, Container, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

const Watch = () => {
  return (
    <Container fluid lg={10}>
      <Row className="justify-content-center">
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col sm={9} md={5} lg={3}>
            <Card bg="light">
              <CardHeader>Header</CardHeader>
              <Col lg={10}>
                <CardImg
                  className="ml-auto"
                  src="https://via.placeholder.com/100"
                ></CardImg>
              </Col>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
>>>>>>> ed33626b8aa06dcea4043fcb585c0040edff8ac1

export default Watch;
