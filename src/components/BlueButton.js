System.register(["react", "styled-components", "react-redux", "../store/slices/counter/index", "./ProviderWrapper.js"], function (exports_1, context_1) {
    "use strict";
    var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };
    var react_1, styled_components_1, react_redux_1, index_1, ProviderWrapper_js_1, Title, WrappedBlueButton, BlueButton, templateObject_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (styled_components_1_1) {
                styled_components_1 = styled_components_1_1;
            },
            function (react_redux_1_1) {
                react_redux_1 = react_redux_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (ProviderWrapper_js_1_1) {
                ProviderWrapper_js_1 = ProviderWrapper_js_1_1;
            }
        ],
        execute: function () {
            // import { Provider } from 'react-redux';
            // import store from '../store/index';
            Title = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    font-size: 1.5em;\n    text-align: center;\n    color: red;\n"], ["\n    font-size: 1.5em;\n    text-align: center;\n    color: red;\n"])));
            WrappedBlueButton = function () {
                var dispatch = react_redux_1.useDispatch();
                var handleClick = react_1.useCallback(function () {
                    console.log('*** handleClick');
                    dispatch(index_1.increment());
                }, []);
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(Title, null, "Hello World"),
                    react_1.default.createElement("button", { style: { background: 'blue' }, onClick: handleClick }, "I'm not BLUE")));
            };
            // const ProviderWrapper = ({children}) => {
            //     return (
            //         <Provider store={store}>
            //             {children}
            //         </Provider>
            //     );
            // }
            BlueButton = function () {
                return (react_1.default.createElement(ProviderWrapper_js_1.default, null,
                    react_1.default.createElement(WrappedBlueButton, null)));
            };
            exports_1("default", BlueButton);
        }
    };
});
//# sourceMappingURL=BlueButton.js.map