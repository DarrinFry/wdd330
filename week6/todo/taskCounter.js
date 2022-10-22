      
export default function numTasksLeft() {
    const tasksLeft = document.querySelector("#numTasksLeft");
    let liveTasks = document.getElementsByClassName("active").length;
    let counter = 0;
    if (liveTasks) {
        for (let i = 0; i < liveTasks.length; i++) {
            if (liveTasks[i].completed === false) {
                counter++;
            }
        }
        if (counter !== 1) {
            tasksLeft.innerHTML = `${liveTasks} Tasks Left`;
            } else {
                tasksLeft.innerHTML = `${liveTasks} Task Left`;
                }
    } else {
        tasksLeft.innerHTML = `0 Tasks Left`;
    }
    console.log("NumTasksLeft Clicked");
    console.log(liveTasks -1);
}

