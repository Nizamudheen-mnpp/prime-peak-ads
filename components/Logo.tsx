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
      {/* Stylized P Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
           <path d="M20 10 H65 C85 10 85 55 65 55 H45 V90 H20 V10 Z" fill={orange} />
           <path d="M45 25 H60 C70 25 70 40 60 40 H45 V25 Z" fill={white} fillOpacity="0.9" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="flex items-center">
        <span className={`text-2xl md:text-3xl font-bold tracking-tight ${mainTextColor} font-sans`}>
          Primepeak
        </span>
        <div className={`ml-3 pl-3 border-l ${borderColor} flex flex-col justify-center h-9`}>
          <span className={`text-[0.6rem] font-bold uppercase leading-none tracking-widest ${subTextColor} mb-1`}>Advertising</span>
          <span className={`text-[0.6rem] font-bold uppercase leading-none tracking-widest ${subTextColor} mb-1`}>Gifts</span>
          <span className={`text-[0.6rem] font-bold uppercase leading-none tracking-widest ${subTextColor}`}>L.L.C</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;