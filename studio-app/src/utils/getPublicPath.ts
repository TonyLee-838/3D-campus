const PORT = 8082;

export const getPublicPath = () => `http://${location.hostname}:${PORT}/public`;
