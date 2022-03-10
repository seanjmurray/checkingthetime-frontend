import { Button, Form } from "react-bootstrap";

const UploadForm = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group></Form.Group>
        <Form.Group>
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Model</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Caliber</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Origin</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={3}></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" className="p-1">
          Upload
        </Button>
      </Form>
    </>
  );
};

export default UploadForm;
