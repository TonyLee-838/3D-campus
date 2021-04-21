const PORT = 8086;

export const getPublicPath = () => `http://${location.hostname}:${PORT}/public`;
