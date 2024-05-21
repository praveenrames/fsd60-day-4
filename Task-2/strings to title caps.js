const toTitleCase = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

const convertToTitleCaps = arr => arr.map(toTitleCase);


const strings = ["hello world", "this is a test", "javascript is fun"];
const titleCapsStrings = convertToTitleCaps(strings);
console.log(titleCapsStrings); 
