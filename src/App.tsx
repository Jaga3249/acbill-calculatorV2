import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import BroserProduct from "./pages/browse-product";
import Blog from "./components/blog";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-ac" element={<BroserProduct />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};
export default App;
