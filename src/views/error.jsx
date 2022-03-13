import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container className="text-center" sm={10}>
        <div className="mt-5">
          <iframe
            src="https://giphy.com/embed/tvGOBZKNEX0ac"
            width="480"
            height="204"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <h1>404</h1>
          <h1>Page not found</h1>
          <Button onClick={() => navigate("/")} variant="danger">
            Take me Home
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Error;
