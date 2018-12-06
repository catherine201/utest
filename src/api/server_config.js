function resolveIp() {
  const mode = process.env.NODE_ENV.trim();
  if (mode === 'development') {
    return '';
  }
  return 'http://0.0.0.0';
}
export const serverIpAddress = resolveIp();
