import { Parallax } from "react-parallax";
import Nasa from "../Image/spacex-VBNb52J8Trk-unsplash.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Nasa} strength={800}>
    <div className="content">
      <span className="image-text">A trip to space</span>
    </div>
  </Parallax>
);

export default ImageOne;
