export default {
    init() {
        var slider = document.getElementById("rangeA");
        var output = document.getElementById("valueA");
        output.innerHTML = slider.value;

        slider.oninput = function() {
            output.innerHTML = this.value;
        }
    }
}