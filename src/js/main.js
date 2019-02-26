const form = document.querySelector('#myForm');
const inputs = form.querySelectorAll('.card__frontside-number__block-value');
const owner = form.querySelector('.card__frontside-owner-value');

for (const input of inputs) {
    input.addEventListener('keydown', function(event) {
        validation(input);
    });
}

$('.card__backside__cvv-text-value').keydown(function(event){
    validation(owner);
});
$(owner).keydown(function(event){
    let isLat = false;
    let isControl = false;
    if (event.keyCode>=65 && event.keyCode<=90) {
        isLat = true;
        console.log(event.keyCode);
    } 
    
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
        isControl = true;
        console.log(event.key);
    }
    if (isLat == false && isControl == false) {
        event.preventDefault();
        console.log(event.keyCode);
    }
});
function validation() {
    let isDigit = false;
    let isControl = false;
    if (event.key>=0 || event.key<=9) {
        isDigit = true;
        console.log(event.key);
    }
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
        isControl = true;
        console.log(event.key);
    }
    if (isDigit == false && isControl == false) {
        event.preventDefault();
        console.log(event.key);
    }
};