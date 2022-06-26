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
            window.Ext = window.Ext || {};
            window.Ext.createComponent = function (_a) {
                var Component = _a.Component, element = _a.element;
                try {
                    react_dom_1.default.render(react_1.default.createElement(Component, null), element);
                }
                catch (_b) {
                    var message = _b.message;
                    console.error(message);
                }
            };
        }
    };
});
//# sourceMappingURL=ui.js.map