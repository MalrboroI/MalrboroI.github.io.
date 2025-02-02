import Carousel from "react-bootstrap/Carousel";
import Img1 from "../img/MainCarousel1.jpg";
import Img2 from "../img/MainCarousel2.jpg";
import Img3 from "../img/MainCarousel3.png";
import Img4 from "../img/MainCarousel4.jpg";

export default function MainCarousels() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={2000} className="d-flex">
       <img className="MainCarouselImg" src={Img1} alt="Парфюмерия" />
        <Carousel.Caption className="MainCarouselText"> 
          <h2>Парфюмерия</h2>
          <p>найди для себя тот самый аромат</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} >
      <img className="MainCarouselImg" src={Img2} alt="Для тела" />
        <Carousel.Caption className="MainCarouselText">
          <h2>Для тела</h2>
          <p>кремы для питания и увлажнения, средства для душа и не только</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} >
      <img className="MainCarouselImg" src={Img3 }alt="Декоративная косметика" />
        <Carousel.Caption className="MainCarouselText">
          <h2>Декоративная косметика</h2>
          <p>
            для глаз, для лица, а также аксесуары
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000} >
      <img className="MainCarouselImg" src={Img4} alt="Скидки" />
        <Carousel.Caption className="MainCarouselText">
          <h2>Скидки до -50%!</h2>
          <p>
            в интернет-магазине и офлайн
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
