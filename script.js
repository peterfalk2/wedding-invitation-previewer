
//Hide all but the one background image that we want to see:
function show1() {
    document.getElementById('roses1')
           .style.display = "none";
    document.getElementById('leather')
            .style.display = "none";
    document.getElementById('blossom')
            .style.display = "none";
    document.getElementById('roses')
            .style.display = "block";
// Is there more succinct code for what follows?:
    document.querySelector(".words1").style.fontFamily = "cursive";
    document.querySelector(".words2").style.fontFamily = "cursive";
    document.querySelector(".words3").style.fontFamily = "cursive";
    document.querySelector(".words4").style.fontFamily = "cursive";
    document.querySelector(".words5").style.fontFamily = "cursive";
    document.querySelector(".words6").style.fontFamily = "cursive";
    document.querySelector(".words7").style.fontFamily = "cursive";

  }
  
  function show2() {
    document.getElementById('roses1')
            .style.display = "none";
    document.getElementById('blossom')
            .style.display = "none";
    document.getElementById('roses')
            .style.display = "none";
    document.getElementById('leather')
            .style.display = "block";
    document.querySelector(".words1").style.fontFamily = "'Courier New', Courier, monospace";
    document.querySelector(".words2").style.fontFamily = "'Courier New', Courier, monospace";
    document.querySelector(".words3").style.fontFamily = "'Courier New', Courier, monospace";
    document.querySelector(".words4").style.fontFamily = "'Courier New', Courier, monospace";
    document.querySelector(".words5").style.fontFamily = "'Courier New', Courier, monospace";
    document.querySelector(".words6").style.fontFamily = "'Courier New', Courier, monospace";
    document.querySelector(".words7").style.fontFamily = "'Courier New', Courier, monospace";
}
  
  function show3() {
    document.getElementById('roses1')
            .style.display = "none";
    document.getElementById('roses')
            .style.display = "none";
    document.getElementById('leather')
            .style.display = "none";
    document.getElementById('blossom')
            .style.display = "block";      
    document.querySelector(".words1").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    document.querySelector(".words2").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    document.querySelector(".words3").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    document.querySelector(".words4").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    document.querySelector(".words5").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    document.querySelector(".words6").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    document.querySelector(".words7").style.fontFamily = "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
}  
  
  
  document.getElementById(`firstName`).onkeyup = function () {
          let name1 = document.getElementById(`firstName`).value;
          document.getElementById(`firstName2`).innerText = name1;
// Selecting the first initial of the name (which is position 0) and display that or nothing (an empty string):
          document.getElementById(`Initials`).innerText = name1[0] || ``;     
  }
 

  
  document.getElementById(`secondName`).onkeyup = function () {
          let name1 = document.getElementById(`firstName`).value;
          let name2 = document.getElementById(`secondName`).value;
// name1 and name 2 are not to be empty strings:
          const a1 = name1 !== ``;
          const a2 = name2 !== ``;
// Both a1 and a2 must be true (i.e. both are not to be empty strings):   
          const A = (a1 && a2);

// So, using a Ternary Expression, (condition ? return if true : return if false;)
//if A is true, the first string is displayed and if A is false the second (empty) string is displayed:
          document.getElementById(`firstName2`).innerText = A ? `${name1} & ${name2}` : ``;
          document.getElementById(`Initials`).innerText = A ? `${name1[0]} & ${name2[0]}` : ``;
} 
   


   document.getElementById(`surname`).onkeyup = function () {
        let surname1 = document.getElementById(`surname`).value;
        document.getElementById(`surname2`).innerText = surname1;
  }

  document.getElementById(`weddingDate`).onkeyup = function () {
        let weddingDate1 = document.getElementById(`weddingDate`).value;
        document.getElementById(`weddingDate2`).innerText = weddingDate1;
  }

  document.getElementById(`weddingLocation`).onkeyup = function () {
        let weddingLocation1 = document.getElementById(`weddingLocation`).value;
        document.getElementById(`weddingLocation2`).innerText = weddingLocation1;
  }