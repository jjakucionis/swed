export default {
    init() {
        let activeFieldset = document.getElementsByClassName('form__item active'),
        stepNumber = activeFieldset[0].dataset.step,
        stepsBullets = document.getElementsByClassName('steps__item');
        for(let i = 0; i < stepsBullets.length; i++) {
            if (i < stepNumber) {
                stepsBullets[i].classList.add('active');
            } else {
                stepsBullets[i].classList.remove('active');
            }
        }
    }
}