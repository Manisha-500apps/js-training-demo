// Only change code below this line
function urlSlug(title) {
    //function urlSlug(title) {
    return title
      .split(" ")
      .filter(substr => substr !== "")
      .join("-")
      .toLowerCase();
    }
  
  // Only change code above this line
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));

  function getOutput() {
    
    document.getElementById("output").innerText=(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
    
    }