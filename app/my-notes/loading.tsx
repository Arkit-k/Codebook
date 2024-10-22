import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <ImSpinner9 className="animate-spin h-20 w-20 text-blue-500" />
    </div>
  );
};

export default Loading;
