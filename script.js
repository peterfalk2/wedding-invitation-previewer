function show1() {
    document.getElementById('clouds1')
           .style.display = "none";
    document.getElementById('leather')
            .style.display = "none";
    document.getElementById('leaves')
            .style.display = "none";
    document.getElementById('clouds')
            .style.display = "block";
  }
  
  function show2() {
    document.getElementById('clouds1')
            .style.display = "none";
    document.getElementById('leaves')
            .style.display = "none";
    document.getElementById('clouds')
            .style.display = "none";
    document.getElementById('leather')
            .style.display = "block";
  }
  
  function show3() {
    document.getElementById('clouds1')
            .style.display = "none";
    document.getElementById('clouds')
            .style.display = "none";
    document.getElementById('leather')
            .style.display = "none";
    document.getElementById('leaves')
            .style.display = "block";      
   
  }  
  
  
  document.getElementById(`firstName`).onkeyup = function () {
          let stringValue1 = document.getElementById(`firstName`).value;
          document.getElementById(`firstName2`).textContent = stringValue1;
         // console.log(stringValue1)
  }
  
  /*
  const name = ``;
  const message = & ${name};
  */
  
  document.getElementById(`secondName`).onkeyup = function () {
          let stringValue2 = document.getElementById(`secondName`).value;
          document.getElementById(`firstName2`).textContent = stringValue2;
          //console.log(`&` );
  }
  