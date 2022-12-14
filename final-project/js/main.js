import { dateUpdate} from "./lastModified.js";
import { menu } from "./menu.js";
import { mathSubmit, onLoadMarket  } from "./math.js";
import { mySave, myLoad} from "./storeLocal.js";

menu();
dateUpdate();
onLoadMarket();



var volumeNumber = parseFloat(document.getElementById("volumeNumber").value);
var diamondMeleeCTW = parseFloat(document.getElementById("diamondMeleeCTW").value);
var stoneCount = parseFloat(document.getElementById("stoneCount").value);
var otherStones = parseFloat(document.getElementById("otherStones").value);
var otherLabor = parseFloat(document.getElementById("otherLabor").value);

document.getElementById('mathSubmit').addEventListener('click', mathSubmit);
document.getElementById('saveEstimate').addEventListener('click', mySave);
document.getElementById('loadProjects').addEventListener('click', myLoad);
