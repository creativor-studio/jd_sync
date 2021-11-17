"use strict";
/**
 * 京东-下拉
 * cron: 0 9-20/1 * * *
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
var shareCodeSelf = [], shareCode = [], shareCodeHW = [];
var activityId, encryptProjectId, inviteTaskId, isOpen = false;
var message = '', sendNotify = require('./sendNotify').sendNotify;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, _b, card, e_1, activityCardInfo, _c, _d, t, _e, _f, sign2, beginClock, e_2_1, j, e_3_1, i, shareCode_1, shareCode_1_1, code, e_4_1;
    var e_5, _g, e_3, _h, e_2, _j, e_4, _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _l.sent();
                i = 0;
                _l.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 39];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                uuid = (0, TS_USER_AGENTS_1.randomString)(40);
                _l.label = 3;
            case 3:
                _l.trys.push([3, 5, , 6]);
                return [4 /*yield*/, api('showSecondFloorCardInfo', { "source": "card" })];
            case 4:
                res = _l.sent();
                activityId = res.data.result.activityBaseInfo.activityId;
                encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                isOpen = true;
                // 已收集
                console.log('已收集');
                try {
                    for (_a = (e_5 = void 0, __values(res.data.result.activityCardInfo.cardPackList)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        card = _b.value;
                        console.log("card-".concat(card.cardType), card.num, card.num === 0 ? "!!!" : "");
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_g = _a["return"])) _g.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
                return [3 /*break*/, 6];
            case 5:
                e_1 = _l.sent();
                console.log('活动未开启');
                return [3 /*break*/, 39];
            case 6:
                activityCardInfo = res.data.result.activityCardInfo;
                if (!(activityCardInfo.divideTimeStatus === 1 && activityCardInfo.divideStatus === 0 && activityCardInfo.cardStatus === 1)) return [3 /*break*/, 9];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "tag": "divide" })];
            case 7:
                res = _l.sent();
                console.log('瓜分', res.data.result.rewards[0].beanNum);
                message += "\u8D26\u53F7".concat(index, "  ").concat(UserName, "\n").concat(res.data.result.rewards[0].beanNum, "\n\n");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _l.sent();
                _l.label = 9;
            case 9: return [4 /*yield*/, api('superBrandTaskList', { "source": "card", "activityId": activityId, "assistInfoFlag": 1 })];
            case 10:
                res = _l.sent();
                _l.label = 11;
            case 11:
                _l.trys.push([11, 34, 35, 36]);
                _c = (e_3 = void 0, __values(res.data.result.taskList || [])), _d = _c.next();
                _l.label = 12;
            case 12:
                if (!!_d.done) return [3 /*break*/, 33];
                t = _d.value;
                if (!!t.completionFlag) return [3 /*break*/, 27];
                if (!(t.assignmentType === 1)) return [3 /*break*/, 15];
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 1, "itemId": t.ext.shoppingActivity[0].itemId, "actionType": 0 })];
            case 13:
                res = _l.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 14:
                _l.sent();
                _l.label = 15;
            case 15:
                if (!(t.assignmentType === 3)) return [3 /*break*/, 18];
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 3, "itemId": t.ext.followShop[0].itemId, "actionType": 0 })];
            case 16:
                res = _l.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 17:
                _l.sent();
                _l.label = 18;
            case 18:
                if (!(t.assignmentType === 5)) return [3 /*break*/, 26];
                console.log(t.assignmentName);
                _l.label = 19;
            case 19:
                _l.trys.push([19, 24, 25, 26]);
                _e = (e_2 = void 0, __values(t.ext.sign2)), _f = _e.next();
                _l.label = 20;
            case 20:
                if (!!_f.done) return [3 /*break*/, 23];
                sign2 = _f.value;
                console.log(sign2.beginTime, sign2.status);
                beginClock = new Date("2021-01-01 ".concat(sign2.beginTime)).getHours();
                if (!(new Date().getHours() === beginClock && sign2.status === 1)) return [3 /*break*/, 22];
                console.log('开始下拉任务');
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assignmentType": 5, "itemId": sign2.itemId, "actionType": 0, "dropDownChannel": 1 })];
            case 21:
                res = _l.sent();
                (0, TS_USER_AGENTS_1.o2s)(res);
                _l.label = 22;
            case 22:
                _f = _e.next();
                return [3 /*break*/, 20];
            case 23: return [3 /*break*/, 26];
            case 24:
                e_2_1 = _l.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 26];
            case 25:
                try {
                    if (_f && !_f.done && (_j = _e["return"])) _j.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 26:
                if (t.assignmentType === 7) {
                    console.log('开卡  pass');
                }
                _l.label = 27;
            case 27:
                if (!(t.assignmentName === '邀请好友')) return [3 /*break*/, 32];
                (0, TS_USER_AGENTS_1.o2s)(t);
                inviteTaskId = t.encryptAssignmentId;
                console.log('助力码', t.ext.assistTaskDetail.itemId);
                shareCodeSelf.push(t.ext.assistTaskDetail.itemId);
                console.log('收到助力', t.completionCnt, '/', 30);
                j = 0;
                _l.label = 28;
            case 28:
                if (!(j < t.ext.cardAssistBoxRest)) return [3 /*break*/, 32];
                return [4 /*yield*/, api('superBrandTaskLottery', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId })];
            case 29:
                res = _l.sent();
                console.log('打开盒子', JSON.stringify(res));
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 30:
                _l.sent();
                _l.label = 31;
            case 31:
                j++;
                return [3 /*break*/, 28];
            case 32:
                _d = _c.next();
                return [3 /*break*/, 12];
            case 33: return [3 /*break*/, 36];
            case 34:
                e_3_1 = _l.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 36];
            case 35:
                try {
                    if (_d && !_d.done && (_h = _c["return"])) _h.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 36: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 37:
                _l.sent();
                _l.label = 38;
            case 38:
                i++;
                return [3 /*break*/, 2];
            case 39:
                if (!message) return [3 /*break*/, 41];
                return [4 /*yield*/, sendNotify("特物瓜分", message)];
            case 40:
                _l.sent();
                _l.label = 41;
            case 41:
                if (!isOpen) return [3 /*break*/, 59];
                console.log('内部助力', shareCodeSelf);
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 43];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tw')];
            case 42:
                shareCodeHW = _l.sent();
                _l.label = 43;
            case 43:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false)));
                i = 0;
                _l.label = 44;
            case 44:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 59];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _l.label = 45;
            case 45:
                _l.trys.push([45, 56, 57, 58]);
                shareCode_1 = (e_4 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _l.label = 46;
            case 46:
                if (!!shareCode_1_1.done) return [3 /*break*/, 55];
                code = shareCode_1_1.value;
                console.log("\u8D26\u53F7 ".concat(UserName, " \u53BB\u52A9\u529B ").concat(code));
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": inviteTaskId, "assignmentType": 2, "itemId": code, "actionType": 0 })];
            case 47:
                res = _l.sent();
                if (!(res.data.bizCode === '0')) return [3 /*break*/, 48];
                console.log('成功');
                return [3 /*break*/, 52];
            case 48:
                if (!(res.data.bizCode === '104')) return [3 /*break*/, 49];
                console.log('已助力过');
                return [3 /*break*/, 52];
            case 49:
                if (!(res.data.bizCode === '109')) return [3 /*break*/, 50];
                console.log('不能自己给自己助力');
                return [3 /*break*/, 52];
            case 50:
                console.log('助力失败', res.data.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 51:
                _l.sent();
                _l.label = 52;
            case 52: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 53:
                _l.sent();
                _l.label = 54;
            case 54:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 46];
            case 55: return [3 /*break*/, 58];
            case 56:
                e_4_1 = _l.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 58];
            case 57:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_k = shareCode_1["return"])) _k.call(shareCode_1);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 58:
                i++;
                return [3 /*break*/, 44];
            case 59: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/?uuid=".concat(uuid, "&client=wh5&appid=ProductZ4Brand&functionId=").concat(fn, "&t=").concat(Date.now(), "&body=").concat(encodeURIComponent(JSON.stringify(body))), '', {
                            headers: {
                                'Host': 'api.m.jd.com',
                                'Origin': 'https://prodev.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://prodev.m.jd.com/mall/active/ZskuZGqQMZ2j6L99PM1L8jg2F2a/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 2:
                    e_6 = _a.sent();
                    console.log('Error');
                    (0, TS_USER_AGENTS_1.o2s)(e_6);
                    return [2 /*return*/, ''];
                case 3: return [2 /*return*/];
            }
        });
    });
}
