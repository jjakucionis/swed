export default {
    init() {
        let target = document.getElementsByClassName("form__item active"),
        errorMsg = document.getElementsByClassName("error_msg"),
        select = target[0].getElementsByTagName("select"),
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

        if(!valid) {
            errorMsg[0].classList.add("shown"); 
        } else {
            errorMsg[0].classList.remove("shown");
        }

        return valid;
    }
}

// for (let i = 0; i < select.length; i++) {
//     let options = select[i].getElementsByTagName("option");
//     for (let j = 0; j < options.length; j++) {
//         if (options[j].value == "") {
//             select[i].className += " hasError";
//             valid = false;
//         } else {
//             console.log("viskas ok");
//         }
//     }
// }