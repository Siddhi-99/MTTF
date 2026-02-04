import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* ===================== MAIN ===================== */
import MainPage from "./pages/Mainpage";

/* ===================== CONSULTANCY SERVICES ===================== */
import ConsultancyServices from "./pages/OurPrograms/Consultancy_Services/ConsultancyServices";
import ExpertConsultancyServices from "./pages/OurPrograms/Consultancy_Services/ExpertConsultancyServices";
import LogisticSupportServices from "./pages/OurPrograms/Consultancy_Services/LogisticSupportServices";
import ConferenceSupportServices from "./pages/OurPrograms/Consultancy_Services/ConferenceSupportServices";

/* ===================== CAPABILITY PAGES ===================== */
import ArtificialIntelligence from "./pages/OurPrograms/Capability/ArtificialIntelligence";
import BusinessIntelligence from "./pages/OurPrograms/Capability/BusinessIntelligence";
import Bioinformatics from "./pages/OurPrograms/Capability/Bioinformatics";
import ComputationalMathematics from "./pages/OurPrograms/Capability/ComputationalMathematics";
import DataAnalytics from "./pages/OurPrograms/Capability/DataAnalytics";
import QuantumComputing from "./pages/OurPrograms/Capability/QuantumComputing";

/* ===================== AWARDS ===================== */
import Awards2025 from "./pages/OurPrograms/Awards/Awards2025";
import Awards2024 from "./pages/OurPrograms/Awards/Awards2024";

/* ===================== CONTACT ===================== */
import Contact from "./pages/Contacts/Contact";

function App() {
  return (
    <Router>
      <Routes>

        {/* ===================== HOME ===================== */}
        <Route path="/" element={<MainPage />} />

        {/* ===================== PROGRAMS LANDING ===================== */}
        {/* Used when user clicks "Our Programs" main button */}
        <Route
          path="/programs"
          element={<Navigate to="/programs/consultancy-services" replace />}
        />

        {/* ===================== CONSULTANCY SERVICES ===================== */}
        <Route
          path="/programs/consultancy-services"
          element={<ConsultancyServices />}
        />
        <Route
          path="/programs/consultancy-services/expert-consultancy"
          element={<ExpertConsultancyServices />}
        />
        <Route
          path="/programs/consultancy-services/logistic-support"
          element={<LogisticSupportServices />}
        />
        <Route
          path="/programs/consultancy-services/conference-support"
          element={<ConferenceSupportServices />}
        />

        {/* ===================== CAPABILITY ===================== */}
        <Route
          path="/programs/capability/artificial-intelligence"
          element={<ArtificialIntelligence />}
        />
        <Route
          path="/programs/capability/business-intelligence"
          element={<BusinessIntelligence />}
        />
        <Route
          path="/programs/capability/bioinformatics"
          element={<Bioinformatics />}
        />
        <Route
          path="/programs/capability/computational-mathematics"
          element={<ComputationalMathematics />}
        />
        <Route
          path="/programs/capability/data-analytics"
          element={<DataAnalytics />}
        />
        <Route
          path="/programs/capability/quantum-computing"
          element={<QuantumComputing />}
        />

        {/* ===================== AWARDS ===================== */}
        <Route path="/programs/awards/2025" element={<Awards2025 />} />
        <Route path="/programs/awards/2024" element={<Awards2024 />} />

        {/* ===================== CONTACT ===================== */}
        <Route path="/contact" element={<Contact />} />

        {/* ===================== FALLBACK ===================== */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Router>
  );
}

export default App; 