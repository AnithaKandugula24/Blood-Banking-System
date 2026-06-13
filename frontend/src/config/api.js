const baseUrl = (process.env.REACT_APP_BASE_URL || '/').trim();

const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

export const buildApiUrl = (endpointPath) => {
  const normalizedEndpointPath = String(endpointPath || '').replace(/^\/+/, '');
  return `${normalizedBaseUrl}${normalizedEndpointPath}`;
};
