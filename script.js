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
          let name1 = document.getElementById(`firstName`).value;
          document.getElementById(`firstName2`).textContent = name1;
  }
  

  
  document.getElementById(`secondName`).onkeyup = function () {
          let name1 = document.getElementById(`firstName`).value;
          let name2 = document.getElementById(`secondName`).value;
          document.getElementById(`firstName2`).innerText = `${name1} & ${name2}`
          
  }
  