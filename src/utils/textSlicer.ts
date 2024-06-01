const textSlicer = (text: string, limit: number) => {
  if (text.length > limit) {
    return `${text.slice(0, limit - 1)}...`;
  } else {
    return text;
  }
};

export default textSlicer;
