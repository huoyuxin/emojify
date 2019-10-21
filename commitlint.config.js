const fs = require("fs");

const DEFAULT_FILE = "./gitemoji.json";

const defaultJson = fs.readFileSync(DEFAULT_FILE, "utf8").trim();
const emojis = JSON.parse(defaultJson);

console.log("emojify > emojis", emojis);

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      Object.keys(emojis)
      // ['add', 'mod', 'del', 'merge', 'fix', 'style', 'test', 'revert', 'refactor', 'docs']
    ]
  }
};
