import React, { useEffect } from "react";
import Homepage from './components/Homepage/Homepage';
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Tech";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import Booking from "./components/Booking/Booking";
import DestinationQuiz from "./components/Quiz/DestinationQuiz";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/destination" element={<Destination />} />
        <Route path="/destination/:name" element={<Destination />} />


        <Route path="/crew" element={<Crew />} />
        <Route path="/crew/:name" element={<Crew />} />

        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/:name" element={<Technology />} />

        <Route path="/system" element={<SolarSystem />} />

        <Route path="/book" element={<Booking />} />
        <Route path="/quiz" element={<DestinationQuiz />} />

        {/* Default catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;




