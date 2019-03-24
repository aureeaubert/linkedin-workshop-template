const fs = require('fs');

/**
 * Read file content
 */
const readFile = (filename, encoding) => {
  try {
    return fs.readFileSync(filename, encoding);
  } catch (e) {
    return null;
  }
};

/**
 * Write a given object in a file
 */
const writeInFile = (filename, object) => {
  fs.writeFileSync(filename, JSON.stringify(object, null, 2));
};

/**
 * Login to LinkedIn
 */
const loginToLinkedIn = async (browser, sessionCookie) => {
  throw new Error("CODE NEEDS TO BE IMPLEMENTED");
};

module.exports = {
  readFile,
  writeInFile,
  loginToLinkedIn,
};
