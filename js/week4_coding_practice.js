// const form = document.forms['search'];
// const input = form.elements.searchInput;

// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('blur', () => alert('blurred'), false);
// input.addEventListener('change', () => alert('changed'), false);

// input.value = 'Search Here';
// form.addEventListener ('submit', search, false);

// function search(event) {
//     alert(`You Searched for: ${input.value}`);
//     event.preventDefault();
// }
// input.addEventListener('focus', function(){
//     if (input.value==='Search Here') {
//         input.value = '' 
//     }
// }, false);

// input.addEventListener('blur', function(){
//     if(input.value === '') {
//         input.value = 'Search Here';
// } }, false);


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
    hero.category = heroForm.category.value;
    hero.age = heroForm.age.value;
    hero.city = heroForm.city.value;
    hero.origin = heroForm.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}
heroForm.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = heroForm.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
const label = heroForm.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

// function validateInline() {
//     const heroName = this.value.toUpperCase();
//     if(heroName.startsWith('X')){
//     error.style.display = 'block';
//     } else {
//     error.style.display = 'none';
//     }
// }

