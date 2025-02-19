import React from "react";
import { MessageSquare } from "lucide-react";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-6 h-6" />
          <h1 className="text-xl font-bold">게시물 관리 시스템</h1>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
