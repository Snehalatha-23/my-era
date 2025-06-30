import React, { useState } from 'react';

interface StickerButtonProps {
  emoji: string;
  name: string;
  onClick: () => void;
}

const StickerButton: React.FC<StickerButtonProps> = ({ emoji, name, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const handleMouseLeave = () => {
    setIsPressed(false);
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`w-full flex items-center gap-4 p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group ${
        isPressed ? 'scale-95 border-blue-400 bg-blue-100' : ''
      }`}
    >
      <div className={`text-3xl transition-transform duration-200 ${
        isPressed ? 'scale-110' : 'group-hover:scale-105'
      }`}>
        {emoji}
      </div>
      <div className="text-left">
        <div className="font-medium text-gray-800 text-sm">{name}</div>
        <div className="text-xs text-gray-500">Click to add</div>
      </div>
    </button>
  );
};

export default StickerButton;