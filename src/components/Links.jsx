import React from "react";
import { Target, Users, Lightbulb } from "lucide-react";

const HatchLinks = () => {
  return (
    <div className="bg-[#9F5CE1] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <Target className="text-black mb-2" size={28} />
          <h3 className="font-semibold text-white text-lg mb-1">Our approach</h3>
          <p className="text-sm text-white">Learn more about how we deliver.</p>
        </div>
        <div className="flex flex-col items-center">
          <Users className="text-black mb-2" size={28} />
          <h3 className="font-semibold text-white text-lg mb-1">Careers</h3>
          <p className="text-sm text-white">Become a Hatcher!</p>
        </div>
        <div className="flex flex-col items-center">
          <Lightbulb className="text-black mb-2" size={28} />
          <h3 className="font-semibold text-white text-lg mb-1">Get inspired</h3>
          <p className="text-sm text-white">Check out our blog</p>
        </div>
      </div>
    </div>
  );
};

export default HatchLinks;