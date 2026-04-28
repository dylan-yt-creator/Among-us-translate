const dictionary = {
  "I": "meep",
  "you": "yo",
  "sus": "shade",
  "kill": "zap",
  "report": "ping",
  "emergency meeting": "big ping"
};

function translateText() {
  const input = document.getElementById("inputText").value;

  const translated = input
    .toLowerCase()
    .split(" ")
    .map(word => dictionary[word] || word)
    .join(" ");

  document.getElementById("outputText").innerText = translated;
}
