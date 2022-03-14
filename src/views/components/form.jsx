import { useState } from "react";
import { Button, Form, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Hooks
import useInputHandler from "../../hooks/inputs";
//Env Vars
const IMG_API = process.env.REACT_APP_IMGUR_API;
const CLIENT_ID = process.env.REACT_APP_IMGUR_CLIENT_ID;
const WATCH_API = process.env.REACT_APP_WATCH_API;

const UploadForm = () => {
  const { handleInputs, setWatch, watch, watchPic } = useInputHandler();
  const [uploaded, setUploaded] = useState([false, false]);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploaded([true, false]);
    axios({
      url: IMG_API,
      method: "POST",
      data: watchPic,
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: () => setProgress(33),
    }).then((res) => {
      setProgress(50);
      if (res.data.success) {
        const obj = watch;
        obj.img = res.data.data.link;
        setWatch(obj);
        setProgress(66);
        axios({
          url: WATCH_API,
          method: "POST",
          data: {
            form: watch,
          },
          onUploadProgress: () => setProgress(99),
        }).then((res) => {
          setProgress(100);
          setUploaded([true, true]);
          setTimeout(() => {
            navigate("/");
          }, 750);
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
        {uploaded[0] ? (
          uploaded[1] ? (
            <>
              <ProgressBar
                className="mt-1"
                animated
                now={progress}
                label="Uploaded"
              />
              <h3 className="text-center">Upload Complete!</h3>
            </>
          ) : (
            <ProgressBar
              className="mt-1"
              animated
              now={progress}
              label="Uploading"
            />
          )
        ) : (
          <div className="m-2 d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </div>
        )}
      </Form>
    </>
  );
};

export default UploadForm;
