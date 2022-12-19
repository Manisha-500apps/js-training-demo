var a=[1,1,2,5,2];
Array.prototype.myMap = function(callback) {
  
  const newArray = [];
  // Only change code below this line
   for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  // Only change code above this line
  return newArray;
};
var b=a.myMap(function(item){
  return item*2;
});
console.log(b);

function getOutput() {
    
    document.getElementById("output").innerText=b;
    
    }