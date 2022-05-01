System.register(["react", "react-dom"], function (exports_1, context_1) {
    "use strict";
    var react_1, react_dom_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            }
        ],
        execute: function () {
            Ext.createComponent = function (_a) {
                var Component = _a.Component, element = _a.element;
                react_dom_1.default.render(react_1.default.createElement(Component, null), element);
            };
        }
    };
});
//# sourceMappingURL=ui.js.map