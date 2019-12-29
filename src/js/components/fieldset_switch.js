export default {
    prevFieldset(n) {
        let current = document.getElementsByClassName("form__item active"),
        prev = document.querySelectorAll('[data-step="' + (n-1) + '"]');
        current[0].classList.remove('active');
        prev[0].classList.add('active');
    },
    nextFieldset(n) {
        let current = document.getElementsByClassName("form__item active"),
        next = document.querySelectorAll('[data-step="' + n + '"]');
        current[0].classList.remove('active');
        next[0].classList.add('active');
    }
}