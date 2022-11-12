
/*Є текстове поле на сторінці. 
Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає */

// const inpt = document.getElementsByClassName("input")[0];
const inpt = document.querySelector(".input");

// const ghost = document.getElementsByClassName("ghost")[0];
const ghost = document.querySelector(".ghost");

// ghost.hidden ="true"; //hidding on srart
ghost.style.display = "none"; //hidding on srart

const handleFocusIn = () =>{
    // ghost.hidden = false;
    ghost.style.display = "block";
}

const handleFocusOut = () =>{
    // ghost.hidden = true;
    ghost.style.display = "none";
}

inpt.addEventListener('focus', handleFocusIn);
inpt.addEventListener('blur', handleFocusOut);
