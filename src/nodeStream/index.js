const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example2.txt.gz')
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();


readStream.on('data', (chunk) => {
  writeStream.write(chunk);
  console.log(chunk);
})

// will do the same thing and
readStream.pipe(writeStream);

// it also compressed
readStream.pipe(gzip).pipe(writeStream);

// it uncompressed
readStream.pipe(gunzip).pipe(writeStream);
