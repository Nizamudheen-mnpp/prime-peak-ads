import React from 'react';

interface LogoProps {
  isLight?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ isLight = false, className = "" }) => {
  // Colors
  const orange = "#F6921E";
  const blue = "#031F33";
  const white = "#FFFFFF";
  
  const mainTextColor = isLight ? "text-white" : "text-[#031F33]";
  const subTextColor = isLight ? "text-gray-300" : "text-[#031F33]";
  const borderColor = isLight ? "border-gray-400" : "border-[#031F33]";

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src={isLight ? "/logo.png" :"/logo-white-bg.png"}
        alt="Primepeak Advertising Gifts L.L.C logo"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;