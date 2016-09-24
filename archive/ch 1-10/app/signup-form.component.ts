import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators, FormBuilder} from "angular2/common";
import {UsernameValidators} from "./usernameValidators";

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    /**
     * Model-driven Form : Method 1 : Using FormBuilder, ControlGroup, and Control
     * ...this method is cleaner for larger forms
     */
    form: ControlGroup;

    constructor(fb : FormBuilder) {
        this.form = fb.group({
            username: [
                "",
                Validators.compose([
                    Validators.required,
                    UsernameValidators.cannotContainSpaces
                ]),
                UsernameValidators.shouldBeUnique
            ],
            password: ["", Validators.required]
        })
    }

    /**
     * Model-driven Form : Method 2 : Using ControlGroup and Control
     */
/*
    form = new ControlGroup({
        username: new Control("", Validators.required),
        password: new Control("", Validators.required)
    });
*/

    signup() {
        this.form.find("username").setErrors({
            invalidLogin: true
        });

        console.log(this.form.value);
    }
}