const toggle = document.getElementById('toggle');
const navList = document.getElementById('navv');
toggle.addEventListener('click', ()=>{
    navList.classList.toggle('active');
});