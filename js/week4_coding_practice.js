const form = document.forms['search'];
const input = form.elements.searchInput;

// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);

input.value = 'Search Here';
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
} }, false);

const heroForm = document.forms['hero'];
heroForm.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = heroForm.heroName.value; // create a name property based on the input field's value
    hero.realName = heroForm.realName.value;
    hero.powers = [];
    // for (let i=0; i < heroForm.powers.length; i++) {
    //     if (heroForm.powers[i].checked) {
    //     hero.powers.push(heroForm.powers[i].value);
    //     }
    // };
    hero.powers = [...heroForm.powers].filter(box => box.checked).map(box => box.value);

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}