"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', res = '', UserName, index;
var shareCodes = [], shareCodesSelf = [];
var shareCodesHW = [
    'b674113e-7a08-4dff-bb30-0717ddfabce1',
    '7b811634-e0cb-4022-8434-76f077845531',
    '3d2da5d4-488d-46c9-ab37-8bc800bb226c',
    '278670a6-89da-4a7c-8665-4ff412a47a22',
    '23f31f87-5b7b-4341-842d-654f592846de'
];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, j, ret, score, j, i, shareCodes_1, shareCodes_1_1, code, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _b.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _b.sent();
                i = 0;
                _b.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 18];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, api("{\"apiMapping\":\"/api/task/doSign\"}")];
            case 4:
                res = _b.sent();
                return [4 /*yield*/, api("{\"apiMapping\":\"/api/supportTask/getShareId\"}")];
            case 5:
                res = _b.sent();
                console.log('助力码', res.data);
                shareCodesSelf.push(res.data);
                j = 0;
                _b.label = 6;
            case 6:
                if (!(j < 9)) return [3 /*break*/, 9];
                return [4 /*yield*/, doTask()];
            case 7:
                ret = _b.sent();
                if (!ret)
                    return [3 /*break*/, 9];
                _b.label = 8;
            case 8:
                j++;
                return [3 /*break*/, 6];
            case 9: return [4 /*yield*/, api("{\"apiMapping\":\"/api/index/indexInfo\"}")];
            case 10:
                res = _b.sent();
                score = res.data.myScore;
                console.log('积分', score);
                j = 0;
                _b.label = 11;
            case 11:
                if (!(j < Math.floor(score / 100))) return [3 /*break*/, 15];
                return [4 /*yield*/, api("{\"apiMapping\":\"/api/lottery/lottery\"}")];
            case 12:
                res = _b.sent();
                if (!res.data.prizeName) {
                    console.log('未中奖');
                }
                else {
                    console.log('中奖', res.data.prizeName);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 13:
                _b.sent();
                _b.label = 14;
            case 14:
                j++;
                return [3 /*break*/, 11];
            case 15: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _b.sent();
                _b.label = 17;
            case 17:
                i++;
                return [3 /*break*/, 3];
            case 18:
                console.log('内部助力', shareCodesSelf);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                i = 0;
                _b.label = 19;
            case 19:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 29];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _b.label = 20;
            case 20:
                _b.trys.push([20, 26, 27, 28]);
                shareCodes_1 = (e_1 = void 0, __values(shareCodes)), shareCodes_1_1 = shareCodes_1.next();
                _b.label = 21;
            case 21:
                if (!!shareCodes_1_1.done) return [3 /*break*/, 25];
                code = shareCodes_1_1.value;
                console.log("\u8D26\u53F7 " + UserName + " \u53BB\u52A9\u529B " + code);
                return [4 /*yield*/, api("{\"shareId\":\"" + code + "\",\"apiMapping\":\"/api/supportTask/doSupport\"}")];
            case 22:
                res = _b.sent();
                if (res.code === 200) {
                    console.log(res.msg);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 23:
                _b.sent();
                _b.label = 24;
            case 24:
                shareCodes_1_1 = shareCodes_1.next();
                return [3 /*break*/, 21];
            case 25: return [3 /*break*/, 28];
            case 26:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 28];
            case 27:
                try {
                    if (shareCodes_1_1 && !shareCodes_1_1.done && (_a = shareCodes_1["return"])) _a.call(shareCodes_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 28:
                i++;
                return [3 /*break*/, 19];
            case 29: return [2 /*return*/];
        }
    });
}); })();
function api(body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/api", "appid=china-joy&functionId=star_push_jd_prod&body=" + body + "&t=" + Date.now(), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'Origin': 'https://starintroducer.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://starintroducer.jd.com/',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function doTask() {
    return __awaiter(this, void 0, void 0, function () {
        var tasks, finished, _a, _b, t, j, timestamp, e_2_1;
        var e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('任务列表刷新');
                    return [4 /*yield*/, api("{\"apiMapping\":\"/api/task/getTaskList\"}")];
                case 1:
                    tasks = _d.sent();
                    finished = tasks.data.filter(function (t) {
                        if (t.totalNum === t.finishNum)
                            return t;
                    });
                    console.log(finished.length);
                    if (finished.length === 3)
                        return [2 /*return*/, 0];
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 17, 18, 19]);
                    _a = __values(tasks.data), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 16];
                    t = _b.value;
                    j = 0;
                    _d.label = 4;
                case 4:
                    if (!(j < t.totalNum - t.finishNum)) return [3 /*break*/, 15];
                    console.log(t.taskName);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, api("{\"parentId\":\"" + t.parentId + "\",\"taskId\":\"" + t.taskId + "\",\"apiMapping\":\"/api/task/doTask\"}")];
                case 6:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(10000)];
                case 7:
                    _d.sent();
                    if (!(res.code === 200)) return [3 /*break*/, 13];
                    console.log('任务完成');
                    return [4 /*yield*/, api("{\"apiMapping\":\"/api/index/indexInfo\"}")];
                case 8:
                    _d.sent();
                    if (t.type === 'FOLLOW_SHOP_TASK')
                        return [2 /*return*/, 1];
                    timestamp = res.data.timeStamp;
                    return [4 /*yield*/, api("{\"parentId\":\"" + t.parentId + "\",\"taskId\":\"" + t.taskId + "\",\"timeStamp\":" + timestamp + ",\"apiMapping\":\"/api/task/getReward\"}")];
                case 9:
                    res = _d.sent();
                    if (!(res.code === 200)) return [3 /*break*/, 11];
                    console.log('领奖成功，获得', res.data.score);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 10:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 11:
                    console.log('领奖失败', res);
                    _d.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    console.log('任务失败', res);
                    _d.label = 14;
                case 14:
                    j++;
                    return [3 /*break*/, 4];
                case 15:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 16: return [3 /*break*/, 19];
                case 17:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 19];
                case 18:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 19: return [2 /*return*/];
            }
        });
    });
}
