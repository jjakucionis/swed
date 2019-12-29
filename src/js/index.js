import '../scss/style.scss';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import switchToForm from "./components/switch_to_form";
import validateInput from "./components/validate_input";
import fieldsetSwitch from "./components/fieldset_switch";
import loanSliders from "./components/loan_sliders";
import conditionalFields from "./components/conditional_fields";
import navButtons from "./components/nav_buttons";
import steps from "./components/steps";
import getData from "./components/get_data";

$(document).ready(function () {
    // inits
    switchToForm.init();
    loanSliders.init();
    conditionalFields.init();
    navButtons.init();
    

    // prev next buttons
    let prevBtn = document.getElementById('back'),
    nextBtn = document.getElementById('next'),
    stepNumber = 1;
    
    prevBtn.addEventListener('click', function(e){
        e.preventDefault();
        fieldsetSwitch.prevFieldset(stepNumber);
        stepNumber--;
        validateInput.init();
        navButtons.init();
        steps.init();
    });

    nextBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(validateInput.init()) {
            fieldsetSwitch.nextFieldset(stepNumber+1);
            stepNumber++;
        }
        navButtons.init();
        steps.init();
    });

    // submit form
    const introButton = document.getElementById('submit');
    introButton.addEventListener('click', function(e){
        e.preventDefault();
        if(validateInput.init()) {
            getData.init();
            this.closest('.section').classList.remove("active");
            this.closest('.section').nextElementSibling.classList.add("active");
        }
    });
});