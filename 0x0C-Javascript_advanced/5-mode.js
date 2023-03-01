function changeMode (size, weight, transform, background, color){
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };

  function main(){
    let spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = () => changeMode(12, "normal", "lowercase", "white", "black");


    document.getElementById("spooky").addEventListener("click", () => spooky());
    document.getElementById("dark").addEventListener("click", () => darkMode());
    document.getElementById("scream").addEventListener("click", () => screamMode());
  };
  
  main();


