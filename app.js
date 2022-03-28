 //GLOBAL VARIABLES 
 const btn = document.querySelector('button');
 const input = document.querySelector('#binaryNumber').value;

 //ADD EVENT LISTEN TO THE BUTTON
 btn.addEventListener('click', binaryAgent)

 //MAIN FUNCTION OF THE APPLICATION
 function binaryAgent() {

     //       TAKE THE CLIENT INPUT 
     const input = document.querySelector('#binaryNumber').value;
     var biString = input.split(" ");
     var uniString = [];

     /*using the radix (or base) parameter in parseInt, we can convert the binary
         number to a decimal number while simultaneously converting to a char*/

     for (var i = 0; i < biString.length; i++) {
         uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
     }
     // console.log(decodeURIComponent(JSON.parse('"' + uniString.replace(/\"/g, '\\"') + '"')))

     console.log(uniString.join(""))
     // we then simply join the string
     // console.log(decodeURIComponent(JSON.parse('"' + uniString.replace(/\"/g, '\\"') + '"')))
     document.getElementById('output').innerHTML = `<br><p>Result :${uniString.join("")}</p>`;
     return uniString.join("");

 }
