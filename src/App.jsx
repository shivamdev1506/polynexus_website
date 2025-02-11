import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/MainPages/HomePage";
import AboutUsPage from "./pages/MainPages/AboutUsPage";
import ProductsPage from "./pages/MainPages/ProductsPage";
import ServicesPage from "./pages/MainPages/ServicesPage";
import AlgorithmicTradingPlatform from "./pages/Products/AlgorithmicTradingPlatform";
import MobileDevelopmentPage from "./pages/Services/MobileDevelopmentPage";
import CloudSolutionsPage from "./pages/Services/CloudSolutionsPage";
import SeoPage from "./pages/Services/SeoPage";
import DigitalMarketingPage from "./pages/Services/DigitalMarketingPage";
import CareersPage from "./pages/MainPages/CareersPage";
import ContactUsPage from "./pages/MainPages/ContactUsPage";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";
import FullStackDevelopmentPage from "./pages/Services/FullStackDevelopmentPage";
import AiMachineLearningServicesPage from "./pages/Services/AiMachineLearningServicesPage";
import DataEngineeringServices from "./pages/Services/DataEngineeringServices";
import Dodo from "./pages/Products/Dodo";
import Horizon from "./pages/Products/Horizon";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />}></Route>
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route
            path="/services/full-stack-development"
            element={<FullStackDevelopmentPage />}
          />
          <Route
            path="/services/mobile-development"
            element={<MobileDevelopmentPage />}
          />
          <Route
            path="/services/ai-machine-learning-services"
            element={<AiMachineLearningServicesPage />}
          />
          <Route
            path="/services/data-engineering-services"
            element={<DataEngineeringServices />}
          />

          <Route
            path="/services/cloud-solutions"
            element={<CloudSolutionsPage />}
          />
          <Route path="/services/seo" element={<SeoPage />} />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketingPage />}
          />
          <Route path="/products/dodo" element={<Dodo />} />
          <Route path="/products/horizon" element={<Horizon />} />
          <Route
            path="/products/algorithmic-trading-platform"
            element={<AlgorithmicTradingPlatform />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
