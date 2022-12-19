function rot13(str) {
    let a = 0;
    let strArr = [];
    strArr = str.split(""); // split the string into array
    for (let i = 0; i < strArr.length; i++) {
      a = strArr[i].charCodeAt();
      if (a >= 65 && a <= 90) {
        if (a > 77) {
          a = a - 13;
        }
        else {
          a = a + 13;
        }
  
        strArr.splice(i,1,String.fromCharCode(a));
      }
    }
    return strArr.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));

  
  function getOutput(){
	document.getElementById("output").innerText=(rot13("SERR PBQR PNZC"));

}

