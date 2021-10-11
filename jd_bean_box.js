"use strict";
/**
 * 领京豆-任务
 * cron: 0 9,12 * * *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
var axios_1 = require("axios");
var dotenv = require("dotenv");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
dotenv.config();
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, j, _a, _b, t, e_1_1, e_2;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _d.sent();
                i = 0;
                _d.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 24];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                j = 0;
                _d.label = 3;
            case 3:
                if (!(j < 4)) return [3 /*break*/, 23];
                console.log("Round:" + (j + 1));
                return [4 /*yield*/, api('beanTaskList', { "viewChannel": "AppHome" })];
            case 4:
                res = _d.sent();
                _d.label = 5;
            case 5:
                _d.trys.push([5, 19, , 20]);
                _d.label = 6;
            case 6:
                _d.trys.push([6, 16, 17, 18]);
                _a = (e_1 = void 0, __values(res.data.taskInfos)), _b = _a.next();
                _d.label = 7;
            case 7:
                if (!!_b.done) return [3 /*break*/, 15];
                t = _b.value;
                if (!(t.status === 1)) return [3 /*break*/, 14];
                console.log(t.taskName);
                return [4 /*yield*/, api('beanDoTask', {
                        "actionType": t.taskType === 3 ? 0 : 1,
                        "taskToken": t.subTaskVOS[0].taskToken
                    })];
            case 8:
                res = _d.sent();
                if (res.data.bizMsg)
                    console.log(res.data.bizMsg);
                else {
                    console.log(res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 9:
                _d.sent();
                if (!(t.taskType !== 3)) return [3 /*break*/, 12];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 10:
                _d.sent();
                return [4 /*yield*/, api('beanDoTask', { "actionType": 0, "taskToken": t.subTaskVOS[0].taskToken })];
            case 11:
                res = _d.sent();
                if (res.data.bizMsg)
                    console.log(res.data.bizMsg);
                _d.label = 12;
            case 12: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 13:
                _d.sent();
                _d.label = 14;
            case 14:
                _b = _a.next();
                return [3 /*break*/, 7];
            case 15: return [3 /*break*/, 18];
            case 16:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 18];
            case 17:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 18: return [3 /*break*/, 20];
            case 19:
                e_2 = _d.sent();
                console.log('Error!');
                return [3 /*break*/, 20];
            case 20: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 21:
                _d.sent();
                _d.label = 22;
            case 22:
                j++;
                return [3 /*break*/, 3];
            case 23:
                i++;
                return [3 /*break*/, 2];
            case 24: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var sign, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getSign(fn, body)];
                case 1:
                    sign = _a.sent();
                    return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=" + fn + "&" + sign.data.sign, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'content-type': 'application/x-www-form-urlencoded',
                                'j-e-c': '',
                                'accept': '*/*',
                                'j-e-h': '',
                                'accept-language': 'zh-Hans-CN;q=1',
                                'referer': '',
                                'user-agent': 'JD4iPhone/167841 (iPhone; iOS; Scale/3.00)',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function getSign(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post('https://api.jds.codes/sign', {
                        "fn": fn, "body": body
                    })];
                case 1:
                    data = (_a.sent()).data;
                    if (data.code === 200)
                        return [2 /*return*/, data];
                    else
                        return [2 /*return*/, { code: 500, data: { sign: '' } }];
                    return [2 /*return*/];
            }
        });
    });
}
