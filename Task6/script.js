// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList,bookName) {
  let d=[...bookList];
  d.push(bookName);
   return d;
}
  
  // Change code above this line


// Change code below this line
function remove(bookList,bookName) {
  let d1=[...bookList];
 
  
  const book_index = d1.indexOf(bookName);
  if (book_index >= 0) {

    d1.splice(book_index, 1);
    return d1;

    // Change code above this line
    }
}
let a=add(bookList,"A Brief History of Time");
console.log(a);
let b=remove( bookList,"On The Electrodynamics of Moving Bodies");
console.log(b);
var c = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(c);
function getOutput() {
    document.getElementById("output1").innerHTML =a;
    document.getElementById("output2").innerHTML =b;
        document.getElementById("output3").innerHTML =c;
        
       
    }
