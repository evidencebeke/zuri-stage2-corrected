import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import SmoothScroll from "smooth-scroll";
import Works from "./components/Works";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
});

function App() {
  const user = {
    firstName: "Evidence",
    lastName: "Beke",
  };
  console.log(`Hello! My name is ${user.firstName} ${user.lastName}`);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
