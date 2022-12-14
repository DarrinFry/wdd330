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
    localStorage.setItem("volumeNumber", volumeNumber);
    localStorage.setItem("diamondMeleeCTW", diamondMeleeCTW);
    localStorage.setItem("stoneCount", stoneCount);
    localStorage.setItem("otherStones", otherStones);
    localStorage.setItem("otherLabor", otherLabor);
    localStorage.setItem("customerName", customerName);

    console.log(myContent);
}



export function myLoad() {
    console.log("myload called");
    var volumeNumber = parseFloat(localStorage.getItem("volumeNumber"));
    var diamondMeleeCTW = parseFloat(localStorage.getItem("diamondMeleeCTW"));
    var stoneCount = parseFloat(localStorage.getItem("stoneCount"));
    var otherStones = parseFloat(localStorage.getItem("otherStones"));
    var otherLabor = parseFloat(localStorage.getItem("otherLabor"));
    var customerName = localStorage.getItem("customerName");
    var myContent = localStorage.getItem("myContent");

    document.getElementById("loadOutputDiv").innerHTML = myContent;

    document.getElementById("volumeNumber").value = volumeNumber;
    document.getElementById("diamondMeleeCTW").value = diamondMeleeCTW;
    document.getElementById("stoneCount").value = stoneCount;
    document.getElementById("otherStones").value = otherStones;
    document.getElementById("otherLabor").value = otherLabor;
    document.getElementById("customerName").value = customerName;
    console.log (stoneCount)
}
