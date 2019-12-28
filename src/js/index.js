import '../scss/style.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import switchToForm from "./components/switch_to_form";
import validateInput from "./components/validate_input";

$(document).ready(function () {
    // inits
    switchToForm.init();

    // prev next buttons
    let prevBtn = document.getElementById('back'),
    nextBtn = document.getElementById('next');

    prevBtn.addEventListener('click', function(e){
        e.preventDefault();
        goBack.init();
    });

    nextBtn.addEventListener('click', function(e){
        e.preventDefault();
        validateInput.init();
    });
});