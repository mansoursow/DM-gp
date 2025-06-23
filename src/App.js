// App.js
import "./App.css";
import Home from "./components/Home";
import { SimpleNavbar } from "./components/ComplexNavbar";

function App() {
  return (
    <div className="App">
      <SimpleNavbar />

      <Home />
    </div>
  );
}

export default App;
