import React from 'react';
import { Text } from 'react-konva';
import { Sticker } from '../App';

interface StickerItemProps {
  sticker: Sticker;
  onDragEnd: (e: any) => void;
  onDoubleClick: () => void;
}

const StickerItem: React.FC<StickerItemProps> = ({
  sticker,
  onDragEnd,
  onDoubleClick,
}) => {
  return (
    <Text
      text={sticker.emoji}
      x={sticker.x}
      y={sticker.y}
      fontSize={48}
      draggable
      onDragEnd={onDragEnd}
      onDblClick={onDoubleClick}
      onMouseEnter={(e) => {
        const container = e.target.getStage()?.container();
        if (container) {
          container.style.cursor = 'pointer';
        }
      }}
      onMouseLeave={(e) => {
        const container = e.target.getStage()?.container();
        if (container) {
          container.style.cursor = 'default';
        }
      }}
      shadowColor="rgba(0, 0, 0, 0.2)"
      shadowBlur={4}
      shadowOffset={{ x: 2, y: 2 }}
      scaleX={sticker.scale}
      scaleY={sticker.scale}
      transformsEnabled="position"
    />
  );
};

export default StickerItem;