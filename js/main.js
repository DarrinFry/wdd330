
//Set up the link list for each week and the index
//FUTURE WEEKS ARE ALREADY IN FOR TESTING AND TO MAKE LIFE EASIER IN THE FUTURE
const links = [
    {label: "Week 1 notes",url: "week1/index.html"},
    {label: "Week 2 notes",url: "week2/index.html"},
    {label: "Week 3 notes",url: "week3/index.html"},
    {label: "Week 4 notes",url: "week4/index.html"},
    {label: "Week 5 notes",url: "week5/index.html"},
    {label: "Week 6 Midterm TODO",url: "week6/index.html"},
    {label: "Week 7 notes",url: "week7/index.html"},
    {label: "Week 8 notes",url: "week8/index.html"},
    {label: "Week 9 notes",url: "week9/index.html"},
    {label: "Week 10 notes",url: "week10/index.html"},
    // {label: "Week 11 notes",url: "week11/index.html"},
    // {label: "Week 12 notes",url: "week12/index.html"},
    // {label: "Week 13 notes",url: "week13/index.html"}
]

//create the Ordered List object
var orderedList = document.createElement('ol');

//for each item in the links list, make the label and  the url
for (let i = 0; i < links.length; i++) {
    //first, create the list and anchor elements as variables represented by their html
    let li = document.createElement('li');
    let a = document.createElement('a');
    //create the text needed for the html using createTextNode for compatability and formating
    var link = document.createTextNode(links[i].label);
    //add the link to the anchor element
    a.appendChild(link);
    a.href = links[i].url;
    //a.target="_blank"; 
    li.appendChild(a);
    //append/add the item to the ol on the home page
    orderedList.appendChild(li);   
}

//add all that fun stuff to the ordered list div
document.querySelector('div.tableOfContents').appendChild(orderedList);
