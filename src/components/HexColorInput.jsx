import React from 'react';

export default function HexColorInput({ baseColor, onHexChange }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
        Custom HEX Value Input
      </label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={baseColor}
          onChange={(e) => onHexChange(e.target.value)}
          className="w-11 h-11 rounded-xl cursor-pointer border-2 border-slate-700 bg-slate-950 p-1"
        />
        <input
          type="text"
          value={baseColor}
          onChange={(e) => onHexChange(e.target.value)}
          placeholder="#3B82F6"
          maxLength={7}
          className="flex-1 bg-slate-950 border border-slate-800 rounded-2xl px-4 py-2.5 text-sm font-mono text-white focus:outline-none focus:border-indigo-500 uppercase tracking-widest shadow-inner"
        />
      </div>
    </div>
  );
}