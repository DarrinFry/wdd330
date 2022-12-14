//Import the other modules for deployment from this main file
import { dateUpdate} from "./lastModified.js";
import { menu } from "./menu.js";
import { mathSubmit, onLoadMarket  } from "./math.js";
import { mySave, myLoad} from "./storeLocal.js";

menu();
dateUpdate();
onLoadMarket();

//Event listeners for various functions. 
document.getElementById('mathSubmit').addEventListener('click', mathSubmit);
document.getElementById('saveEstimate').addEventListener('click', mySave);
document.getElementById('loadProjects').addEventListener('click', myLoad);
