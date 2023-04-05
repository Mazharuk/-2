const text = document.getElementById('input')
const button = document.querySelectorAll('.num, .num0, .num1, .num2')

button.forEach(input => {
    input.addEventListener('click', () => {
        text.value += input.value 
    } )
})


document.getElementById("clear").onclick = function () {
    document.getElementById("input").value = "";
}
