import {Control, ControlGroup} from "angular2/common";

export class PasswordValidators {
  static minimumLength(len : number) {
    return (c : Control) => {
      if (c.value.length >= len) {
        return null;
      } else {
        return { minimumLength: {
          requiredLength : len,
          actualLength: c.value.length
        }}
      }
    };
  }

  static passwordsMatch(cg : ControlGroup) {
    var password1 = cg.find("newpassword1").value;
    var password2 = cg.find("newpassword2").value;
    if (password1 == "" || password2 == "" || password1 == password2) {
      return null;
    } else {
      return {passwordsMatch: true};
    }
  }

  static oldPasswordIsValid(c : Control) {
    return new Promise((resolve, reject) => {
      setTimeout(
        function(){
          if (c.value == "jgw") {
            resolve(null);
          } else {
            resolve({oldPasswordIsValid: true})
          }
        },
        1000
      );
    });
  }
}