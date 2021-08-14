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
      <Vertical />
    </div>
  );
}
