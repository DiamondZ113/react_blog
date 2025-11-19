import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="px-10 sm:px-20 py-24">
      <div className="flex flex-col gap-10 items-center justify-center text-center">
        {/* content */}
        <div className="flex flex-col gap-4 items-center">
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-2xl font-medium">Our blog</span>
          <h2 className="text-primary-900 font-semibold text-5xl">Resources and insight</h2>
          <p className="text-primary-700 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Search bar */}
        <form action="" className="flex items-center gap-2 bg-white border-gray-300 border py-3 px-4 w-full max-w-80 rounded-lg">
          <Search size={15}/>
          <input type="search" placeholder="Search..." className="outline-name" />
        </form>
      </div>
    </div>
  );
};

export default Header;
