let fixedValue = 4;

function incrementer() {
  // Only change code below this line
for(let i=0;i<=fixedValue;i++)
  return fixedValue+1;
}
incrementer();
  console.log(incrementer(fixedValue));


  // Only change code above this line
  function getOutput() {
    document.getElementById("output").innerHTML =incrementer(fixedValue);
   
}