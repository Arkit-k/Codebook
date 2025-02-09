import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-background">
      <div className="relative inline-flex">
        {/* Outer gradient ring */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full blur-sm 
        animate-tilt"></div>
        
        {/* Main spinner */}
        <ImSpinner9 className="animate-spin h-20 w-20 text-primary relative 
          [&>path]:opacity-50 [&>path]:stroke-[4] [&>path]:stroke-current" />
        
        {/* Inner pulsating dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-3 w-3 bg-primary rounded-full animate-ping"></div>
        </div>
      </div>
      
      {/* Animated text with bouncing dots */}
      <div className="flex items-center gap-1 text-muted-foreground font-medium">
        Loading
        <span className="animate-bounce">.</span>
        <span className="animate-bounce delay-100">.</span>
        <span className="animate-bounce delay-200">.</span>
      </div>
    </div>
  );
};

export default Loading;
