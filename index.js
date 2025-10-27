const initialColors = ["#F55A5A", "#2B283A", "#FBF3AB", "#AAD1B6", "#A626D3"]
const areaDivs = document.getElementsByClassName("color-area")
const hexDivs = document.getElementsByClassName("color-hex")
const formButton = document.getElementById("get-btn")
const formEl = document.getElementById("color-input")


function addColors(colorsArray) {
    for (let i = 0; i < areaDivs.length; i++) {
        areaDivs[i].style.backgroundColor = colorsArray[i]
        hexDivs[i].textContent = colorsArray[i]
    }
}

addColors(initialColors);

formButton.addEventListener("click", function(e) {
    let newColors = [];
    e.preventDefault();
    var formData = new FormData(formEl);
    seedColor = formData.get("seed-color").slice(1);
    colorMode = formData.get("color-mode")
    // console.log(`Seed: ${seedColor}, mode: ${colorMode}`)
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorMode}&count=5`)
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            for (color of data.colors) {
                newColors.push(color.hex.value)
            }
            // console.log(newColors)
            addColors(newColors);
            })
})
