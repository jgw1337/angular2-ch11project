import {Component} from "angular2/core";
import {Control, ControlGroup, FormBuilder, Validators} from "angular2/common";
import {PasswordValidators} from "./passwordValidators";

@Component({
  selector: "password-form",
  templateUrl: "app/password-form.component.html"
})

export class PasswordFormComponent {
  form: ControlGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldpassword: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      newpassword1: [
        "",
        Validators.compose([
          Validators.required,
          PasswordValidators.minimumLength(5)
        ])
      ],
      newpassword2: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    },
      { validator: PasswordValidators.passwordsMatch }
    )
  }

  changePassword($event) {
    if (this.form.find("oldpassword").value != "jgw") {
      this.form.find("oldpassword").setErrors({
        oldPasswordIsValid: true
      })
    }

    console.log($event);
  }
}