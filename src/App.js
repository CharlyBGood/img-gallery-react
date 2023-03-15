import "./App.css";
import { Navbar } from "./components/Navbar";
import VisualArt from "./components/VisualArt";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VisualArt />
      <Footer />
    </div>
  );
}

export default App;
