import { Container, Row } from "react-bootstrap";
import UploadForm from "./components/form";

const Upload = () => {
  return (
    <Container sm={8}>
      <Row>
        <UploadForm />
      </Row>
    </Container>
  );
};

export default Upload;
