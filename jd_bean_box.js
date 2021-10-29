"use strict";
/**
 * 领京豆-任务
 * cron: 1 0,9,12 * * *
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
var cookie = '', res = '', UserName, index, uuid;
var shareCodeSelf = [], shareCodeHW = [
    {
        shareCode: '14E185959D6E7563818B3CD5CAC5A849',
        groupCode: '903697802776043520'
    },
    {
        shareCode: 'C24FA9CD98CAC52DCD732BEF4331D894AD1DAAB9A3E3F6CBAFDE81EEB7393333',
        groupCode: '903703632645218304'
    },
    {
        shareCode: '2792D0AFEA0FA0FD38D4AF1BCA0E5486',
        groupCode: '903703899999068160'
    },
    {
        shareCode: '2EB0774E42574DD3A90570F53695C933',
        groupCode: '903703914641383424'
    },
    {
        shareCode: '91B2AF66C68B412620D9AAA015617D60AD1DAAB9A3E3F6CBAFDE81EEB7393333',
        groupCode: '903703928977907712'
    }
], shareCode = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, times, j, j, _a, _b, t, e_1_1, e_2, i, shareCode_1, shareCode_1_1, code, e_3_1;
    var e_1, _c, e_3, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                i = 0;
                _e.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 36];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, initForTurntableFarm()];
            case 3:
                res = _e.sent();
                times = res.remainLotteryTimes;
                console.log('剩余抽奖机会:', times);
                j = 0;
                _e.label = 4;
            case 4:
                if (!(j < times)) return [3 /*break*/, 8];
                console.log('开始抽奖...');
                return [4 /*yield*/, initForTurntableFarm(1)];
            case 5:
                res = _e.sent();
                if (res.code === '0') {
                    if (res.type === 'thanks') {
                        console.log('抽奖成功，获得：狗屁');
                    }
                    else {
                        console.log('抽奖成功，获得:', res.type);
                    }
                }
                else {
                    console.log('抽奖失败', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 6:
                _e.sent();
                _e.label = 7;
            case 7:
                j++;
                return [3 /*break*/, 4];
            case 8:
                uuid = randomString(40);
                j = 0;
                _e.label = 9;
            case 9:
                if (!(j < 4)) return [3 /*break*/, 28];
                console.log("Round:" + (j + 1));
                return [4 /*yield*/, api('beanTaskList', { "viewChannel": "AppHome" })];
            case 10:
                res = _e.sent();
                _e.label = 11;
            case 11:
                _e.trys.push([11, 24, , 25]);
                _e.label = 12;
            case 12:
                _e.trys.push([12, 21, 22, 23]);
                _a = (e_1 = void 0, __values(res.data.taskInfos)), _b = _a.next();
                _e.label = 13;
            case 13:
                if (!!_b.done) return [3 /*break*/, 20];
                t = _b.value;
                if (!(t.status === 1)) return [3 /*break*/, 19];
                console.log(t.taskName);
                return [4 /*yield*/, api('beanDoTask', {
                        "actionType": t.taskType === 3 ? 0 : 1,
                        "taskToken": t.subTaskVOS[0].taskToken
                    })];
            case 14:
                res = _e.sent();
                res.data.bizMsg ? console.log(res.data.bizMsg) : console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.waitDuration * 1000 || 2000)];
            case 15:
                _e.sent();
                if (!(t.taskType !== 3)) return [3 /*break*/, 17];
                return [4 /*yield*/, api('beanDoTask', {
                        "actionType": 0,
                        "taskToken": t.subTaskVOS[0].taskToken
                    })];
            case 16:
                res = _e.sent();
                if (res.data.bizMsg)
                    console.log(res.data.bizMsg);
                _e.label = 17;
            case 17: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 18:
                _e.sent();
                _e.label = 19;
            case 19:
                _b = _a.next();
                return [3 /*break*/, 13];
            case 20: return [3 /*break*/, 23];
            case 21:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 23];
            case 22:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 23: return [3 /*break*/, 25];
            case 24:
                e_2 = _e.sent();
                console.log('Error!', e_2);
                return [3 /*break*/, 25];
            case 25: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _e.sent();
                _e.label = 27;
            case 27:
                j++;
                return [3 /*break*/, 9];
            case 28: return [4 /*yield*/, qjd('signBeanGroupStageIndex', { "monitor_refer": "", "rnVersion": "3.9", "fp": "-1", "shshshfp": "-1", "shshshfpa": "-1", "referUrl": "-1", "userAgent": "-1", "jda": "-1", "monitor_source": "bean_m_bean_index" })];
            case 29:
                // 抢京豆
                res = _e.sent();
                if (!!res.data.shareCode) return [3 /*break*/, 32];
                console.log('抢京豆 init...');
                return [4 /*yield*/, qjd('signGroupHit', { "activeType": 2 })];
            case 30:
                res = _e.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 31:
                _e.sent();
                _e.label = 32;
            case 32: return [4 /*yield*/, qjd('signBeanGroupStageIndex', { "monitor_refer": "", "rnVersion": "3.9", "fp": "-1", "shshshfp": "-1", "shshshfpa": "-1", "referUrl": "-1", "userAgent": "-1", "jda": "-1", "monitor_source": "bean_m_bean_index" })];
            case 33:
                res = _e.sent();
                console.log('助力码', res.data.shareCode);
                shareCodeSelf.push({ shareCode: res.data.shareCode, groupCode: res.data.groupCode });
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 34:
                _e.sent();
                _e.label = 35;
            case 35:
                i++;
                return [3 /*break*/, 2];
            case 36:
                console.log('内部助力', shareCodeSelf);
                shareCode = __spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false);
                i = 0;
                _e.label = 37;
            case 37:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 47];
                uuid = randomString(40);
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _e.label = 38;
            case 38:
                _e.trys.push([38, 44, 45, 46]);
                shareCode_1 = (e_3 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _e.label = 39;
            case 39:
                if (!!shareCode_1_1.done) return [3 /*break*/, 43];
                code = shareCode_1_1.value;
                console.log(UserName + " \u53BB\u52A9\u529B " + code.shareCode);
                return [4 /*yield*/, qjd('signGroupHelp', { "activeType": 2, "groupCode": code.groupCode, "shareCode": code.shareCode, "activeId": "152", "source": "guest" })];
            case 40:
                res = _e.sent();
                console.log('助力结果');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 41:
                _e.sent();
                _e.label = 42;
            case 42:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 39];
            case 43: return [3 /*break*/, 46];
            case 44:
                e_3_1 = _e.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 46];
            case 45:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_d = shareCode_1["return"])) _d.call(shareCode_1);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 46:
                i++;
                return [3 /*break*/, 37];
            case 47: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=" + fn, "body=" + encodeURIComponent(JSON.stringify(body)) + "&appid=ld&client=apple&clientVersion=10.0.8&uuid=" + uuid + "&openudid=" + uuid, {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'content-type': 'application/x-www-form-urlencoded',
                            'referer': '',
                            'user-agent': 'JD4iPhone/167863%20(iPhone;%20iOS;%20Scale/3.00)',
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
function qjd(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].get("https://api.m.jd.com/client.action?functionId=" + fn + "&body=" + encodeURIComponent(JSON.stringify(body)) + "&appid=ld&client=apple&clientVersion=10.0.8&uuid=" + uuid + "&openudid=" + uuid, {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/rn/3MQXMdRUTeat9xqBSZDSCCAE9Eqz/index.html',
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
function randomString(e) {
    e = e || 32;
    var t = '0123456789', a = t.length, n = "";
    for (var i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n;
}
function initForTurntableFarm(type) {
    if (type === void 0) { type = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = type === 0
                        ? 'https://api.m.jd.com/client.action?functionId=initForTurntableFarm&body=%7B%22version%22%3A4%2C%22channel%22%3A1%7D&appid=wh5'
                        : 'https://api.m.jd.com/client.action?functionId=lotteryForTurntableFarm&body=%7B%22type%22%3A1%2C%22version%22%3A4%2C%22channel%22%3A1%7D&appid=wh5';
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://h5.m.jd.com/',
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
