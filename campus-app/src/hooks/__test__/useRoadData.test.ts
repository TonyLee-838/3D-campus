import { IRoad } from '../../types';
import { useRoadData, isOrthogonal, hasIntersection } from '../useRoadData';

describe('useRoadData.ts', () => {
  describe('useRoadData hook', () => {
    it('tests the calculation of rotation and position..', () => {
      const testData = [
        { from: [0, 0], to: [30, 0], expectedLength: 1, expectedRotationY: 0 },
        { from: [0, 0], to: [10, 0], expectedLength: 1, expectedRotationY: 0 },
        { from: [0, 0], to: [70, 0], expectedLength: 3, expectedRotationY: 0 },
        { from: [0, 0], to: [0, 70], expectedLength: 3, expectedRotationY: Math.PI / 2 },
        { from: [0, 0], to: [30, 40], expectedLength: 2, expectedRotationY: 0.93 },
      ];

      const roadLength = 30;

      testData.forEach((data) => {
        const { length, rotationY } = useRoadData(
          data.from as [number, number],
          data.to as [number, number],
          roadLength
        );

        expect(length).toBe(data.expectedLength);
        expect(rotationY.toFixed(2)).toBe(data.expectedRotationY.toFixed(2));
      });
    });
  });

  describe('hasIntersection function', () => {
    it("checks to see if there's an intersection between the given two roads.", () => {
      const lengthwise = { from: [80, 40], to: [80, 150] } as IRoad;
      const widthwise = { from: [20, 90], to: [170, 90] } as IRoad;

      const result = hasIntersection(lengthwise, widthwise);
      const reversedResult = hasIntersection(widthwise, lengthwise);

      expect(result).toBe(true);
      expect(reversedResult).toBe(false);
    });
  });

  describe('isOrthogonal function', () => {
    let testRoad1: IRoad;
    let testRoad2: IRoad;

    beforeEach(() => {
      testRoad1 = { from: [80, 40], to: [80, 150] };
      testRoad2 = { from: [20, 90], to: [20, 180] };
    });

    it('returns true when both the input roads data are orthogonal.', () => {
      const result = isOrthogonal(testRoad1, testRoad2);

      expect(result).toBe(true);
    });

    it('returns false when the input roads are not orthogonal.', () => {
      testRoad1 = { from: [80, 40], to: [80, 150] };
      testRoad2 = { from: [20, 20], to: [120, 20] };
      const result = isOrthogonal(testRoad1, testRoad2);
      expect(result).toBe(false);
    });
  });
});

export {};
