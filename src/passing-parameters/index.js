#! /usr/bin/env node

"use strict"

const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
console.log(args);


// another package that we can use for this is "yargs"
