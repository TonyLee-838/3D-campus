import { useState, useEffect } from 'react';

//Types
import { KeyMap, MovementMap, KeyType } from '../types';

export const isSupportedKey = (key: string) => !!key.match(/^(((Key)(W|A|S|D))|(Space))$/);

export function moveFieldByKey(key: KeyType) {
  const keys: KeyMap = {
    KeyW: 'moveForward',
    KeyS: 'moveBackward',
    KeyA: 'moveLeft',
    KeyD: 'moveRight',
    Space: 'jump',
  };
  return keys[key];
}

export const usePlayerControls = () => {
  const [movement, setMovement] = useState<MovementMap>({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSupportedKey(e.code)) return;

      const key = e.code as KeyType;
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(key)]: true,
      }));
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (!isSupportedKey(e.code)) return;

      const key = e.code as KeyType;
      setMovement((m) => ({
        ...m,
        [moveFieldByKey(key)]: false,
      }));
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return movement;
};
