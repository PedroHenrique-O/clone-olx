import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdPage from "./pages/AdPage";
import SellPage from "./pages/SellPage";
import AllPage from "./pages/AllPage";
import RouteHandler from "./components/RouteHandler";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ad/:id" element={<AdPage />} />
      <Route path="/ads" element={<AllPage />} />

      <Route
        path="/post-an-ad"
        element={
          <RouteHandler privateRoute>
            <SellPage />
          </RouteHandler>
        }
      />
    </Routes>
  );
};
export default Routers;
