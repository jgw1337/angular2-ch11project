import {Control} from "angular2/common";

export class UsernameValidators {
  static shouldBeUnique(c : Control) {
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        if ( c.value == "jgw" ) {
          resolve({shouldBeUnique: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  static cannotContainSpaces(c: Control) {
    if (c.value.indexOf(" ") >= 0) {
      return { cannotContainSpaces: true }
    } else {
      return null;
    }
  }
}