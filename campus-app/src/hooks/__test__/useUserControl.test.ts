import renderer from '@react-three/test-renderer';
import { usePlayerControls, isSupportedKey, moveFieldByKey } from '../useUserControl';

describe('useUserControl.ts', () => {
  describe('isSupportedKey function', () => {
    it('returns true when supported key is passed.', () => {
      const supportedKeys = ['KeyA', 'Space'];

      supportedKeys.forEach((key) => {
        expect(isSupportedKey(key)).toBeTruthy();
      });
    });
    it('returns false when unsupported key is passed.', () => {
      const supportedKeys = ['keyA', 'KeyE'];

      supportedKeys.forEach((key) => {
        expect(isSupportedKey(key)).toBeFalsy();
      });
    });
  });

  describe('moveFieldByKey function', () => {
    it('should return the corresponding key movement.', () => {
      const result = moveFieldByKey('KeyA');

      expect(result).toEqual('moveLeft');
    });
  });
});

export {};
