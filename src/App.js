import "./App.css";
import CustomFooter from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <CustomFooter />
    </div>
  );
}

export default App;
