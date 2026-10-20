import React from 'react';

export default function CircleDisplay({ displayColor }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-950/60 rounded-3xl border border-slate-800/80 shadow-outer my-2">
      <div 
        className="w-52 h-52 rounded-full border-4 border-slate-700 transition-colors duration-200"
        style={{ backgroundColor: displayColor }}
      />
    </div>
  );
}