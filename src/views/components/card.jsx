import { Accordion, Card, Col } from "react-bootstrap";

const Watch = (props) => {
  return (
    <Col xl={3} lg={4} md={9} className="my-3">
      <Card>
        <Card.Header className="text-center" as="h5">
          {props.title}
        </Card.Header>
        <Card.Img
          className="p-1"
          src="https://via.placeholder.com/150"
        ></Card.Img>
        <Card.Body>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Specs</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <b>Brand:</b> {props.brand}
                </ul>
                <ul>
                  <b>Model:</b> {props.model}
                </ul>
                <ul>
                  <b>Caliber:</b> {props.caliber}
                </ul>
                <ul>
                  <b>Origin:</b> {props.origin}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Notes</Accordion.Header>
              <Accordion.Body>{props.notes}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Watch;
