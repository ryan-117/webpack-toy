var html = require('./example.html')
const arr = html.split('2');
arr.splice(1, 0, '<span>5</span>')
const result = arr.join('');
console.log(result, 6)
document.write(result)