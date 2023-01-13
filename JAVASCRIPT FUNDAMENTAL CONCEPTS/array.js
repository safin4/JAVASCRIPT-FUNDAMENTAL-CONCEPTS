var friendsAge = [15, 17, 14, 16];
console.log(friendsAge);
console.log(friendsAge[3]);

var position = friendsAge.indexOf(140);
console.log(position);

friendsAge.push(18);
friendsAge.push(20);
friendsAge.push(21);
console.log(friendsAge);
console.log(friendsAge.length);

friendsAge.pop();
console.log(friendsAge);

var teaLine = ['Safin', 'Rayhan', 'Sabbir', 'Imon', 'Rana'];
teaLine.push('Sazid');
console.log(teaLine);

teaLine.pop();
console.log(teaLine);

teaLine.shift();
console.log(teaLine);

teaLine.unshift('Hafsa');
console.log(teaLine);

var part = teaLine.slice(2, 5);
console.log(part);