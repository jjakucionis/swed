export default {
    prevFieldset(n) {
        let current = document.getElementsByClassName("form__item active"),
        prev = document.querySelectorAll('[data-step="' + (n-1) + '"]');
        current[0].classList.remove('active');
        prev[0].classList.add('active');
    },
    nextFieldset(n) {
        let current = document.getElementsByClassName("form__item active"),
        currentData = current[0].dataset.hascondition,
        next = document.querySelectorAll('[data-step="' + n + '"]');
        current[0].classList.remove('active');
        if(currentData) {
            let innerWraps = next[0].getElementsByClassName('form__item_wrap');
            console.log(innerWraps);
            for(let i = 0; i < innerWraps.length; i++) {
                if(innerWraps[i].dataset.condition == currentData ) {
                    innerWraps[i].classList.remove('disabled');
                } else {
                    innerWraps[i].classList.add('disabled');
                }
            }
        };
        next[0].classList.add('active');
    }
}