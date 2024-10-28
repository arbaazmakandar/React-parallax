import logo from "./logo.svg";
import "./App.css";
import ImageOne from "./Components/ImageOne";
import ImageTwo from "./Components/ImageTwo";
import ImageThree from "./Components/ImageThree";
import TextBox from "./Components/TextBox";

function App() {
  return (
    <div>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <TextBox />
      <ImageThree />
    </div>
  );
}

export default App;
