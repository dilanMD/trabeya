// Make first character only capitalize
export const makeFirstLetterCapital = (text) => {
  let firstChar = text.slice(0, 1).toUpperCase();
  let remaining = text.slice(1, text.length);
  return `${firstChar}${remaining}`;
};
