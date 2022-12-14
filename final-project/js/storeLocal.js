
//These functions will save and recall the users input data so that estimates can be stored and recalculated as needed.
export function mySave() {     
    //Log to the console to confirm that it has been called.   
    console.log('mySave called');
    //set variables.
    var volumeNumber = parseFloat(document.getElementById("volumeNumber").value);
    var diamondMeleeCTW = parseFloat(document.getElementById("diamondMeleeCTW").value);
    var stoneCount = parseFloat(document.getElementById("stoneCount").value);
    var otherStones = parseFloat(document.getElementById("otherStones").value);
    var otherLabor = parseFloat(document.getElementById("otherLabor").value);
    var customerNameInput = document.getElementById("customerName").value;
    var customerName = customerNameInput.toUpperCase();
    //assign the variables into a string
    var myContent = [customerName, volumeNumber, diamondMeleeCTW, stoneCount, otherStones, otherLabor];
    localStorage.setItem(customerName, JSON.stringify(myContent));
    localStorage.setItem("volumeNumber", volumeNumber);
    localStorage.setItem("diamondMeleeCTW", diamondMeleeCTW);
    localStorage.setItem("stoneCount", stoneCount);
    localStorage.setItem("otherStones", otherStones);
    localStorage.setItem("otherLabor", otherLabor);
    localStorage.setItem("customerName", customerName);
    //Log to the console the content to verify if needed.
    console.log(myContent);
}

export function myLoad() {
    //Log to the console to confirm that it has been called. 
    console.log("myLoad called");

    var searchNameInput = document.getElementById("searchInput").value;
    var searchName = searchNameInput.toUpperCase();
    console.log(searchName);
    var searchHTML = JSON.parse(localStorage.getItem(searchName));
    console.log(searchHTML);
    //set variables.
    //if the search has nothing or doesn't match, say one thing. Otherwise, say another.
    if (searchHTML != null) {
        var volumeNumber = searchHTML[1];
        var diamondMeleeCTW = searchHTML[2];
        var stoneCount = searchHTML[3];
        var otherStones = searchHTML[4];
        var otherLabor = searchHTML[5];
        var customerName = searchHTML[0];
        var myContent = localStorage.getItem("myContent");
        //send the values into the data input form.
        document.getElementById("volumeNumber").value = volumeNumber;
        document.getElementById("diamondMeleeCTW").value = diamondMeleeCTW;
        document.getElementById("stoneCount").value = stoneCount;
        document.getElementById("otherStones").value = otherStones;
        document.getElementById("otherLabor").value = otherLabor;
        document.getElementById("customerName").value = customerName;
        document.getElementById("searchOutput").innerHTML= `Your data has been repopulated in the form. Thank you. ${searchHTML}`;
    } else {
        document.getElementById("searchOutput").innerHTML="Your name could not be found. Please try again.";
    }
}
