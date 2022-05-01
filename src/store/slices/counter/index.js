System.register(["@reduxjs/toolkit"], function (exports_1, context_1) {
    "use strict";
    var _a, toolkit_1, counterSlice, increment, decrement, incrementByAmount, incrementAsync, selectCount;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (toolkit_1_1) {
                toolkit_1 = toolkit_1_1;
            }
        ],
        execute: function () {
            exports_1("counterSlice", counterSlice = toolkit_1.createSlice({
                name: 'counter',
                initialState: {
                    value: 0,
                },
                reducers: {
                    increment: function (state) {
                        console.log('increment');
                        state.value += 1;
                    },
                    decrement: function (state) {
                        state.value -= 1;
                    },
                    incrementByAmount: function (state, action) {
                        state.value += action.payload;
                    },
                },
            }));
            exports_1("increment", increment = (_a = counterSlice.actions, _a.increment)), exports_1("decrement", decrement = _a.decrement), exports_1("incrementByAmount", incrementByAmount = _a.incrementByAmount);
            exports_1("incrementAsync", incrementAsync = function (amount) { return function (dispatch) {
                setTimeout(function () {
                    dispatch(incrementByAmount(amount));
                }, 1000);
            }; });
            exports_1("selectCount", selectCount = function (state) { return state.counter.value; });
            exports_1("default", counterSlice.reducer);
        }
    };
});
//# sourceMappingURL=index.js.map