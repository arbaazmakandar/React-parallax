import { Parallax } from "react-parallax";
import Spacestation from "../Image/tyler-van-der-hoeven-_ok8uVzL2gI-unsplash.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={Spacestation} strength={800}>
    <div className="content">
      <span className="image-text">A trip to space</span>
    </div>
  </Parallax>
);

export default ImageThree;
