import { Parallax } from "react-parallax";
import Satellite from "../Image/nasa-8Hjx3GNZYeA-unsplash.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Satellite} strength={800}>
    <div className="content">
      <span className="image-text">A trip to space</span>
    </div>
  </Parallax>
);

export default ImageTwo;
