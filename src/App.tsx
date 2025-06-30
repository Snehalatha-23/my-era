import React, { useState } from 'react';
import Canvas from './components/Canvas';
import StickerButton from './components/StickerButton';
import { Download, Grid3X3, RotateCcw } from 'lucide-react';

export interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  scale: number;
}

const STICKER_OPTIONS = [
  { emoji: '😀', name: 'Happy Face' },
  { emoji: '🎉', name: 'Party' },
  { emoji: '⭐', name: 'Star' },
];

function App() {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [showGrid, setShowGrid] = useState(false);
  const [canvasRef, setCanvasRef] = useState<any>(null);

  const addSticker = (emoji: string) => {
    const gridSize = 40;
    const defaultX = Math.floor(Math.random() * 8) * gridSize + 50; // Random position within bounds
    const defaultY = Math.floor(Math.random() * 6) * gridSize + 50;
    
    const newSticker: Sticker = {
      id: `sticker-${Date.now()}-${Math.random()}`,
      emoji,
      x: defaultX,
      y: defaultY,
      scale: 1,
    };

    setStickers(prev => [...prev, newSticker]);
  };

  const updateSticker = (id: string, updates: Partial<Sticker>) => {
    setStickers(prev => 
      prev.map(sticker => 
        sticker.id === id ? { ...sticker, ...updates } : sticker
      )
    );
  };

  const deleteSticker = (id: string) => {
    setStickers(prev => prev.filter(sticker => sticker.id !== id));
  };

  const downloadCanvas = () => {
    if (canvasRef) {
      const dataURL = canvasRef.toDataURL({
        mimeType: 'image/png',
        quality: 1,
        pixelRatio: 2,
      });
      
      const link = document.createElement('a');
      link.download = `sticker-canvas-${new Date().toISOString().split('T')[0]}.png`;
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const clearCanvas = () => {
    if (window.confirm('Are you sure you want to clear all stickers?')) {
      setStickers([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Sticker Canvas Studio
          </h1>
          <p className="text-gray-600 text-lg">
            Create, drag, and arrange stickers on your canvas
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sticker Controls */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Sticker Library
                </h2>
                
                <div className="space-y-3 mb-6">
                  {STICKER_OPTIONS.map((option, index) => (
                    <StickerButton
                      key={index}
                      emoji={option.emoji}
                      name={option.name}
                      onClick={() => addSticker(option.emoji)}
                    />
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-4">
                    Canvas Tools
                  </h3>
                  
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowGrid(!showGrid)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ${
                        showGrid 
                          ? 'bg-blue-50 border-blue-200 text-blue-700' 
                          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Grid3X3 size={18} />
                      <span className="text-sm font-medium">
                        {showGrid ? 'Hide Grid' : 'Show Grid'}
                      </span>
                    </button>

                    <button
                      onClick={downloadCanvas}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Download size={18} />
                      <span className="text-sm font-medium">Download PNG</span>
                    </button>

                    <button
                      onClick={clearCanvas}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <RotateCcw size={18} />
                      <span className="text-sm font-medium">Clear Canvas</span>
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Tips
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Click stickers to add them</li>
                    <li>• Drag stickers to move them</li>
                    <li>• Double-click to delete</li>
                    <li>• Stickers snap to grid</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Canvas Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Canvas
                  </h2>
                  <div className="text-sm text-gray-500">
                    {stickers.length} sticker{stickers.length !== 1 ? 's' : ''}
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative">
                    <Canvas
                      stickers={stickers}
                      onStickerUpdate={updateSticker}
                      onStickerDelete={deleteSticker}
                      showGrid={showGrid}
                      onCanvasReady={setCanvasRef}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;