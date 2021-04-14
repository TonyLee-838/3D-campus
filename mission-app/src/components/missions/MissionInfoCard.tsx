import React from 'react';
import { AppStyleSheet } from '../../types';
import { useHoveredId, usePointerLocations } from '../../store/brickStore';
import { useMissionById } from '../../store/missionStore';
import { colors } from '../../config/colors';

const MissionInfoCard = () => {
  const { pointerLocations } = usePointerLocations();
  const { hoveredId } = useHoveredId();
  const mission = useMissionById(`${hoveredId}`);

  const layout = {
    top: pointerLocations.y,
    left: pointerLocations.x,
  };

  return (
    <div style={{ ...styles.card, ...layout }}>
      <h2>任务 {mission?.current}</h2>
      <p>{mission?.description}</p>
      <p>{mission?.completed ? '已' : '未'}完成</p>
      {mission?.completedTime && (
        <p>
          完成时间:
          {`${mission?.completedTime.getMonth() + 1}月 ${mission?.completedTime.getDay()}日`}
        </p>
      )}
    </div>
  );
};

const styles: AppStyleSheet = {
  card: {
    position: 'absolute',
    backgroundColor: colors.white,
    padding: '10px 30px',
    boxShadow: '3px 3px 2px 2px' + colors.grey,
    borderRadius: '3px',
  },
};

export default MissionInfoCard;
