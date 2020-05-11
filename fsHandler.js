const fileObjSample = { fileName: 'tmp', extension: 'txt' },
fs = require('fs')

function createFile (fileObj = fileObjSample) {
  try {
    return fs.createWriteStream(`${fileObj.fileName}.${fileObj.extension}`, { flags: 'a' })
  } catch (err) {
    console.error('Error during file creation')
    throw Error(err)
  }
}

function deleteFile (fileObj) {
  try {
    fs.unlinkSync(`${fileObj.fileName}.${fileObj.extension}`)
  } catch (err) {
    console.error('Error during file deletion')
    return false
  }
}

function writeFile (file = this.createFile(fileObjSample), data = 'Test') {
  try {
    file.write(data)
  } catch (err) {
    console.error('Error while writing to file')
    throw Error(err)
  }
}
function readFile (fileObj) {
  try {
    return fs.createReadStream(`${fileObj.fileName}.${fileObj.extension}`)
  } catch (err) {
    console.error('Error during file lecture')
    throw Error(err)
  }
}

module.exports = {
  createFile,
  deleteFile,
  writeFile,
  readFile,
}
