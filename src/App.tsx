import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import BroserProduct from "./pages/browse-product";
import AcBillCalculatorPage from "./pages/blog/blog-1";
import ACStarRatingsBlog from "./pages/blog/blog-2";
import Blog from "./pages/blog";
import EnergySavingTips from "./pages/blog/blog-3";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-ac" element={<BroserProduct />} />
        <Route
          path="/blog/ac-electricity-bill-calculator"
          element={<AcBillCalculatorPage />}
        />
        <Route path="/blog/ac-star-ratings" element={<ACStarRatingsBlog />} />
        <Route
          path="/blog/ac-energy-saving-tips"
          element={<EnergySavingTips />}
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};
export default App;
