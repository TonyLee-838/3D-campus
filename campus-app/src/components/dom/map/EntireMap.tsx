import React, { useCallback, useEffect, useMemo, useState } from 'react';

// components
import RoomIcon from '@material-ui/icons/Room';

// types
import { Studio, Style } from '../../../types';

// hooks
import { useCampusStore } from '../../../store/CampusStore';
import {
  getEntireMapStyle,
  getBlockStyle,
  getBuildingStyle,
  getStudioNameStyle,
  getPlayerEntireMapStyle,
  getOffsetStyleOfMap,
} from '../../../hooks/useCalculateMap';
import StudioMark from './StudioMark';
import { getUniqueId } from '../../../utils';
import { useNavigationStore } from '../../../store/NavigationStore';
import EntryDialog from './EntryDialog';

interface EntireMapProps {
  forMiniMap?: boolean;
}

const EntireMap = ({ forMiniMap = false }: EntireMapProps) => {
  const blocks = useCampusStore((state) => state.blocks);
  const buildings = useCampusStore((state) => state.buildings);
  const playerPosition = useCampusStore((state) => state.playerPosition);
  const enterStudio = useCampusStore((state) => state.enterStudio);

  const [hoveredId, setHoveredId] = useState<string>('');
  const [openedStudio, setOpenedStudio] = useState<Studio | null>(null);

  const entireMapStyle: Style = forMiniMap ? {} : { left: '25%', top: '10%' };
  const offsetStyle: Style = !forMiniMap ? {} : getOffsetStyleOfMap(playerPosition);

  const handleMouseOver = useCallback((studio: Studio) => {
    setHoveredId(studio.id);
    setTimeout(() => {
      setOpenedStudio(studio);
    }, 3000);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId('');
    clearTimeout();
  }, []);

  return (
    <div style={{ ...getEntireMapStyle(), ...entireMapStyle, ...offsetStyle }}>
      {blocks &&
        blocks.map((block, i) => {
          const { position, dimensions } = block;
          return <div style={getBlockStyle(position, dimensions)} key={`block-${i}`} />;
        })}
      {buildings &&
        buildings.map(({ position, name, id }) => {
          const _studio = { position, name, id };

          return (
            <StudioMark
              key={getUniqueId('studio-mark')}
              studio={_studio}
              hovered={id === hoveredId}
              onMouseOver={() => handleMouseOver(_studio)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      {!forMiniMap && playerPosition && (
        <RoomIcon color='secondary' style={getPlayerEntireMapStyle(playerPosition)} fontSize='large' />
      )}

      {openedStudio && (
        <EntryDialog
          studio={openedStudio}
          onEnter={(id) => enterStudio(id)}
          onCancel={() => setOpenedStudio(null)}
        />
      )}
    </div>
  );
};

export default EntireMap;
