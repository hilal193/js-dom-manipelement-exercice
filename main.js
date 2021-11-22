
// 1
// let myBody = document.getElementsByTagName("body");
// ou
let myBody = document.body;
console.log(myBody);


// 2
let first = myBody.firstElementChild;
console.log(first);

// 3
let last = myBody.lastElementChild;
console.log(last);

// 4
let exo4 = document.getElementsByTagName("div")[0];
let test = exo4.children;
console.log(test);

// 5
let lipremier = document.getElementsByTagName("li")[0];
let next = lipremier.nextElementSibling;
console.log(next);

// 6
let previous = next.previousElementSibling;
console.log(previous);






