System.register(["@reduxjs/toolkit", "./slices/counter/index", "redux-saga", "./sagas/counter/index", "redux-logger"], function (exports_1, context_1) {
    "use strict";
    var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    var toolkit_1, index_1, redux_saga_1, index_2, redux_logger_1, sagaMiddleware;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (toolkit_1_1) {
                toolkit_1 = toolkit_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (redux_saga_1_1) {
                redux_saga_1 = redux_saga_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (redux_logger_1_1) {
                redux_logger_1 = redux_logger_1_1;
            }
        ],
        execute: function () {
            sagaMiddleware = redux_saga_1.default.default();
            exports_1("default", toolkit_1.configureStore({
                reducer: {
                    counter: index_1.default,
                },
                middleware: function (getDefaultMiddleware) { return (__spreadArray(__spreadArray([], getDefaultMiddleware({ thunk: false }).concat(redux_logger_1.default.default), true), [sagaMiddleware], false)); },
                devTools: true
            }));
            sagaMiddleware.run(index_2.default);
        }
    };
});
//# sourceMappingURL=index.js.map