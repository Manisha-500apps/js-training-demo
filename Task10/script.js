function nonMutatingSplice(cities) {

    // Only change code below this line
    
    return cities.slice(0,3);
    
    // Only change code above this line
    
    }
    
    const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
    
    let x=nonMutatingSplice(inputCities);
    
    function getOutput() {
    
    document.getElementById("output1").innerText = "["+x+"]";
    
    }