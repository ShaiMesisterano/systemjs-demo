System.register([], function (exports_1, context_1) {
    "use strict";
    var foo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            foo = function () { return console.log('foo'); };
            exports_1("default", foo);
        }
    };
});
//# sourceMappingURL=foo.js.map