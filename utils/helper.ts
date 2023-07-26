const shorter = (text: string) => {
  const splitedText = text.split(" ");
  const result = ` ${splitedText[0]} ${splitedText[1]} ${splitedText[2]} `;
  return result;
};

export { shorter };
