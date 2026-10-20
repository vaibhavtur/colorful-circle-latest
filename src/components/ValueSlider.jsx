import React from 'react';

export default function ValueSlider({ baseColor, shadeValue, onShadeChange }) {
  return (
    <div className="space-y-3 bg-slate-950/50 p-4.5 rounded-2xl border border-slate-800/80">
      <div className="flex items-center justify-between text-xs font-semibold">
        <span className="text-slate-300 flex items-center gap-2">
          Value Bar (Dark ↔ Faint)
        </span>
        <span className="text-slate-400 font-mono">{shadeValue}%</span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={shadeValue}
        onChange={(e) => onShadeChange(Number(e.target.value))}
        className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-indigo-500 shadow-inner"
        style={{
          background: `linear-gradient(to right, #000000 0%, ${baseColor} 50%, #ffffff 100%)`
        }}
      />

      <div className="flex justify-between text-[11px] font-semibold tracking-wide">
        <span className="text-slate-500">Dark (0%)</span>
        <span className="text-slate-400">Normal (50%)</span>
        <span className="text-slate-300">Faint (100%)</span>
      </div>
    </div>
  );
}