#!/usr/bin/env node

const fs = require("fs")
console.log("hello init !!!!!");

const json = JSON.stringify({
  name: "foo"
}, null, 2)
fs.writeFileSync("package.json", json)