export default {
    init() {
        const loanType = document.getElementById('lType'),
        loanSum = document.getElementById('lSum'),
        loanDuration = document.getElementById('lDuration'),
        education = document.getElementById('edu'),
        position = document.getElementById('position'),
        salary = document.getElementById('sal'),
        name = document.getElementById('nam'),
        email = document.getElementById('elp');

        // values from form
        let loanTypeInput = document.getElementById('loanType'),
        loanTypeInputValue = loanTypeInput.options[loanTypeInput.selectedIndex].text;
        loanType.innerHTML = loanTypeInputValue;

        let conditionValue = document.getElementById('conditional').dataset.hascondition;

        let loanSumInput = document.getElementById('range' + conditionValue),
        loanSumInputValue = loanSumInput.value;
        loanSum.innerHTML = loanSumInputValue;

        let loanDurationInput = document.getElementById('term' + conditionValue),
        loanDurationInputValue = loanDurationInput.options[loanDurationInput.selectedIndex].value;
        loanDuration.innerHTML = loanDurationInputValue;

        let educationInput = document.getElementById('education'),
        educationInputValue = educationInput.value;
        education.innerHTML = educationInputValue;

        let positionInput = document.getElementById('work'),
        positionInputValue = positionInput.value;
        position.innerHTML = positionInputValue;

        let salaryInput = document.getElementById('salary'),
        salaryInputValue = salaryInput.value;
        salary.innerHTML = salaryInputValue;

        let nameInput = document.getElementById('name'),
        nameInputValue = nameInput.value;
        name.innerHTML = nameInputValue;

        let emailInput = document.getElementById('email'),
        emailInputValue = emailInput.value;
        email.innerHTML = emailInputValue;
    }
}