import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import BroserProduct from "./pages/browse-product";
import AcBillCalculatorPage from "./pages/blog/blog-1";

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
      </Routes>
    </>
  );
};
export default App;
