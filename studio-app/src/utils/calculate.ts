export const getDistanceOfTwoPoints = (
  x1: number,
  z1: number,
  x2: number,
  z2: number
) => {
  const dx = x1 - x2;
  const dz = z1 - z2;
  return Math.sqrt(dx * dx + dz * dz);
};
