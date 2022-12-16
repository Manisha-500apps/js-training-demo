function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort(function(a,b){
      return a === b ? 0 : a < b ? -1 : 1;
    });
    // Only change code above this line
  }
  
  var a=alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
  var b=alphabeticalOrder(["x", "h", "a", "m", "n", "m"]);
  var c=alphabeticalOrder(["a", "a", "a", "a", "x", "t"]);
  console.log(a);
  console.log(b);
  console.log(c);
  function getOutput() {
    document.getElementById("output1").innerHTML ="["+ a+"]";
    document.getElementById("output2").innerHTML ="["+b+"]";
    document.getElementById("output3").innerHTML ="["+c+"]";
}