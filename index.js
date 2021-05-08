const fs = require("fs");
const asciidoc = require("asciidoctor");
const args = process.argv.slice(2);

if (!args[0]) {
    console.log("Usage:");
    console.log("node " + process.argv[1] + " [file]");
    return -1;
}


const text = fs.readFileSync(args[0], "utf-8");
const processer = asciidoc();
const html = processer.convert(text);
console.log(html);
