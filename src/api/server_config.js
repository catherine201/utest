function resolveIp() {
  const mode = process.env.NODE_ENV.trim();
  if (mode === 'development') {
    return 'http://localhost:3333';
  }
  return 'http://localhost:3333';
}
export const serverIpAddress = resolveIp();
