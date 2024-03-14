import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Weekdays from "./Weekdays";
import MON from "./MON";
import TUE from "./TUE";
import WED from "./WED";
import THUR from "./THUR";
import FRI from "./FRI";
import SAT from "./SAT";
import SUN from "./SUN";
import TopPriorities from "./TopPriorities";
import Othertasks from "./Othertasks";
import Events from "./Events"

export default function App() {
  return (
    <Router>
      <div className="bg-pink-100 min-h-screen ">
        <h1 className="font-bold text-xl text-center mb-2">TO DO LIST</h1>
        <Routes>
          <Route path="/" element={<Weekdays />} />
          <Route path="/monday" element={<MON />} />
          <Route path="/tuesday" element={<TUE />} />
          <Route path="/wednesday" element={<WED />} />
          <Route path="/thursday" element={<THUR />} />
          <Route path="/friday" element={<FRI />} />
          <Route path="/saturday" element={<SAT />} />
          <Route path="/sunday" element={<SUN />} />
        </Routes>
        <TopPriorities />
        <div className="float-left">
          <Othertasks />
        </div>
        <div className="float-right">
          <Events />
        </div>
      </div>
    </Router>
  );
}
