#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const commander = require("commander");
const default_emojis = require("./config");

commander.option("-p, --path", "input emojis path");
program.parse(process.argv);

if (program.path) {
  console.log("emojify > program.path", program.path);
}
process.emit(1);

const {
  argv,
  env: { HUSKY_GIT_PARAMS, GIT_PREFIX, PWD }
} = process;

const emojis = option_emojis || default_emojis;
const relativePath = path.relative(GIT_PREFIX, PWD);
const messagePath = path.resolve(relativePath, HUSKY_GIT_PARAMS);

const message = fs.readFileSync(messagePath, "utf8").trim();
const messageArr = message.split(":");
const type = messageArr[0];
const body = messageArr[1];
const result = `${type}: ${emojis[type]}${body}`;

fs.writeFileSync(messagePath, result, { encoding: "utf-8" });

console.log("emojify > success ----😀😀😀----");
