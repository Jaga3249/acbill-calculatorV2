import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import BroserProduct from "./pages/browse-product";
import AcBillCalculatorPage from "./pages/blog/blog-1";
import ACStarRatingsBlog from "./pages/blog/blog-2";
import Blog from "./pages/blog";
import EnergySavingTips from "./pages/blog/blog-3";
import ACUsageTips from "./pages/blog/blog-4";
import ACPowerConsumption from "./pages/blog/blog-5";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-ac" element={<BroserProduct />} />
        <Route
          path="/blog/calculate-air-conditioner-annual-electricity-bill-india"
          element={<AcBillCalculatorPage />}
        />
        <Route
          path="/blog/ac-star-ratings-impact-monthly-electricity-costs"
          element={<ACStarRatingsBlog />}
        />
        <Route
          path="/blog/top-10-energy-saving-tips-ac-users-india"
          element={<EnergySavingTips />}
        />
        <Route
          path="/blog/why-ac-electricity-bill-is-high-mistakes-and-fixes"
          element={<ACUsageTips />}
        />
        <Route
          path="/blog/electricity-consumption-1-ton-1-5-ton-2-ton-ac"
          element={<ACPowerConsumption />}
        />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};
export default App;
