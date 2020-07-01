export const getActiveMenu = (path) => {
  path = path.substring(1, path.length);
  path = path === "" ? "home" : path;
  return path;
};
