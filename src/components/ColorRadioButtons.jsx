import React from 'react';
import { COLOR_OPTIONS } from '../utils/colorUtils';

export default function ColorRadioButtons({ selectedColor, onSelectColor }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {COLOR_OPTIONS.map((preset) => {
        const isSelected = selectedColor.toUpperCase() === preset.hex.toUpperCase();
        return (
          <label
            key={preset.name}
            className={`flex items-center space-x-2.5 p-3 rounded-2xl cursor-pointer border transition-all duration-200 ${
              isSelected 
                ? 'bg-slate-300 border-slate-500 shadow-md scale-[1.02]' 
                : 'bg-slate-950/40 border-slate-800 hover:bg-slate-800/40 hover:border-slate-700'
            }`}
            style={{
              borderColor: isSelected ? preset.hex : undefined,
              backgroundColor: isSelected ? preset.labelBg : undefined
            }}
          >
            <input
              type="radio"
              name="colorPreset"
              checked={isSelected}
              onChange={() => onSelectColor(preset.hex)}
              className="w-4 h-4 accent-indigo-500 cursor-pointer"
            />
            <span 
              className="text-xs font-bold"
              style={{ color: preset.hex }}
            >
              {preset.name}
            </span>
          </label>
        );
      })}
    </div>
  );
}