System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidators;
    return {
        setters:[],
        execute: function() {
            PasswordValidators = (function () {
                function PasswordValidators() {
                }
                PasswordValidators.minimumLength = function (len) {
                    return function (c) {
                        if (c.value.length >= len) {
                            return null;
                        }
                        else {
                            return { minimumLength: {
                                    requiredLength: len,
                                    actualLength: c.value.length
                                } };
                        }
                    };
                };
                PasswordValidators.passwordsMatch = function (cg) {
                    var password1 = cg.find("newpassword1").value;
                    var password2 = cg.find("newpassword2").value;
                    if (password1 == "" || password2 == "" || password1 == password2) {
                        return null;
                    }
                    else {
                        return { passwordsMatch: true };
                    }
                };
                PasswordValidators.oldPasswordIsValid = function (c) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (c.value == "jgw") {
                                resolve(null);
                            }
                            else {
                                resolve({ oldPasswordIsValid: true });
                            }
                        }, 1000);
                    });
                };
                return PasswordValidators;
            }());
            exports_1("PasswordValidators", PasswordValidators);
        }
    }
});
//# sourceMappingURL=PasswordValidators.js.map