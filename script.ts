function $(eleId: string): HTMLElement {
    return document.getElementById(eleId);
}

let re= /\S+@\S+.\S/;

function validateEmail():void {
    let subInp = <HTMLInputElement>$('subscribe-input');
    const result = subInp.value.match(re);
    console.log(result);
    if (result !== null) {
        subInp.value = '';
        $('validation-error').style.display = 'none';
    }
    else {
        $('validation-error').style.display = 'flex';
        subInp.focus();
    }
}


$('subscribe-button').addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail();
})

$('subscribe-form').addEventListener('submit', (e) => {
    e.preventDefault();
    validateEmail();
})