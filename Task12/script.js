function nonMutatingPush(original, newItem) {
    // Only change code below this line
    return original.concat(newItem);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  var s=nonMutatingPush(first, second);
  console.log(s);
  function getOutput() {
    document.getElementById("output1").innerText = "["+s+"]";
  }