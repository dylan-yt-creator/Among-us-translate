const dictionary = {
  "hello": "zarn",
  "world": "mok",
  "i": "ka",
  "love": "zir"
};

function translate(text) {
  return text
    .toLowerCase()
    .split(" ")
    .map(word => dictionary[word] || word)
    .join(" ");
}
