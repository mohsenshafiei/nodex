const fs = require('fs');

//create file
fs.writeFile(
  'example.txt',
  'this is a sample sentence',
  (err) => {
    if (err) console.log(err);
    else {
      console.log('File Successfully Created!');
      // read file
      fs.readFile('example.txt', 'utf8', (err, file) => {
        if (err) console.log(err);
        else {
          console.log(file);
        }
      })
    }
  }
)

// renaming file
fs.rename('example.txt', 'newExample.txt', (err) => {
  if (err) console.log(err);
  else console.log('Successfully Renamed');
})

// appending file
fs.appendFile('newExample.txt', '\nsome new data', (err) => {
  if (err) console.log(err)
  else console.log('Successfully appended to file.');
})

// delete file
fs.unlink('newExample.txt', (err) => {
  if (err) console.log(err);
  else console.log('Successfully deleted!');
})

// creating folder
fs.mkdir('example', (err) => {
  if (err) console.log(err);
  else console.log('Directory successfully created!');
})

// removing folder
fs.rmdir('example', (err) => {
  if (err) console.log(err);
  else console.log('Successfully directory deleted!');
})

// create new file in a directory
fs.mkdir('newDirectory', (err) => {
  if (err) console.log(err);
  else {
    fs.writeFile('./newDirectory/newData.txt', 'Hello World', (err) => {
      if (err) console.log(err)
      else console.log('Successfully created!')
    })
  }
})

// removing directory: Note: first you should delete the files inside directory
fs.unlink('./newDirectory/newData.txt', (err) => {
  if (err) console.log(err);
  else {
    fs.rmdir('newDirectory', (err) => {
      if (err) console.log(err);
      else console.log('Successfully directory deleted!');
    })
  }
})

fs.readdir('newDirectory', (err) => {
  if (err) console.log(err)
})
