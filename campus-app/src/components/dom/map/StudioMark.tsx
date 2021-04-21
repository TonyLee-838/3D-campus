import React from 'react';

import { getBuildingStyle, getStudioNameStyle } from '../../../hooks/useCalculateMap';

import { Dims2, Studio } from '../../../types';

interface StudioMarkProps {
  studio: Studio;
  hovered: boolean;
  onMouseOver: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
}

const StudioMark = React.memo(({ studio, hovered, onMouseOver, onMouseLeave }: StudioMarkProps) => {
  return (
    <div
      style={getBuildingStyle(studio.position, 30, 30, hovered)}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <span style={getStudioNameStyle()} onClick={() => console.log('clicked')}>
        {studio.name}
      </span>
    </div>
  );
});

export default StudioMark;
