"use strict";
/**
 * 京喜-首页-牛牛福利
 * 助力 内部 -> HW.ts
 * 1 0,9,19,23 * * *
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
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cookie = '', UserName, index, res = '';
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, coin, tasks, _a, _b, t, _c, _d, t, _e, _f, t, e_1_1, surplusTimes, j, i, shareCode_1, shareCode_1_1, code, e_2_1;
    var e_3, _g, e_4, _h, e_1, _j, e_2, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _l.sent();
                i = 0;
                _l.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 29];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, api('sign/UserSignNew', 'sceneval,source', { source: '' })];
            case 3:
                res = _l.sent();
                console.log('签到', JSON.stringify(res));
                console.log('助力码', res.data.token);
                shareCodeSelf.push(res.data.token);
                coin = res.data.pgAmountTotal;
                console.log('金币', coin);
                return [4 /*yield*/, api('task/QueryUserTask', 'sceneval,taskType', { taskType: 0 })];
            case 4:
                res = _l.sent();
                tasks = [];
                if (!res.datas) return [3 /*break*/, 5];
                try {
                    for (_a = (e_3 = void 0, __values(res.datas)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        t = _b.value;
                        if (t.state !== 2)
                            tasks.push(t.taskid);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_g = _a["return"])) _g.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, api('task/QueryPgTaskCfg', 'sceneval', {})];
            case 6:
                res = _l.sent();
                if (tasks.length === 0) {
                    try {
                        for (_c = (e_4 = void 0, __values(res.data.tasks)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            t = _d.value;
                            tasks.push(t.taskid);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_h = _c["return"])) _h.call(_c);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                _l.label = 7;
            case 7:
                console.log('tasks:', tasks);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _l.sent();
                return [4 /*yield*/, api('task/QueryPgTaskCfg', 'sceneval', {})];
            case 9:
                res = _l.sent();
                _l.label = 10;
            case 10:
                _l.trys.push([10, 18, 19, 20]);
                _e = (e_1 = void 0, __values(res.data.tasks)), _f = _e.next();
                _l.label = 11;
            case 11:
                if (!!_f.done) return [3 /*break*/, 17];
                t = _f.value;
                if (!tasks.includes(t.taskid)) return [3 /*break*/, 16];
                console.log(t.taskName);
                return [4 /*yield*/, api('task/drawUserTask', 'sceneval,taskid', { taskid: t.taskId })];
            case 12:
                res = _l.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 13:
                _l.sent();
                return [4 /*yield*/, api('task/UserTaskFinish', 'sceneval,taskid', { taskid: t.taskId })];
            case 14:
                res = _l.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 15:
                _l.sent();
                _l.label = 16;
            case 16:
                _f = _e.next();
                return [3 /*break*/, 11];
            case 17: return [3 /*break*/, 20];
            case 18:
                e_1_1 = _l.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 20];
            case 19:
                try {
                    if (_f && !_f.done && (_j = _e["return"])) _j.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 20: return [4 /*yield*/, api('active/LuckyTwistUserInfo', 'sceneval', {})];
            case 21:
                res = _l.sent();
                surplusTimes = res.data.surplusTimes;
                console.log('剩余抽奖次数', surplusTimes);
                j = 0;
                _l.label = 22;
            case 22:
                if (!(j < surplusTimes && coin >= 10)) return [3 /*break*/, 26];
                return [4 /*yield*/, api('active/LuckyTwistDraw', 'active,activedesc,sceneval', { active: 'rwjs_fk1111', activedesc: encodeURIComponent('幸运扭蛋机抽奖') })];
            case 23:
                res = _l.sent();
                console.log('抽奖成功', res.data.prize[0].prizename);
                coin -= 10;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 24:
                _l.sent();
                _l.label = 25;
            case 25:
                j++;
                return [3 /*break*/, 22];
            case 26: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 27:
                _l.sent();
                _l.label = 28;
            case 28:
                i++;
                return [3 /*break*/, 2];
            case 29:
                console.log('内部助力', shareCodeSelf);
                i = 0;
                _l.label = 30;
            case 30:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 44];
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 32];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('nnfls')];
            case 31:
                shareCodeHW = _l.sent();
                _l.label = 32;
            case 32:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false)));
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _l.label = 33;
            case 33:
                _l.trys.push([33, 41, 42, 43]);
                shareCode_1 = (e_2 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _l.label = 34;
            case 34:
                if (!!shareCode_1_1.done) return [3 /*break*/, 40];
                code = shareCode_1_1.value;
                console.log(UserName + " \u53BB\u52A9\u529B " + code);
                return [4 /*yield*/, api('sign/helpSign', 'flag,sceneval,token', { flag: 0, token: code })];
            case 35:
                res = _l.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 36:
                _l.sent();
                return [4 /*yield*/, api('sign/helpSign', 'flag,sceneval,token', { flag: 1, token: code })];
            case 37:
                res = _l.sent();
                console.log('助力结果', res.errMsg);
                if (res.errMsg === 'help day limit')
                    return [3 /*break*/, 40];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 38:
                _l.sent();
                _l.label = 39;
            case 39:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 34];
            case 40: return [3 /*break*/, 43];
            case 41:
                e_2_1 = _l.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 43];
            case 42:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_k = shareCode_1["return"])) _k.call(shareCode_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 43:
                i++;
                return [3 /*break*/, 30];
            case 44: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/pgcenter/" + fn + "?sceneval=2&_stk=sceneval&_ste=1&_=" + Date.now() + "&sceneval=2", stk, params, 10012);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://st.jingxi.com/pingou/taskcenter/index.html',
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
