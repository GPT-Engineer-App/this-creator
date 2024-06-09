import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Whiteboard from "./components/Whiteboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/whiteboard" element={<Whiteboard />} />
      </Routes>
    </Router>
  );
}

export default App;