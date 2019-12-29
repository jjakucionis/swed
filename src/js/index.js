import '../scss/style.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import switchToForm from "./components/switch_to_form";
import validateInput from "./components/validate_input";
import fieldsetSwitch from "./components/fieldset_switch";
import loanSliders from "./components/loan_sliders";
import conditionalFields from "./components/conditional_fields";

$(document).ready(function () {
    // inits
    switchToForm.init();
    loanSliders.init();
    conditionalFields.init();

    // prev next buttons
    let prevBtn = document.getElementById('back'),
    nextBtn = document.getElementById('next'),
    stepNumber = 1;

    prevBtn.addEventListener('click', function(e){
        e.preventDefault();
        fieldsetSwitch.prevFieldset(stepNumber);
        stepNumber--;
    });

    nextBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(validateInput.init()) {
            fieldsetSwitch.nextFieldset(stepNumber+1);
            stepNumber++;
        } 
    });    
});