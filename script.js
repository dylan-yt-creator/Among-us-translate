const dictionary = {
  // Core words
  "i": "meep",
  "you": "yo",
  "sus": "shade",
  "suspicious": "shade",
  "kill": "zap",
  "report": "ping",
  "safe": "clean",
  "die": "ghost",
  "died": "ghost",

  // Phrases
  "emergency meeting": "big ping",
  "call emergency meeting": "big ping now",
  "let's vote": "big ping now",

  // Basic chat
  "yes": "yeep",
  "no": "nopeep",
  "where": "whop?",
  "who": "whop yo?",

  // Ghost mode
  "ghost": "shadeform",
  "see": "echo-see",
  "talk": "whisperlink",
  "move": "floatstep",
  "follow": "trailghost",
  "watch": "scanfade",

  // Game terms
  "task": "fixbit",
  "sabotage": "glitch"
};

function translateText() {
  let input = document.getElementById("inputText").value.toLowerCase();

  // Phrase replacements first
  const phrases = {
    "emergency meeting": "big ping",
    "call emergency meeting": "big ping now",
    "let's vote": "big ping now",
    "sabotaged reactor": "reactor glitch",
    "sabotaged o2": "o2 glitch"
  };

  for (let phrase in phrases) {
    input = input.replaceAll(phrase, phrases[phrase]);
  }

  // Then word-by-word
  const translated = input
    .split(" ")
    .map(word => dictionary[word] || word)
    .join(" ");

  document.getElementById("outputText").innerText = translated;
}
