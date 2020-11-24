function $(eleId) {
    return document.getElementById(eleId);
}
var re = /\S+@\S+.\S/;
function validateEmail() {
    var subInp = $('subscribe-input');
    var result = subInp.value.match(re);
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
$('subscribe-button').addEventListener('click', function (e) {
    e.preventDefault();
    validateEmail();
});
$('subscribe-form').addEventListener('submit', function (e) {
    e.preventDefault();
    validateEmail();
});
