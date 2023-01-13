var student1 = { id : 121, phone : 1745, name : "Safin"};
var student2 = { id : 131, phone : 457, name : "Hafsa"};

var phonePropName = "phone";
var phoneNo1 = student1.phone;
var phoneNo2 = student1["phone"];
var phoneNo3 = student1[phonePropName];

student2.phone = 547854;
student2["phone"] = 666888;
student2[phonePropName] = 99991111;

student2.cinema = "ogni22";
student2["cinema"] = "Smart girl";

console.log(phoneNo1);
console.log(student2);