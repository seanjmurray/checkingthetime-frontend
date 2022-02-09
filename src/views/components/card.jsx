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

export default Watch
