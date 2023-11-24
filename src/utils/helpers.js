const splitStringIntoLines = (str, lineLength) => {
  const words = str.split(' ');
  let currentLine = '';
  const lines = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (currentLine.length + word.length <= lineLength) {
      currentLine += (currentLine.length === 0 ? '' : ' ') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines;
}

export { splitStringIntoLines }