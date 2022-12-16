function sliceArray(anim, beginSlice, endSlice) {

    // Only change code below this line
    
    return anim.slice(beginSlice,endSlice);
    
    // Only change code above this line
    
    }
    
    const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
    
    let a=[sliceArray(inputAnim, 1, 3)];
    
    let b=sliceArray(inputAnim,0,1);
    
    let c=sliceArray(inputAnim,1,4);
    
    function getOutput() {
    
    document.getElementById("output1").innerHTML ="["+a+"]";
    
    document.getElementById("output2").innerHTML ="["+b+"]";
    
    document.getElementById("output3").innerHTML ="["+c+"]";
    
    }