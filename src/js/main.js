const myForm = document.querySelector('#myForm');
const inputs = myForm.querySelectorAll('.card__frontside-number__block-value');
const owner = myForm.querySelector('.card__frontside-owner-value');
const subBtn = myForm.querySelector('#submit');

subBtn.addEventListener('click', e => {
    event.preventDefault();
    if(validateForm(myForm)) {
        myForm.reset();
    }
});
for (const input of inputs) {
   input.addEventListener('keydown', function(event) {
        validation(input);
  });
}

$('.card__backside__cvv-text-value').keydown(function(event){
    validation(owner);
});
$(owner).keydown(e =>{
    let isLat = false;
    let isControl = false;
    var re=new RegExp('^[a-zA-Z]+$');
    if (re.test(event.key)) {
        isLat = true;
        console.log(event.key);
    } 
    
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace') {
        isControl = true;
        console.log(event.key);
    }
    if (isLat == false && isControl == false) {
        event.preventDefault();
        console.log(event.key);
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



function validateForm(form) {
    let valid = true;


    for (const input of inputs) {
        if (!validateField(input)) {
            valid = false;
        }
    }
   

    if (!validateField(owner)) {
        valid = false;
    }

    if (!validateField(form.elements.cvv)) {
        valid = false;
    }
    return valid;
} 

function validateField(field) {
    if (!field.checkValidity()){
        field.classList.add('error');
        return false;
    }
    else {
        field.classList.remove('error');
        return true;
    }
}