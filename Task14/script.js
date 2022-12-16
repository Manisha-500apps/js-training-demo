function splitify(str) {
    // Only change code below this line
   
    return str.split(/\W/);
    
  
    
  
  
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));
  console.log(splitify("Earth-is-our home"));
  console.log(splitify("This.is.a-sentence"));
  //let arr=[a];
  //let arr1=[b];
  //let arr2=[c];
  function getOutput() {
    document.getElementById("output1").innerText = "["+(splitify("Hello World,I-am code"))+"]";
    document.getElementById("output2").innerText ="["+(splitify("Earth-is-our home"))+"]";
    document.getElementById("output3").innerText = "["+(splitify("This.is.a-sentence"))+"]";
  }