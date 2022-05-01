System.register(["redux-saga/effects", "../../slices/counter/index"], function (exports_1, context_1) {
    "use strict";
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var effects_1, index_1;
    var __moduleName = context_1 && context_1.id;
    function fetchTodo() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://127.0.0.1:3000/todos', {
                        method: 'POST',
                        headers: {
                            contentType: 'application/json'
                        },
                        body: JSON.stringify({ id: new Date(), title: 't1', description: 'd1', assignee: 'a1' }),
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function watchTodo() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('*** watchTodo');
                    return [4 /*yield*/, effects_1.takeEvery(index_1.increment.type, fetchTodo)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    function rootSaga() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, effects_1.all([
                        effects_1.fork(watchTodo),
                    ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }
    exports_1("default", rootSaga);
    return {
        setters: [
            function (effects_1_1) {
                effects_1 = effects_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=index.js.map