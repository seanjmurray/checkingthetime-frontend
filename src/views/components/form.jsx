import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const watchObj = {
  title: "",
  image: "",
  brand: "",
  model: "",
  caliber: "",
  origin: "",
  notes: "",
};

const UploadForm = () => {
  const [watch, setWatch] = useState(watchObj);

  const handleInputs = (e) => {
    const obj = watch;
    obj[e.target.id] = e.target.value;
    setWatch(obj);
    console.log(watch);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8080/api/watches",
      method: "POST",
      data: {
        watch,
      },
    }).then((res) => console.log(res));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            id="title"
            required
            type="text"
            placeholder="My New Watch"
            onChange={(e) => handleInputs(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Image:</Form.Label>
          <Form.Control
            id="image"
            required
            type="file"
            accept="image/*"
            onChange={(e) => handleInputs(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand:</Form.Label>
          <Form.Control
            id="brand"
            required
            type="text"
            placeholder="Seiko"
            onChange={(e) => handleInputs(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Model:</Form.Label>
          <Form.Control
            id="model"
            required
            type="text"
            placeholder="5 Sport"
            onChange={(e) => handleInputs(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Caliber:</Form.Label>
          <Form.Control
            id="caliber"
            required
            type="text"
            placeholder="4R36"
            onChange={(e) => handleInputs(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Origin:</Form.Label>
          <Form.Control
            id="origin"
            required
            type="text"
            placeholder="Japan"
            onChange={(e) => handleInputs(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Notes:</Form.Label>
          <Form.Control
            id="notes"
            required
            as="textarea"
            rows={3}
            placeholder="A classic simple diver"
            onChange={(e) => handleInputs(e)}
          ></Form.Control>
        </Form.Group>
        <div className="m-2 d-flex justify-content-center">
          <Button variant="primary" type="submit">
            Upload
          </Button>
        </div>
      </Form>
    </>
  );
};

export default UploadForm;
