System.register(["react", "react-redux", "../store/index", "../store/slices/counter/index"], function (exports_1, context_1) {
    "use strict";
    var react_1, react_redux_1, index_1, react_redux_2, index_2, WrappedBlueButton, BlueButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
                react_redux_2 = react_redux_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            WrappedBlueButton = function () {
                var dispatch = react_redux_2.useDispatch();
                var handleClick = react_1.useCallback(function () {
                    console.log('*** handleClick');
                    dispatch(index_2.increment());
                }, []);
                return (react_1.default.createElement(react_redux_1.Provider, { store: index_1.default },
                    react_1.default.createElement("button", { style: { background: 'blue' }, onClick: handleClick }, "I'm not BLUE")));
            };
            BlueButton = function () {
                return (react_1.default.createElement(react_redux_1.Provider, { store: index_1.default },
                    react_1.default.createElement(WrappedBlueButton, null)));
            };
            exports_1("default", BlueButton);
        }
    };
});
//# sourceMappingURL=BlueButton.js.map