import { Carousel } from "react-bootstrap";
import { HomeContainer, Img } from "../../components/styles/Styled";

const HomePage = () => {
  return (
    <HomeContainer>
      <Carousel fade>
        <Carousel.Item>
          <Img src="assets/images/1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Img src="assets/images/3.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Img src="assets/images/4.jpg" alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </HomeContainer>
  );
};

export default HomePage;
