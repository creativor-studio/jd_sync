"use strict";
/**
 * 京东-下拉
 * cron: 0 9,13,16,19,23 * * *
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
var activityId, encryptProjectId, inviteTaskId;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, _b, t, e_1_1, i, shareCode_1, shareCode_1_1, code, e_2_1;
    var e_1, _c, e_2, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _e.sent();
                i = 0;
                _e.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 15];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                uuid = (0, TS_USER_AGENTS_1.randomString)(40);
                return [4 /*yield*/, api('showSecondFloorCardInfo', { "source": "card" })];
            case 3:
                res = _e.sent();
                activityId = res.data.result.activityBaseInfo.activityId, encryptProjectId = res.data.result.activityBaseInfo.encryptProjectId;
                console.log(activityId);
                return [4 /*yield*/, api('superBrandTaskList', { "source": "card", "activityId": activityId, "assistInfoFlag": 1 })];
            case 4:
                res = _e.sent();
                _e.label = 5;
            case 5:
                _e.trys.push([5, 10, 11, 12]);
                _a = (e_1 = void 0, __values(res.data.result.taskList)), _b = _a.next();
                _e.label = 6;
            case 6:
                if (!!_b.done) return [3 /*break*/, 9];
                t = _b.value;
                if (!!t.completionFlag) return [3 /*break*/, 8];
                if (!(t.assignmentName === '邀请好友')) return [3 /*break*/, 8];
                inviteTaskId = t.encryptAssignmentId;
                console.log('助力码', t.ext.assistTaskDetail.itemId);
                shareCodeSelf.push(t.ext.assistTaskDetail.itemId);
                return [4 /*yield*/, api('superBrandMyVoteFriendList', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": t.encryptAssignmentId, "assistInfoFlag": 1 })];
            case 7:
                res = _e.sent();
                console.log('收到助力', res.data.result.friendList.length, '/', 30);
                _e.label = 8;
            case 8:
                _b = _a.next();
                return [3 /*break*/, 6];
            case 9: return [3 /*break*/, 12];
            case 10:
                e_1_1 = _e.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 11:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 12: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 13:
                _e.sent();
                _e.label = 14;
            case 14:
                i++;
                return [3 /*break*/, 2];
            case 15:
                console.log('内部助力', shareCodeSelf);
                if (!(shareCodeHW.length === 0)) return [3 /*break*/, 17];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.getshareCodeHW)('tw')];
            case 16:
                shareCodeHW = _e.sent();
                _e.label = 17;
            case 17:
                shareCode = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodeSelf), false), __read(shareCodeHW), false)));
                i = 0;
                _e.label = 18;
            case 18:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 33];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _e.label = 19;
            case 19:
                _e.trys.push([19, 30, 31, 32]);
                shareCode_1 = (e_2 = void 0, __values(shareCode)), shareCode_1_1 = shareCode_1.next();
                _e.label = 20;
            case 20:
                if (!!shareCode_1_1.done) return [3 /*break*/, 29];
                code = shareCode_1_1.value;
                console.log("\u8D26\u53F7 " + UserName + " \u53BB\u52A9\u529B " + code);
                return [4 /*yield*/, api('superBrandDoTask', { "source": "card", "activityId": activityId, "encryptProjectId": encryptProjectId, "encryptAssignmentId": inviteTaskId, "assignmentType": 2, "itemId": code, "actionType": 0 })];
            case 21:
                res = _e.sent();
                if (!(res.data.bizCode === '0')) return [3 /*break*/, 22];
                console.log('成功');
                return [3 /*break*/, 26];
            case 22:
                if (!(res.data.bizCode === '104')) return [3 /*break*/, 23];
                console.log('已助力过');
                return [3 /*break*/, 26];
            case 23:
                if (!(res.data.bizCode === '109')) return [3 /*break*/, 24];
                console.log('不能自己给自己助力');
                return [3 /*break*/, 26];
            case 24:
                console.log('助力失败', res.data.bizMsg);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 25:
                _e.sent();
                return [3 /*break*/, 29];
            case 26: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 27:
                _e.sent();
                _e.label = 28;
            case 28:
                shareCode_1_1 = shareCode_1.next();
                return [3 /*break*/, 20];
            case 29: return [3 /*break*/, 32];
            case 30:
                e_2_1 = _e.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 32];
            case 31:
                try {
                    if (shareCode_1_1 && !shareCode_1_1.done && (_d = shareCode_1["return"])) _d.call(shareCode_1);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 32:
                i++;
                return [3 /*break*/, 18];
            case 33: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/?uuid=" + uuid + "&client=wh5&appid=ProductZ4Brand&functionId=" + fn + "&t=" + +new Date() + "&body=" + encodeURIComponent(JSON.stringify(body)), '', {
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
            }
        });
    });
}
