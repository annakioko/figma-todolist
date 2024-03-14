import React from "react";
import { Link } from "react-router-dom";

export default function Weekdays() {
  return (
    <div className="space-x-4 text-center font-bold text-xl mb-2 mx-28 justify-stretch">
      <div className="bg-pink-300 p-3 py-1 rounded-md inline-block">
        <Link to="/monday">MON</Link>
      </div>
      <div className="bg-pink-300 p-3 py-1 rounded-md inline-block">
        <Link to="/tuesday">TUE</Link>
      </div>
      <div className="bg-pink-300 p-3 py-1 rounded-md inline-block">
        <Link to="/wednesday">WED</Link>
      </div>
      <div className="bg-pink-300 p-3 py-1 rounded-md inline-block">
        <Link to="/thursday">THUR</Link>
      </div>
      <div className="bg-pink-300 p-3 py-1 rounded-md inline-block">
        <Link to="/friday">FRI</Link>
      </div>
      <div className="bg-pink-300 p-3 py-1 rounded-md inline-block">
        <Link to="/saturday">SAT</Link>
      </div>
      <div className="bg-pink-300 p-3 py-1 rounded-md inline-block">
        <Link to="/sunday">SUN</Link>
      </div>
    </div>
  );
}
