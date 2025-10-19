import React from 'react';

const FullScreenBackground = ({ color }) => {
  return (
    <div
	className="fixed top-0 left-0 w-full h-[100dvh] -z-10 transition-colors duration-500 ease-in-out"
	style={{ backgroundColor: color }}
	/>
  );
};

export default FullScreenBackground;