import "../../public/styles.css";
import Navbar from "./navbar";
import Intro from "./Intro0";
import Vertical from "./vertical";
import Skills from "./Skills";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <div className="pro">
        <h3> P R O J E C T S </h3>
      </div>
      <Vertical />
    </div>
  );
}
