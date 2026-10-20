import React, { useState } from 'react';
import CircleDisplay from './components/CircleDisplay';
import ColorRadioButtons from './components/ColorRadioButtons';
import HexColorInput from './components/HexColorInput';
import ValueSlider from './components/ValueSlider';
import { applyShade } from './utils/colorUtils';

export default function App() {
  const [baseColor, setBaseColor] = useState('#3bf673');
  const [shadeValue, setShadeValue] = useState(50);

  const displayColor = applyShade(baseColor, shadeValue);

  return (
    <div className="min-h-screen bg-slate-300 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-xl bg-slate-200/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl space-y-6">
        <h1 className="text-2xl font-extrabold text-center bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Colorful Circle Studio
        </h1>

        <CircleDisplay displayColor={displayColor} />

        <ColorRadioButtons 
          selectedColor={baseColor} 
          onSelectColor={setBaseColor} 
        />

        <ValueSlider 
          baseColor={baseColor} 
          shadeValue={shadeValue} 
          onShadeChange={setShadeValue} 
        />

        <HexColorInput 
          baseColor={baseColor} 
          onHexChange={setBaseColor} 
        />
      </div>
    </div>
  );
}