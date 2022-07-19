
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './slideshow.css';


const Slideshow = () => {
  return (
    <div className="slideshow">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1642526157"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>God Of War</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1656615305"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Red Redemption II</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://egamersworld.com/uploads/blog/1643978351993-1.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>PubG</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
