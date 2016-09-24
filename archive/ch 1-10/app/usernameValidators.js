System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.shouldBeUnique = function (c) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (c.value == "jgw") {
                                resolve({ shouldBeUnique: true });
                            }
                            else {
                                resolve(null);
                            }
                        }, 1000);
                    });
                };
                UsernameValidators.cannotContainSpaces = function (c) {
                    if (c.value.indexOf(" ") >= 0) {
                        return { cannotContainSpaces: true };
                    }
                    else {
                        return null;
                    }
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=usernameValidators.js.map