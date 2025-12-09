class MultistepForm {
    constructor() {
        this.responses = [];
        this.currentStep = 0;
    }

    submitStep(data) {
        this.responses.push({ ///Use (this) inside methods to access/update that object's data
            step: this.currentStep,
            data: data,
            timstamp: new Date(),

        });

        this.currentStep++;

        console.log(`Step ${this.currentStep} submitted. Total : ${this.responses.length}`);
        return this.responses.length;

    }

    getAllResponse() {
        return [...this.responses];
    }
}

const steps = new MultistepForm();
steps.submitStep({ name: "Sagor", age: 30 });
steps.submitStep({ email: "john@email.com" });
steps.submitStep({ preferences: { theme: "dark" } });

console.log(steps.getAllResponse());