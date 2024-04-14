import "./App.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import VisualArt from "./components/VisualArt";

function App() {
  return (
    <div className="App">
      <VisualArt />
      <Footer />
      <Navbar />
    </div>
  );
}

export default App;
