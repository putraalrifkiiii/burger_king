import React from "react";

const HeaderTitle = ({ title, subtitle, description }) => {
  return (
    <div className="max-w-[500px] mx-auto">
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg text-gray-600">{subtitle}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default HeaderTitle;
