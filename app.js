const background_h1 = document.getElementById('txt');
const button_button = document.getElementById('btn');
const body_body = document.getElementById('body');
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function main(){
    button_button.addEventListener('click', () => changeColor());

}


function changeColor() {
    let hex = '#';
    for (var i = 0; i <= 5; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        c = arr[randomNumber];
        hex += c;
    }
    background_h1.innerHTML = `HEX COLOR: ${hex}`;
    body_body.style.background = hex;

}

main()
