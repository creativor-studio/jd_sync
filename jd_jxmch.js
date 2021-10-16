"use strict";
/**
 * 京喜牧场
 * cron: 10 0,12,18 * * *
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
var ts_md5_1 = require("ts-md5");
var path = require("path");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cow = require('./utils/jd_jxmc.js').cow;
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, i, lastgettime, food, petid, coins, e_1, e_2, cowToken, _a, _b, day, e_3_1, j, e_4, e_5, e_6, i, data, e_7, j, i, data, e_8, j;
    var e_3, _c;
    var _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _f.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _f.sent();
                if (process.argv[2]) {
                    console.log('收到命令行cookie');
                    cookiesArr = [unescape(process.argv[2])];
                }
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _f.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 73];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _f.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 5:
                homePageInfo = _f.sent();
                lastgettime = void 0;
                if ((_e = (_d = homePageInfo.data) === null || _d === void 0 ? void 0 : _d.cow) === null || _e === void 0 ? void 0 : _e.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                    console.log('lastgettime:', lastgettime);
                }
                else {
                    return [3 /*break*/, 72];
                }
                food = 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                }
                catch (e) {
                    console.log('未开通？黑号？');
                    return [3 /*break*/, 72];
                }
                petid = homePageInfo.data.petinfo[0].petid;
                coins = homePageInfo.data.coins;
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _f.label = 6;
            case 6:
                _f.trys.push([6, 8, , 9]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 7:
                _f.sent();
                return [3 /*break*/, 9];
            case 8:
                e_1 = _f.sent();
                console.log(e_1);
                return [3 /*break*/, 9];
            case 9:
                console.log('现有草:', food);
                console.log('金币:', coins);
                return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 10:
                // 红包
                res = _f.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _f.label = 11;
            case 11:
                _f.trys.push([11, 13, , 14]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 12:
                _f.sent();
                return [3 /*break*/, 14];
            case 13:
                e_2 = _f.sent();
                return [3 /*break*/, 14];
            case 14: return [4 /*yield*/, cow(lastgettime)];
            case 15:
                cowToken = _f.sent();
                console.log(cowToken);
                return [4 /*yield*/, api('operservice/GetCoin', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,token', { token: cowToken })];
            case 16:
                res = _f.sent();
                if (res.ret === 0)
                    console.log('收牛牛:', res.data.addcoin);
                else
                    console.log('收牛牛:', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 签到
                ];
            case 17:
                _f.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,sceneid')];
            case 18:
                // 签到
                res = _f.sent();
                if (!res.data.signlist) return [3 /*break*/, 27];
                _f.label = 19;
            case 19:
                _f.trys.push([19, 24, 25, 26]);
                _a = (e_3 = void 0, __values(res.data.signlist)), _b = _a.next();
                _f.label = 20;
            case 20:
                if (!!_b.done) return [3 /*break*/, 23];
                day = _b.value;
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 22];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 21:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 23];
            case 22:
                _b = _a.next();
                return [3 /*break*/, 20];
            case 23: return [3 /*break*/, 26];
            case 24:
                e_3_1 = _f.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 26];
            case 25:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 26: return [3 /*break*/, 28];
            case 27:
                console.log('没有获取到签到信息！');
                _f.label = 28;
            case 28: return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 29:
                // 登录领白菜
                res = _f.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 31];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 30:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜：', res.data.drawnum);
                }
                _f.label = 31;
            case 31:
                console.log('任务列表开始');
                j = 0;
                _f.label = 32;
            case 32:
                if (!(j < 30)) return [3 /*break*/, 36];
                return [4 /*yield*/, getTask()];
            case 33:
                if ((_f.sent()) === 0) {
                    return [3 /*break*/, 36];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 34:
                _f.sent();
                _f.label = 35;
            case 35:
                j++;
                return [3 /*break*/, 32];
            case 36:
                console.log('任务列表结束');
                _f.label = 37;
            case 37:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 40];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 38:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 40];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 39:
                _f.sent();
                return [3 /*break*/, 37];
            case 40: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 41:
                _f.sent();
                _f.label = 42;
            case 42:
                if (!(food >= 10)) return [3 /*break*/, 53];
                _f.label = 43;
            case 43:
                _f.trys.push([43, 51, , 52]);
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 44:
                res = _f.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 45];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 49];
            case 45:
                if (!(res.ret === 2020)) return [3 /*break*/, 48];
                if (!(res.data.maintaskId === 'pause' || res.data.maintaskId === 'E-1')) return [3 /*break*/, 47];
                console.log('收🥚');
                return [4 /*yield*/, api('operservice/GetSelfResult', 'channel,itemid,sceneid,type', { petid: petid, type: '11' })];
            case 46:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                }
                _f.label = 47;
            case 47: return [3 /*break*/, 49];
            case 48:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 53];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 53];
                }
                _f.label = 49;
            case 49: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 50:
                _f.sent();
                return [3 /*break*/, 52];
            case 51:
                e_4 = _f.sent();
                return [3 /*break*/, 53];
            case 52: return [3 /*break*/, 42];
            case 53: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 54:
                _f.sent();
                _f.label = 55;
            case 55:
                if (!1) return [3 /*break*/, 64];
                _f.label = 56;
            case 56:
                _f.trys.push([56, 62, , 63]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 57:
                res = _f.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 64];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 58:
                _f.sent();
                if (!res.data.surprise) return [3 /*break*/, 61];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,sceneid,type", { type: '14' })];
            case 59:
                res = _f.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 60:
                _f.sent();
                _f.label = 61;
            case 61: return [3 /*break*/, 63];
            case 62:
                e_5 = _f.sent();
                console.log('Error:', e_5);
                return [3 /*break*/, 64];
            case 63: return [3 /*break*/, 55];
            case 64: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 65:
                _f.sent();
                _f.label = 66;
            case 66:
                if (!1) return [3 /*break*/, 72];
                _f.label = 67;
            case 67:
                _f.trys.push([67, 70, , 71]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,petid,sceneid,type', {
                        type: '1',
                        petid: petid
                    })];
            case 68:
                res = _f.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 72];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 69:
                _f.sent();
                return [3 /*break*/, 71];
            case 70:
                e_6 = _f.sent();
                console.log('Error:', e_6);
                return [3 /*break*/, 72];
            case 71: return [3 /*break*/, 66];
            case 72:
                i++;
                return [3 /*break*/, 3];
            case 73:
                i = 0;
                _f.label = 74;
            case 74:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 86];
                return [4 /*yield*/, getCodes()];
            case 75:
                _f.sent();
                _f.label = 76;
            case 76:
                _f.trys.push([76, 78, , 79]);
                return [4 /*yield*/, axios_1["default"].get(require('./USER_AGENTS').hwApi + "jxmchb/30", { timeout: 10000 })];
            case 77:
                data = (_f.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesHbSelf), false), __read(shareCodesHbHw), false), __read(data.data), false)));
                return [3 /*break*/, 79];
            case 78:
                e_7 = _f.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHbSelf), false), __read(shareCodesHbHw), false)));
                return [3 /*break*/, 79];
            case 79:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 80:
                jxToken = _f.sent();
                j = 0;
                _f.label = 81;
            case 81:
                if (!(j < shareCodes.length)) return [3 /*break*/, 85];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 82:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 85];
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 83:
                _f.sent();
                _f.label = 84;
            case 84:
                j++;
                return [3 /*break*/, 81];
            case 85:
                i++;
                return [3 /*break*/, 74];
            case 86:
                i = 0;
                _f.label = 87;
            case 87:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 99];
                return [4 /*yield*/, getCodes()];
            case 88:
                _f.sent();
                _f.label = 89;
            case 89:
                _f.trys.push([89, 91, , 92]);
                return [4 /*yield*/, axios_1["default"].get(require('./USER_AGENTS').hwApi + "jxmc/30", { timeout: 10000 })];
            case 90:
                data = (_f.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(data.data), false)));
                return [3 /*break*/, 92];
            case 91:
                e_8 = _f.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                return [3 /*break*/, 92];
            case 92:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 93:
                jxToken = _f.sent();
                j = 0;
                _f.label = 94;
            case 94:
                if (!(j < shareCodes.length)) return [3 /*break*/, 98];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 95:
                res = _f.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 96:
                _f.sent();
                _f.label = 97;
            case 97:
                j++;
                return [3 /*break*/, 94];
            case 98:
                i++;
                return [3 /*break*/, 87];
            case 99: return [2 /*return*/];
        }
    });
}); })();
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, awardCoin, e_9_1;
        var e_9, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('刷新任务列表');
                    return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 })];
                case 1:
                    res = _d.sent();
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 13, 14, 15]);
                    _a = __values(res.data.userTaskStatusList), _b = _a.next();
                    _d.label = 3;
                case 3:
                    if (!!_b.done) return [3 /*break*/, 12];
                    t = _b.value;
                    if (!(t.completedTimes == t.targetTimes && t.awardStatus === 2)) return [3 /*break*/, 7];
                    return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId })];
                case 4:
                    res = _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 6];
                    awardCoin = res.data.prizeInfo.match(/:(.*)}/)[1] * 1;
                    console.log('领奖成功:', awardCoin);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
                case 5:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 6:
                    console.log('领奖失败:', res);
                    return [2 /*return*/, 0];
                case 7:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && t.awardStatus === 2 && t.taskType === 2)) return [3 /*break*/, 11];
                    return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId, configExtra: '' })];
                case 8:
                    res = _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 10];
                    console.log('任务完成');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 9:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 10:
                    console.log('任务失败:', res);
                    return [2 /*return*/, 0];
                case 11:
                    _b = _a.next();
                    return [3 /*break*/, 3];
                case 12: return [3 /*break*/, 15];
                case 13:
                    e_9_1 = _d.sent();
                    e_9 = { error: e_9_1 };
                    return [3 /*break*/, 15];
                case 14:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_9) throw e_9.error; }
                    return [7 /*endfinally*/];
                case 15: return [2 /*return*/, 0];
            }
        });
    });
}
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1) {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc&bizCode=jxmc&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2", stk, params, 10028);
                    }
                    else {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=" + jxToken['farm_jstoken'] + "&timestamp=" + jxToken['timestamp'] + "&phoneid=" + jxToken['phoneid'] + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + (Date.now() + 2) + "&sceneval=2", stk, params, 10028);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'User-Agent': 'jdpingou;',
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
                                'Host': 'm.jingxi.com',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string')
                        return [2 /*return*/, JSON.parse(data.replace(/jsonpCBK.?\(/, '').split('\n')[0])];
                    return [2 /*return*/, data];
                case 3:
                    e_10 = _a.sent();
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var bean, farm, pin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = ts_md5_1.Md5.hashStr(pin);
                    return [4 /*yield*/, axios_1["default"].get(require('./USER_AGENTS').hwApi + "autoInsert/jxmc?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
                            .then(function (res) {
                            if (res.data.code === 200)
                                console.log('已自动提交助力码');
                            else
                                console.log('提交失败！已提交farm的cookie才可提交cfd');
                            resolve(200);
                        })["catch"](function () {
                            reject('访问助力池出错');
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
}
function makeShareCodesHb(code) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var bean, farm, pin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = cookie.match(/pt_pin=([^;]*)/)[1];
                    pin = ts_md5_1.Md5.hashStr(pin);
                    return [4 /*yield*/, axios_1["default"].get(require('./USER_AGENTS').hwApi + "autoInsert/jxmchb?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
                            .then(function (res) {
                            if (res.data.code === 200)
                                console.log('已自动提交红包码');
                            else
                                console.log('提交失败！已提交farm的cookie才可提交cfd');
                            resolve(200);
                        })["catch"](function () {
                            reject('访问助力池出错');
                        })];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
}
function getCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get('https://api.jdsharecode.xyz/api/HW_CODES', { timeout: 10000 })];
                case 1:
                    data = (_a.sent()).data;
                    shareCodesHW = data.jxmc || [];
                    shareCodesHbHw = data.jxmchb || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_11 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
