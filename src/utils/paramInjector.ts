export const paramInjector = (endpoint: string, params: string | number) => {
  return `${endpoint}/${params}`;
};
