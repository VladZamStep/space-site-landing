const multistepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multistepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active");
})

if (currentStep < 0) {
    currentStep = 0;
    formSteps[currentStep].classList.add("active");
    showCurrentStep();
}
let incrementor;
multistepForm.addEventListener("click", eV => {
    if (eV.target.matches("[data-next]")) {
        incrementor = 1;
    } else if (eV.target.matches("[data-previous]")) {
        incrementor = -1;
    }
    showCurrentStep();
})

const inputs = [...formSteps[currentStep].querySelectorAll("input")];
const allValid = inputs.every(input => input.reportValidity())
if (allValid) {
    currentStep += incrementor;
    showCurrentStep();
}

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep)
    })
}