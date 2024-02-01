import React from "react";

const Card = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="lg:w-[50%] rounded-[20px] justify-center items-center text-center bg-moon/20 backdrop-blur m-16 p-4 lg:p-6 lg:mb-6">
      {children}
    </div>
  );
};

export default Card;
