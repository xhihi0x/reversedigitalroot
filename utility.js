/* global alert*/

//utility scripts


//replace with
function replace(str, index, character) {
    alert("original str " + str);
    alert("replace called");
   str =  str.substr(0, index) + character + str.substr(index + 1 + character.length);
    alert("end str " + str);
return str;
}