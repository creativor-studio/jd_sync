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
var sendNotify_1 = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var cow = require('./utils/jd_jxmc.js').cow;
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, i, j, lastgettime, food, petid, coins, e_1, _a, _b, card, e_2_1, drawTimes, j, e_3, cowToken, _c, _d, day, e_4_1, j, _e, _f, t, e_5, e_6, i, data, e_7, j, i, data, e_8, j;
    var e_2, _g, e_4, _h, e_9, _j;
    var _k, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                try {
                    (0, TS_USER_AGENTS_1.resetHosts)();
                }
                catch (e) {
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _m.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _m.sent();
                if (process.argv[2]) {
                    console.log('收到命令行cookie');
                    cookiesArr = [unescape(process.argv[2])];
                }
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _m.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 94];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _m.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 5:
                homePageInfo = _m.sent();
                if (!(homePageInfo.data.maintaskId !== 'pause')) return [3 /*break*/, 10];
                console.log('init...');
                j = 0;
                _m.label = 6;
            case 6:
                if (!(j < 20)) return [3 /*break*/, 10];
                return [4 /*yield*/, api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', { step: homePageInfo.data.maintaskId })];
            case 7:
                res = _m.sent();
                if (res.data.maintaskId === 'pause')
                    return [3 /*break*/, 10];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _m.sent();
                _m.label = 9;
            case 9:
                j++;
                return [3 /*break*/, 6];
            case 10: return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 11:
                homePageInfo = _m.sent();
                lastgettime = void 0;
                if ((_l = (_k = homePageInfo.data) === null || _k === void 0 ? void 0 : _k.cow) === null || _l === void 0 ? void 0 : _l.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 93];
                }
                food = 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                }
                catch (e) {
                    console.log('未开通？黑号？');
                    return [3 /*break*/, 93];
                }
                petid = homePageInfo.data.petinfo[0].petid;
                coins = homePageInfo.data.coins;
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _m.label = 12;
            case 12:
                _m.trys.push([12, 14, , 15]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 13:
                _m.sent();
                return [3 /*break*/, 15];
            case 14:
                e_1 = _m.sent();
                console.log(e_1);
                return [3 /*break*/, 15];
            case 15:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 16:
                // 扭蛋机
                res = _m.sent();
                _m.label = 17;
            case 17:
                _m.trys.push([17, 22, 23, 24]);
                _a = (e_2 = void 0, __values(res.data.cardinfo)), _b = _a.next();
                _m.label = 18;
            case 18:
                if (!!_b.done) return [3 /*break*/, 21];
                card = _b.value;
                console.log("card " + card.cardtype, card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum)) return [3 /*break*/, 20];
                console.log('可以兑换');
                // TODO 兑换卡片
                return [4 /*yield*/, (0, notify.sendNotify)('牧场卡片可兑换', UserName)];
            case 19:
                // TODO 兑换卡片
                _m.sent();
                _m.label = 20;
            case 20:
                _b = _a.next();
                return [3 /*break*/, 18];
            case 21: return [3 /*break*/, 24];
            case 22:
                e_2_1 = _m.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 24];
            case 23:
                try {
                    if (_b && !_b.done && (_g = _a["return"])) _g.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 24:
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 26];
                return [4 /*yield*/, (0, notify.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7" + (i + 1) + " " + UserName + "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A")];
            case 25:
                _m.sent();
                return [3 /*break*/, 33];
            case 26:
                console.log('扭蛋机剩余次数:', drawTimes);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 27:
                _m.sent();
                j = 0;
                _m.label = 28;
            case 28:
                if (!(j < drawTimes)) return [3 /*break*/, 33];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 29:
                res = _m.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 31];
                if (res.data.prizetype === 3) {
                    console.log('抽奖成功，金币：', res.data.addcoins);
                }
                else if (res.data.prizetype === 1) {
                    console.log('抽奖成功，卡片：', res.data.cardtype);
                }
                else {
                    console.log('抽奖成功，其他：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 30:
                _m.sent();
                return [3 /*break*/, 32];
            case 31:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 33];
            case 32:
                j++;
                return [3 /*break*/, 28];
            case 33: return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 34:
                // 红包
                res = _m.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _m.label = 35;
            case 35:
                _m.trys.push([35, 37, , 38]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 36:
                _m.sent();
                return [3 /*break*/, 38];
            case 37:
                e_3 = _m.sent();
                return [3 /*break*/, 38];
            case 38: return [4 /*yield*/, cow(lastgettime)];
            case 39:
                cowToken = _m.sent();
                console.log(cowToken);
                return [4 /*yield*/, api('operservice/GetCoin', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,token', { token: cowToken })];
            case 40:
                res = _m.sent();
                if (res.ret === 0)
                    console.log('收牛牛:', res.data.addcoin);
                else
                    console.log('收牛牛:', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)
                    // 签到
                ];
            case 41:
                _m.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 42:
                // 签到
                res = _m.sent();
                if (!res.data.signlist) return [3 /*break*/, 51];
                _m.label = 43;
            case 43:
                _m.trys.push([43, 48, 49, 50]);
                _c = (e_4 = void 0, __values(res.data.signlist)), _d = _c.next();
                _m.label = 44;
            case 44:
                if (!!_d.done) return [3 /*break*/, 47];
                day = _d.value;
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 46];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 45:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 47];
            case 46:
                _d = _c.next();
                return [3 /*break*/, 44];
            case 47: return [3 /*break*/, 50];
            case 48:
                e_4_1 = _m.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 50];
            case 49:
                try {
                    if (_d && !_d.done && (_h = _c["return"])) _h.call(_c);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 50: return [3 /*break*/, 52];
            case 51:
                console.log('没有获取到签到信息！');
                _m.label = 52;
            case 52: return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 53:
                // 登录领白菜
                res = _m.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 55];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 54:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜：', res.data.drawnum);
                }
                _m.label = 55;
            case 55:
                console.log('任务列表开始');
                j = 0;
                _m.label = 56;
            case 56:
                if (!(j < 30)) return [3 /*break*/, 60];
                return [4 /*yield*/, getTask()];
            case 57:
                if ((_m.sent()) === 0) {
                    return [3 /*break*/, 60];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 58:
                _m.sent();
                _m.label = 59;
            case 59:
                j++;
                return [3 /*break*/, 56];
            case 60:
                console.log('任务列表结束');
                _m.label = 61;
            case 61:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 64];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 62:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 64];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 63:
                _m.sent();
                return [3 /*break*/, 61];
            case 64: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 65:
                _m.sent();
                console.log('food:', food, food >= 10);
                _m.label = 66;
            case 66:
                if (!(food >= 10)) return [3 /*break*/, 74];
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 67:
                res = _m.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 68];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 72];
            case 68:
                if (!(res.ret === 2020)) return [3 /*break*/, 71];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 69:
                homePageInfo = _m.sent();
                try {
                    for (_e = (e_9 = void 0, __values(homePageInfo.data.petinfo)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        t = _f.value;
                        if (t.progress === '0') {
                            petid = t.petid;
                            break;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_j = _e["return"])) _j.call(_e);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 70:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 74];
                }
                return [3 /*break*/, 72];
            case 71:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 74];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 74];
                }
                _m.label = 72;
            case 72: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 73:
                _m.sent();
                return [3 /*break*/, 66];
            case 74: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 75:
                _m.sent();
                _m.label = 76;
            case 76:
                if (!1) return [3 /*break*/, 85];
                _m.label = 77;
            case 77:
                _m.trys.push([77, 83, , 84]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 78:
                res = _m.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 85];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 79:
                _m.sent();
                if (!res.data.surprise) return [3 /*break*/, 82];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 80:
                res = _m.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 81:
                _m.sent();
                _m.label = 82;
            case 82: return [3 /*break*/, 84];
            case 83:
                e_5 = _m.sent();
                console.log('Error:', e_5);
                return [3 /*break*/, 85];
            case 84: return [3 /*break*/, 76];
            case 85: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 86:
                _m.sent();
                _m.label = 87;
            case 87:
                if (!1) return [3 /*break*/, 93];
                _m.label = 88;
            case 88:
                _m.trys.push([88, 91, , 92]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', {
                        type: '1',
                        petid: petid
                    })];
            case 89:
                res = _m.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 93];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 90:
                _m.sent();
                return [3 /*break*/, 92];
            case 91:
                e_6 = _m.sent();
                console.log('Error:', e_6);
                return [3 /*break*/, 93];
            case 92: return [3 /*break*/, 87];
            case 93:
                i++;
                return [3 /*break*/, 3];
            case 94:
                i = 0;
                _m.label = 95;
            case 95:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 107];
                return [4 /*yield*/, getCodes()
                    // 获取随机红包码
                ];
            case 96:
                _m.sent();
                _m.label = 97;
            case 97:
                _m.trys.push([97, 99, , 100]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmchb/30", { timeout: 10000 })];
            case 98:
                data = (_m.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesHbSelf), false), __read(shareCodesHbHw), false), __read(data.data), false)));
                return [3 /*break*/, 100];
            case 99:
                e_7 = _m.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHbSelf), false), __read(shareCodesHbHw), false)));
                return [3 /*break*/, 100];
            case 100:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 101:
                jxToken = _m.sent();
                j = 0;
                _m.label = 102;
            case 102:
                if (!(j < shareCodes.length)) return [3 /*break*/, 106];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 103:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 106];
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 104:
                _m.sent();
                _m.label = 105;
            case 105:
                j++;
                return [3 /*break*/, 102];
            case 106:
                i++;
                return [3 /*break*/, 95];
            case 107:
                i = 0;
                _m.label = 108;
            case 108:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 120];
                return [4 /*yield*/, getCodes()
                    // 获取随机助力码
                ];
            case 109:
                _m.sent();
                _m.label = 110;
            case 110:
                _m.trys.push([110, 112, , 113]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 111:
                data = (_m.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(data.data), false)));
                return [3 /*break*/, 113];
            case 112:
                e_8 = _m.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                return [3 /*break*/, 113];
            case 113:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 114:
                jxToken = _m.sent();
                j = 0;
                _m.label = 115;
            case 115:
                if (!(j < shareCodes.length)) return [3 /*break*/, 119];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 116:
                res = _m.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 117:
                _m.sent();
                _m.label = 118;
            case 118:
                j++;
                return [3 /*break*/, 115];
            case 119:
                i++;
                return [3 /*break*/, 108];
            case 120: return [2 /*return*/];
        }
    });
}); })();
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, awardCoin, e_10_1;
        var e_10, _c;
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
                    e_10_1 = _d.sent();
                    e_10 = { error: e_10_1 };
                    return [3 /*break*/, 15];
                case 14:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_10) throw e_10.error; }
                    return [7 /*endfinally*/];
                case 15: return [2 /*return*/, 0];
            }
        });
    });
}
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_11;
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
                                'Host': 'm.jingxi.com',
                                'User-Agent': "jdpingou;iPhone;5.9.0;12.4.1;" + (0, TS_USER_AGENTS_1.randomString)(40) + ";network/wifi;",
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html',
                                'Cookie': cookie
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (typeof data === 'string')
                        return [2 /*return*/, JSON.parse(data.replace(/jsonpCBK.?\(/, '').split('\n')[0])];
                    return [2 /*return*/, data];
                case 3:
                    e_11 = _a.sent();
                    console.log('api Error:', e_11);
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
                    (0, TS_USER_AGENTS_1.resetHosts)();
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmc?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
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
                    (0, TS_USER_AGENTS_1.resetHosts)();
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmchb?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })
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
        var data, e_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get('https://api.jdsharecode.xyz/api/HW_CODES')];
                case 1:
                    data = (_a.sent()).data;
                    shareCodesHW = data.jxmc || [];
                    shareCodesHbHw = data.jxmchb || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_12 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
