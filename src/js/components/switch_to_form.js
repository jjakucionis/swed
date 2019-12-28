export default {
    init() {
        const introButton = document.getElementById('introBtn');
        introButton.addEventListener('click', function(e){
            e.preventDefault();
            this.closest('.section').classList.remove("active");
            this.closest('.section').nextElementSibling.classList.add("active");
        });
    }
}