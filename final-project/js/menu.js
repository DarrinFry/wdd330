//Simple function to change the menu based on CSS class for responsive layout.
export function menu() {
  const hambutton = document.querySelector(".ham");
  hambutton.addEventListener("click", toggleMenu, false);
  
  function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
  }
  
}