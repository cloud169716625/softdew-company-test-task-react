const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, '../build/index.html'), 'utf-8');
const newData = data
  .replace('<base href="./">', '<base href="/waiting-list/">')
  .replace(/\.\//g, '/waiting-list/');
fs.writeFileSync(path.join(__dirname, '../build/index.html'), newData, 'utf-8');
