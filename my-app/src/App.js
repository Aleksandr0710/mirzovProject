import { Routes, Route} from "react-router-dom";
import "./index.css";
import PageProduct from "./components/pages/PageProduct/PageProduct";
import PageHome from "./components/pages/PageHome/PageHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/product" element={<PageProduct />} />
    </Routes>
  );
}

export default App;
