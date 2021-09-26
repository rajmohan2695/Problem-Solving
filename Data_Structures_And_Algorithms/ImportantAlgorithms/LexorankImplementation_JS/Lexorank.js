const getByte = (char) => {
    return char.charCodeAt(0);
  };
  
  const getStringFromByte = (byte) => {
    return String.fromCharCode(byte);
  };
  
  const getCharFromIndex = (str, index, defaultChar) => {
    if (index >= str.length) {
      return defaultChar;
    }
    return getByte(str.charAt(index));
  };
  
  const getMidChar = (prev, next) => {
    return Math.floor((prev + next) / 2);
  };
  
  const MIN_CHAR = getByte("a");
  const MAX_CHAR = getByte("z");
  
  const insertRank = (prev, next) => {
    if (prev === "" || !prev) {
      prev = getStringFromByte(MIN_CHAR);
    }
    if (next === "" || !next) {
      next = getStringFromByte(MAX_CHAR);
    }
  
    let rank = "";
    let index = 0;
  
    while (true) {
      let prevChar = getCharFromIndex(prev, index, MIN_CHAR);
      let nextChar = getCharFromIndex(next, index, MAX_CHAR);
  
      if (prevChar === nextChar) {
        rank += getStringFromByte(prevChar);
        index++;
        continue;
      }
  
      let midChar = getMidChar(prevChar, nextChar);
      if (midChar === prevChar || midChar === nextChar) {
        rank += getStringFromByte(prevChar);
        index++;
        continue;
      }
  
      rank += getStringFromByte(midChar);
      break;
    }
  
    if (rank >= next) {
      return undefined;
    }
    return rank;
  };
  
  export { insertRank };
  