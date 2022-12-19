var s=[1,1,2,5,2];
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this)) === true) {
      newArray.push(this[i]);
    }
  }
 // Only change code above this line
  return newArray;
};
var new_s=s.myFilter(function(item){
  return item%2===1;
});
console.log(new_s);

function getOutput() {
    
    document.getElementById("output").innerText=new_s;
    
    }