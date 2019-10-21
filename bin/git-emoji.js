#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const commander = require("commander");

const DEFAULT_FILE = "../gitemoji.json";

commander.option("-p, --path <path>", "input emojis path");
commander.parse(process.argv);

const defaultJson = fs
  .readFileSync(path.resolve(__dirname, DEFAULT_FILE), "utf8")
  .trim();
const default_emojis = JSON.parse(defaultJson);
let option_emojis;

if (commander.path) {
  const configJson = fs
    .readFileSync(path.resolve(commander.path, DEFAULT_FILE), "utf8")
    .trim();
  option_emojis = JSON.parse(configJson);
}
const emojis = option_emojis || default_emojis;

const {
  env: { HUSKY_GIT_PARAMS, GIT_PREFIX, PWD }
} = process;

const relativePath = path.relative(GIT_PREFIX, PWD);
const messagePath = path.resolve(relativePath, HUSKY_GIT_PARAMS);

const message = fs.readFileSync(messagePath, "utf8").trim();

const reg = new RegExp(`(${Object.keys(emojis).join("|")}):`, "g");
const result = message.replace(reg, (p1, p2) => `\n${p1} ${emojis[p2]}`);

fs.writeFileSync(messagePath, result, { encoding: "utf-8" });

console.log("emojify > success ----😀😀😀----");
