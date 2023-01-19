import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

import classes from "./Slider.module.scss";

function CarouselFadeExample() {
  return (
    <div className={classes["container-slider"]}>
      <Carousel fade style={{ height: "560px" }} variant="dark">
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={require("../../../../Assets/Slider/1.jpg")}
            alt="First slide"
            width={560}
            height={560}
          />
          <Carousel.Caption>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={require("../../../../Assets/Slider/2.jpg")}
            alt="Second slide"
            width={560}
            height={560}
          />

          <Carousel.Caption>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={require("../../../../Assets/Slider/3.jpg")}
            alt="Third slide"
            width={560}
            height={560}
          />

          <Carousel.Caption>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselFadeExample;
