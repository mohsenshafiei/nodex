#! /usr/bin/env node

"use strict"

const util = require('util');
const getStdin = require('get-stdin');
const minimist = require("minimist");
const fs = require('fs');
const path = require('path');

var args = minimist(process.argv.slice(2), {
  boolean: ["help", "in"],
  string: [ "file" ]
});

if (args.help) {
  console.log("print help");
}
if (args.in || args._.includes("_")) {
  getStdin().then((content) => process.stdout.write(content)).catch();
}
if (args.file) {
  console.log('mohsen');
    fs.readFile( path.resolve(args.file), (err, content) => {
      if (err) {
        console.log(err.toString());
      } else {
        processFile(content.toString());
      }
    });
}

const processFile = (content) => {
  process.stdout.write(content.toUpperCase());
}
