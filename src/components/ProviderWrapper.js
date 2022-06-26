System.register(["react", "react-redux", "../store/index"], function (exports_1, context_1) {
    "use strict";
    var react_1, react_redux_1, index_1, ProviderWrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            ProviderWrapper = function (_a) {
                var children = _a.children;
                return react_1.default.createElement(react_redux_1.Provider, { store: index_1.default }, children);
            };
            exports_1("default", ProviderWrapper);
        }
    };
});
//# sourceMappingURL=ProviderWrapper.js.map