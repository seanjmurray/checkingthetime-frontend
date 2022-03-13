import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
const IMG_API = process.env.REACT_APP_IMGUR_API;
const CLIENT_ID = process.env.REACT_APP_IMGUR_CLIENT_ID;

const watchObj = {
  title: "",
  brand: "",
  model: "",
  caliber: "",
  origin: "",
  notes: "",
};

const UploadForm = () => {
  const [watch, setWatch] = useState(watchObj);
  const [watchPic, setWatchPic] = useState();

  const handleInputs = (e) => {
    const obj = watch;
    if (e.target.id === "image") {
      setWatchPic(e.target.files[0]);
    } else {
      obj[e.target.id] = e.target.value;
      setWatch(obj);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const image = new FormData();
    image.append("image", watchPic);
    axios({
      url: IMG_API,
      method: "POST",
      data: image,
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      if (res.data.success) {
        const obj = watch;
        obj.image = res.data.data.link;
        setWatch(obj);
        axios({
          url: "http://localhost:8080/api/watches",
          method: "POST",
          data: {
            form: watch,
          },
        }).then((res) => {
          console.log(res);
        });
      } else {
        console.log(res);
      }
    });
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
