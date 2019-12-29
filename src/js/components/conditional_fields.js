export default {
    init() {
        let elem = document.getElementById('loanType');
        elem.addEventListener('change', function(){
            
            let optionSelected = elem.options[elem.selectedIndex],
            value;
            if(!optionSelected.dataset.conditionvalue) {
                value = "";
            } else {
                value = optionSelected.dataset.conditionvalue;
            }
            elem.closest('fieldset').setAttribute('data-hascondition', value);
        });
        
    }
}