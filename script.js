let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient")
let randBtn = document.querySelector(".randBtn")
const rgbToHex = rgb => '#' + (rgb.match(/[0-9|.]+/g).map((x, i) => i === 3 ? parseInt(255 * parseFloat(x)).toString(16) : parseInt(x).toString(16)).join('')).padStart(2, '0').toUpperCase();


// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(gradient);
// console.log(randBtn)

// Test Below for background
// body.style.background = "red";

// input event in JS works with inputs when value changes
function gradientInput() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";"
}

function randomGradient() {
    let col1 = "rgb" + "(" + (Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ")" + ";");

  let col2 = "rgb" + "(" + (Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ")" + ";");
    console.log(col1)
    color1.value=rgbToHex(col1)
    color2.value=rgbToHex(col2)
    console.log(color1.value,color2.value)
    gradientInput() 
}

// I can also set gradient in html with oninput=gradientInput()
color1.addEventListener("input", gradientInput);

color2.addEventListener("input", gradientInput);

randBtn.addEventListener("click", randomGradient)
