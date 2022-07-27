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
          document.getElementById(`firstName2`).innerText = name1;
          document.getElementById(`firstName2Initials`).innerText = name1[0];
  }
  

  
  document.getElementById(`secondName`).onkeyup = function () {
          let name1 = document.getElementById(`firstName`).value;
          let name2 = document.getElementById(`secondName`).value;
          document.getElementById(`firstName2`).innerText = `${name1} & ${name2}`;
          document.getElementById(`firstName2Initials`).textContent = `${name1[0]} & ${name2[0]}`;
          
  }
  


