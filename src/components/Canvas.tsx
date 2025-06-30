import React, { useEffect, useRef } from 'react';
import { Stage, Layer, Text, Line } from 'react-konva';
import StickerItem from './StickerItem';
import { Sticker } from '../App';

interface CanvasProps {
  stickers: Sticker[];
  onStickerUpdate: (id: string, updates: Partial<Sticker>) => void;
  onStickerDelete: (id: string) => void;
  showGrid: boolean;
  onCanvasReady: (canvas: any) => void;
}

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const GRID_SIZE = 40;

const Canvas: React.FC<CanvasProps> = ({
  stickers,
  onStickerUpdate,
  onStickerDelete,
  showGrid,
  onCanvasReady,
}) => {
  const stageRef = useRef<any>(null);

  useEffect(() => {
    if (stageRef.current) {
      onCanvasReady(stageRef.current);
    }
  }, [onCanvasReady]);

  const snapToGrid = (value: number) => {
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  };

  const handleDragEnd = (id: string, e: any) => {
    const newX = Math.max(0, Math.min(CANVAS_WIDTH - 60, snapToGrid(e.target.x())));
    const newY = Math.max(0, Math.min(CANVAS_HEIGHT - 60, snapToGrid(e.target.y())));
    
    onStickerUpdate(id, { x: newX, y: newY });
  };

  const renderGrid = () => {
    if (!showGrid) return null;

    const lines = [];
    
    // Vertical lines
    for (let i = 0; i <= CANVAS_WIDTH / GRID_SIZE; i++) {
      lines.push(
        <Line
          key={`v-${i}`}
          points={[i * GRID_SIZE, 0, i * GRID_SIZE, CANVAS_HEIGHT]}
          stroke="#e5e7eb"
          strokeWidth={1}
          opacity={0.5}
        />
      );
    }
    
    // Horizontal lines
    for (let i = 0; i <= CANVAS_HEIGHT / GRID_SIZE; i++) {
      lines.push(
        <Line
          key={`h-${i}`}
          points={[0, i * GRID_SIZE, CANVAS_WIDTH, i * GRID_SIZE]}
          stroke="#e5e7eb"
          strokeWidth={1}
          opacity={0.5}
        />
      );
    }
    
    return lines;
  };

  return (
    <div className="relative">
      <div 
        className="border-2 border-gray-200 rounded-xl overflow-hidden shadow-inner bg-gray-50"
        style={{ width: CANVAS_WIDTH, height: CANVAS_HEIGHT }}
      >
        <Stage
          width={CANVAS_WIDTH}
          height={CANVAS_HEIGHT}
          ref={stageRef}
        >
          <Layer>
            {/* Grid */}
            {renderGrid()}
            
            {/* Stickers */}
            {stickers.map((sticker) => (
              <StickerItem
                key={sticker.id}
                sticker={sticker}
                onDragEnd={(e) => handleDragEnd(sticker.id, e)}
                onDoubleClick={() => onStickerDelete(sticker.id)}
              />
            ))}
            
            {/* Empty state text */}
            {stickers.length === 0 && (
              <Text
                text="Click a sticker button to add stickers here!"
                x={CANVAS_WIDTH / 2}
                y={CANVAS_HEIGHT / 2}
                fontSize={16}
                fill="#9ca3af"
                align="center"
                offsetX={150}
                offsetY={8}
                fontFamily="system-ui, -apple-system, sans-serif"
              />
            )}
          </Layer>
        </Stage>
      </div>
      
      {/* Canvas info overlay */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
        {CANVAS_WIDTH} × {CANVAS_HEIGHT}px
      </div>
    </div>
  );
};

export default Canvas;