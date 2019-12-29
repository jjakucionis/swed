export default {
    init() {
        var slider = document.getElementById("rangeA");
        var output = document.getElementById("valueA");
        output.innerHTML = slider.value;

        slider.oninput = function() {
            output.innerHTML = this.value;
        }

        var slider2 = document.getElementById("rangeB");
        var output2 = document.getElementById("valueB");
        output2.innerHTML = slider2.value;

        slider2.oninput = function() {
            output2.innerHTML = this.value;
        }
    }
}