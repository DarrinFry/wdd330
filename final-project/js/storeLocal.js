import {mathSubmit} from "./math.js";



export function mySave() {
    var volumeNumber = parseFloat(document.getElementById("volumeNumber").value);
    var diamondMeleeCTW = parseFloat(document.getElementById("diamondMeleeCTW").value);
    var stoneCount = parseFloat(document.getElementById("stoneCount").value);
    var otherStones = parseFloat(document.getElementById("otherStones").value);
    var otherLabor = parseFloat(document.getElementById("otherLabor").value);
    var customerName = document.getElementById("customerName").value;
    
    console.log('mySave called');
    
    var myContent = `Customer: ${customerName} \nVolume: ${volumeNumber}  \nDiamond Melee CTW: ${diamondMeleeCTW}  \nStone Count: ${stoneCount}  \nOther Stones: ${otherStones}  \nOther Labor: ${otherLabor}`;
    localStorage.setItem("myContent", myContent);
    console.log(myContent);
}


export function myLoad() {
    console.log("myload called");
var myContent = localStorage.getItem("myContent");
document.getElementById("loadOutputDiv").innerHTML = myContent;
}
