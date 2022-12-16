function checkPositive(arr) {

    // Only change code below this line
    
    return arr.some(val => val>0)
    
    // Only change code above this line
    
    }
    
    let a=checkPositive([1, 2, 3, -4, 5]);
    
    
    
    function getOutput() {
    
    
    document.getElementById("output").innerHTML =a;
    
    }