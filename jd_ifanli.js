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
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, finishCount, maxTaskCount, j, tasks, _a, _b, t, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _d.sent();
                i = 0;
                _d.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 20];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, api('getTaskFinishCount')];
            case 3:
                res = _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 4:
                _d.sent();
                finishCount = res.content.finishCount, maxTaskCount = res.content.maxTaskCount;
                console.log(finishCount, '/', maxTaskCount);
                j = 0;
                _d.label = 5;
            case 5:
                if (!(j < maxTaskCount - finishCount)) return [3 /*break*/, 19];
                return [4 /*yield*/, api('getTaskList')];
            case 6:
                tasks = _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 7:
                _d.sent();
                _d.label = 8;
            case 8:
                _d.trys.push([8, 16, 17, 18]);
                _a = (e_1 = void 0, __values(tasks.content)), _b = _a.next();
                _d.label = 9;
            case 9:
                if (!!_b.done) return [3 /*break*/, 15];
                t = _b.value;
                if (!(t.statusName !== '活动结束')) return [3 /*break*/, 14];
                return [4 /*yield*/, taskApi('saveTaskRecord', { taskId: t.taskId, taskType: t.taskType, businessId: t.businessId })];
            case 10:
                res = _d.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.watchTime * 1000 + 500)];
            case 11:
                _d.sent();
                return [4 /*yield*/, taskApi('saveTaskRecord', { taskId: t.taskId, taskType: t.taskType, businessId: t.businessId, uid: res.content.uid, tt: res.content.tt })];
            case 12:
                res = _d.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 13:
                _d.sent();
                _d.label = 14;
            case 14:
                _b = _a.next();
                return [3 /*break*/, 9];
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
            case 18:
                j++;
                return [3 /*break*/, 5];
            case 19:
                i++;
                return [3 /*break*/, 2];
            case 20: return [2 /*return*/];
        }
    });
}); })();
function api(fn) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://ifanli.m.jd.com/rebateapi/task/".concat(fn), {
                        headers: {
                            "Host": "ifanli.m.jd.com",
                            "User-Agent": TS_USER_AGENTS_1["default"],
                            "Referer": "https://ifanli.m.jd.com/rebate/earnBean.html?paltform=null",
                            "Cookie": cookie,
                            "Content-Type": "application/json;charset=UTF-8"
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
function taskApi(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://ifanli.m.jd.com/rebateapi/task/".concat(fn), JSON.stringify(body), {
                        headers: {
                            'authority': 'ifanli.m.jd.com',
                            'user-agent': TS_USER_AGENTS_1["default"],
                            'content-type': 'application/json;charset=UTF-8',
                            'accept': 'application/json, text/plain, */*',
                            'origin': 'https://ifanli.m.jd.com',
                            'referer': 'https://ifanli.m.jd.com/rebate/earnBean.html?paltform=null',
                            'accept-language': 'zh-CN,zh;q=0.9',
                            'cookie': cookie,
                            'Content-Type': 'application/json; charset=UTF-8'
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    });
}
