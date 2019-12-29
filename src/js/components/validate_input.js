export default {
    init() {
        let target = document.getElementsByClassName("form__item active"),
        targetWrap = target[0].querySelectorAll(".form__item_wrap:not(.disabled)"),
        errorMsg = document.getElementsByClassName("error_msg"),
        select = targetWrap.length > 0 ? targetWrap[0].getElementsByTagName("select") : "",
        inputs = targetWrap.length > 0 ? targetWrap[0].getElementsByTagName("input") : "",
        valid = true;
        

        for (let i = 0; i < select.length; i++) {
            let optionSelected = select[i].options[select[i].selectedIndex].value;
            if(optionSelected === "") {
                select[i].className += " hasError";
                valid = false;
            } else {
                select[i].classList.remove("hasError");
            }
        }

        for (let i = 0; i < inputs.length; i++) {
            let inputsVal = inputs[i].value;
            if(inputsVal === "") {
                inputs[i].className += " hasError";
                valid = false;
            } else {
                inputs[i].classList.remove("hasError");
            }
        }

        if(!valid) {
            errorMsg[0].classList.add("shown"); 
        } else {
            errorMsg[0].classList.remove("shown");
        }

        return valid;
    }
}