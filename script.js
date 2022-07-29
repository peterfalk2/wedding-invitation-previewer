function show1() {
    document.getElementById('roses1')
           .style.display = "none";
    document.getElementById('leather')
            .style.display = "none";
    document.getElementById('blossom')
            .style.display = "none";
    document.getElementById('roses')
            .style.display = "block";
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
          document.getElementById(`firstName2Initials`).innerText = name1[0];
  }
  

  
  document.getElementById(`secondName`).onkeyup = function () {
          let name1 = document.getElementById(`firstName`).value;
          let name2 = document.getElementById(`secondName`).value;
          document.getElementById(`firstName2`).innerText = `${name1} & ${name2}`;
          document.getElementById(`firstName2Initials`).innerText = `${name1[0]} & ${name2[0]}`;
          
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