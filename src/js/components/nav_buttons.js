export default {
    init() {
        let fieldsets = document.getElementsByTagName('fieldset'),
        back = document.getElementById('back'),
        next = document.getElementById('next');
        if(fieldsets[0].classList.contains('active')) {
            back.classList.add('hidden');
        } else {
            back.classList.remove('hidden');
        };
        if(fieldsets[fieldsets.length - 1].classList.contains('active')) {
            next.classList.add('hidden');
        } else {
            next.classList.remove('hidden');
        }
    }
}