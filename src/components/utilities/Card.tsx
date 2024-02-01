import React from "react";

const Card = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="lg:w-[50%] rounded-[20px] justify-center items-center text-center bg-moon/20 backdrop-blur mx-24 mt-6 p-4 lg:p-6 lg:mb-24">
      {children}
    </div>
  );
};

export default Card;
