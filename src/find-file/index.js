var path = require("path");
var fs = require("fs");

function recFindByExt(base, ext, files = [], result) {
  files = files.length ? files : fs.readdirSync(base);
  result = result || [];
  files.forEach(function (file) {
    var newbase = path.join(base, file);
    if (fs.statSync(newbase).isDirectory()) {
      result = recFindByExt(newbase, ext, fs.readdirSync(newbase), result);
    } else {
      if (file === ext) {
        result.push(newbase);
      }
    }
  });
  return result;
}


ext_file_list = recFindByExt(process.cwd(), "package.json");
for (let i = 0; i < ext_file_list.length; i++) {
  console.log(ext_file_list[i]);
  let rawdata = fs.readFileSync(ext_file_list[i]);
  console.log(rawdata);
  let processed = JSON.parse(rawdata);
  console.log(processed);
}
