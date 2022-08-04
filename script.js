
//Using "none" and "block" to hide all but the one background image that we want to see:
function show1() {
    document.getElementById(`leather`)
            .style.display = `none`;
    document.getElementById(`blossom`)
            .style.display = `none`;
    document.getElementById(`roses`)
            .style.display = `block`;
// Having a querySelector for each line of text individually means that I can leave the hidden text in the longer-height cursive font, so that the layout positioning changes only slightly.
    document.querySelector(`#initials`).style.fontFamily = `cursive`;
    document.querySelector(`#cordially`).style.fontFamily = `cursive`;
    document.querySelector(`#firstName2`).style.fontFamily = `cursive`;
    document.querySelector(`#secondName2`).style.fontFamily = `cursive`;
    document.querySelector(`#surname2`).style.fontFamily = `cursive`;
    document.querySelector(`#weddingDate2`).style.fontFamily = `cursive`;
    document.querySelector(`#weddingLocation2`).style.fontFamily = `cursive`;
  }

  function show2() {
    document.getElementById(`blossom`)
            .style.display = `none`;
    document.getElementById(`roses`)
            .style.display = `none`;
    document.getElementById(`leather`)
            .style.display = `block`;
    document.querySelector(`#initials`).style.fontFamily = `'Courier New', Courier, monospace`;
    document.querySelector(`#cordially`).style.fontFamily = `'Courier New', Courier, monospace`;
    document.querySelector(`#firstName2`).style.fontFamily = `'Courier New', Courier, monospace`;
    document.querySelector(`#secondName2`).style.fontFamily = `'Courier New', Courier, monospace`;
    document.querySelector(`#surname2`).style.fontFamily = `'Courier New', Courier, monospace`;
    document.querySelector(`#weddingDate2`).style.fontFamily = `'Courier New', Courier, monospace`;
    document.querySelector(`#weddingLocation2`).style.fontFamily = `'Courier New', Courier, monospace`;
}
  
  function show3() {
    document.getElementById(`roses`)
            .style.display = `none`;
    document.getElementById(`leather`)
            .style.display = `none`;
    document.getElementById(`blossom`)
            .style.display = `block`;      
    document.querySelector(`#initials`).style.fontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`;
    document.querySelector(`#cordially`).style.fontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`;
    document.querySelector(`#firstName2`).style.fontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`;
    document.querySelector(`#secondName2`).style.fontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`;
    document.querySelector(`#surname2`).style.fontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`;
    document.querySelector(`#weddingDate2`).style.fontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`;
    document.querySelector(`#weddingLocation2`).style.fontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif`;
}  
  
  
  document.getElementById(`firstName`).onkeyup = function () {
          let name1 = document.getElementById(`firstName`).value;
          document.getElementById(`firstName2`).innerText = name1;
// Selecting the first initial of the name (which is position 0) and display that or an empty string (nothing):
          document.getElementById(`initials`).innerText = name1[0] || ``;     
  }
 

  document.getElementById(`secondName`).onkeyup = function () {
          let name1 = document.getElementById(`firstName`).value;
          let name2 = document.getElementById(`secondName`).value;
//With the addition of a second name, if a name was deleted, the word "undefined" would be displayed on the webpage.
// name1 and name 2 are not to be empty strings:
          const a1 = name1 !== ``;
          const a2 = name2 !== ``;
// Both a1 and a2 must not to be empty strings):   
          const A = (a1 && a2);

// So, using a Ternary Expression, (condition ? return if true : return if false;)
//if A is true (ie BOTH name1 and name 2 are NOT empty strings), the first string is displayed and if A is false the second (empty) string is displayed. 
          document.getElementById(`firstName2`).innerText = A ? `${name1} & ${name2}` : ``;
          document.getElementById(`initials`).innerText = A ? `${name1[0]} & ${name2[0]}` : ``;
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