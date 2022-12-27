import { Routes, Route } from "react-router-dom";
import "./index.css";
import PageApple from "./components/pages/PageApple/PageApple";
import PageHome from "./components/pages/PageHome/PageHome";
import PagePhone from "./components/pages/PagePhone/PagePhone";
import PageTablet from "./components/pages/PageTablet/PageTablet";
import PageThunderobot from "./components/pages/PageThunderobot/PageThunderobot";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PageHome />} />
      <Route path="/phone/apple" element={<PageApple />} />
      <Route path="/phone" element={<PagePhone />} />
      <Route path="/tablet" element={<PageTablet />} />
      <Route path="/tablet/Thunderobot911AirD" element={<PageThunderobot />} />
    </Routes>
  );
}

export default App;
