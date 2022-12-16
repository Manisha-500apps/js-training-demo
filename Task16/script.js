function checkPositive(arr) {

    // Only change code below this line
    
    return arr.every(val => val > 0);
    
    // Only change code above this line
    
    }
    
    //const numbers=[1,2,3,-4,5]
    
    let a=checkPositive([1, 2, 3, -4, 5]);
    
    function getOutput() {
    
    document.getElementById("output").innerText=a;
    
    }