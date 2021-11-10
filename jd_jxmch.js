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
var notify = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, i, j, lastgettime, food, petid, coins, petNum, e_1, tasks, _a, _b, t, j, e_2_1, drawTimes, j, _c, _d, card, e_3_1, e_4, e_5, _e, _f, day, e_6_1, j, _g, _h, t, e_7, e_8, i, data, e_9, j, i, data, e_10, j;
    var e_2, _j, e_3, _k, e_6, _l, e_11, _m;
    var _o, _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _q.sent();
                if (process.argv[2]) {
                    console.log('收到命令行cookie');
                    cookiesArr = [unescape(process.argv[2])];
                }
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _q.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 117];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                if (except.includes(encodeURIComponent(UserName))) {
                    console.log('已设置跳过');
                    return [3 /*break*/, 116];
                }
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _q.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 5:
                homePageInfo = _q.sent();
                if (!(homePageInfo.data.maintaskId !== 'pause')) return [3 /*break*/, 10];
                console.log('init...');
                j = 0;
                _q.label = 6;
            case 6:
                if (!(j < 20)) return [3 /*break*/, 10];
                return [4 /*yield*/, api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', { step: homePageInfo.data.maintaskId })];
            case 7:
                res = _q.sent();
                if (res.data.maintaskId === 'pause')
                    return [3 /*break*/, 10];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 8:
                _q.sent();
                _q.label = 9;
            case 9:
                j++;
                return [3 /*break*/, 6];
            case 10: return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 11:
                homePageInfo = _q.sent();
                lastgettime = void 0;
                if ((_p = (_o = homePageInfo.data) === null || _o === void 0 ? void 0 : _o.cow) === null || _p === void 0 ? void 0 : _p.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 116];
                }
                food = void 0, petid = void 0, coins = void 0, petNum = void 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                    petid = homePageInfo.data.petinfo[0].petid;
                    petNum = homePageInfo.data.petinfo.length;
                    coins = homePageInfo.data.coins;
                }
                catch (e) {
                    console.log('初始化出错，手动去app');
                    return [3 /*break*/, 116];
                }
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _q.label = 12;
            case 12:
                _q.trys.push([12, 14, , 15]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 13:
                _q.sent();
                return [3 /*break*/, 15];
            case 14:
                e_1 = _q.sent();
                console.log(e_1);
                return [3 /*break*/, 15];
            case 15:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                console.log('鸡鸡🐔', petNum);
                return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '2', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 }, true)];
            case 16:
                tasks = _q.sent();
                _q.label = 17;
            case 17:
                _q.trys.push([17, 29, 30, 31]);
                _a = (e_2 = void 0, __values(tasks.data.userTaskStatusList)), _b = _a.next();
                _q.label = 18;
            case 18:
                if (!!_b.done) return [3 /*break*/, 28];
                t = _b.value;
                if (!(t.awardStatus === 2 && t.taskName !== '邀请牧场新用户助力' && t.taskName !== '拆开邀人红包')) return [3 /*break*/, 27];
                console.log(t.taskName);
                if (!(t.completedTimes < t.targetTimes)) return [3 /*break*/, 24];
                j = t.completedTimes;
                _q.label = 19;
            case 19:
                if (!(j < t.targetTimes)) return [3 /*break*/, 23];
                return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId }, true)];
            case 20:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败');
                    return [3 /*break*/, 23];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 21:
                _q.sent();
                _q.label = 22;
            case 22:
                j++;
                return [3 /*break*/, 19];
            case 23: return [3 /*break*/, 27];
            case 24: return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId }, true)];
            case 25:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('领奖成功', res.data.prizeInfo.match(/:(.*)}/)[1]);
                }
                else {
                    console.log('领奖失败');
                    return [3 /*break*/, 28];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 26:
                _q.sent();
                _q.label = 27;
            case 27:
                _b = _a.next();
                return [3 /*break*/, 18];
            case 28: return [3 /*break*/, 31];
            case 29:
                e_2_1 = _q.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 31];
            case 30:
                try {
                    if (_b && !_b.done && (_j = _a["return"])) _j.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 31: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 32:
                // 扭蛋机
                res = _q.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 34];
                return [4 /*yield*/, (0, notify.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7" + (i + 1) + " " + UserName + "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A")];
            case 33:
                _q.sent();
                return [3 /*break*/, 41];
            case 34:
                console.log('扭蛋机剩余次数:', drawTimes);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 35:
                _q.sent();
                j = 0;
                _q.label = 36;
            case 36:
                if (!(j < drawTimes)) return [3 /*break*/, 41];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 37:
                res = _q.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 39];
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
            case 38:
                _q.sent();
                return [3 /*break*/, 40];
            case 39:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 41];
            case 40:
                j++;
                return [3 /*break*/, 36];
            case 41: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 42:
                res = _q.sent();
                _q.label = 43;
            case 43:
                _q.trys.push([43, 53, , 54]);
                _q.label = 44;
            case 44:
                _q.trys.push([44, 50, 51, 52]);
                _c = (e_3 = void 0, __values(res.data.cardinfo)), _d = _c.next();
                _q.label = 45;
            case 45:
                if (!!_d.done) return [3 /*break*/, 49];
                card = _d.value;
                console.log("card " + card.cardtype, card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum && petNum < 6)) return [3 /*break*/, 48];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 46:
                res = _q.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 47:
                _q.sent();
                _q.label = 48;
            case 48:
                _d = _c.next();
                return [3 /*break*/, 45];
            case 49: return [3 /*break*/, 52];
            case 50:
                e_3_1 = _q.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 52];
            case 51:
                try {
                    if (_d && !_d.done && (_k = _c["return"])) _k.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 52: return [3 /*break*/, 54];
            case 53:
                e_4 = _q.sent();
                return [3 /*break*/, 54];
            case 54: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 红包
            ];
            case 55:
                _q.sent();
                return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 56:
                // 红包
                res = _q.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _q.label = 57;
            case 57:
                _q.trys.push([57, 59, , 60]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 58:
                _q.sent();
                return [3 /*break*/, 60];
            case 59:
                e_5 = _q.sent();
                return [3 /*break*/, 60];
            case 60: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 签到
            ];
            case 61:
                _q.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 62:
                // 签到
                res = _q.sent();
                if (!res.data.signlist) return [3 /*break*/, 71];
                _q.label = 63;
            case 63:
                _q.trys.push([63, 68, 69, 70]);
                _e = (e_6 = void 0, __values(res.data.signlist)), _f = _e.next();
                _q.label = 64;
            case 64:
                if (!!_f.done) return [3 /*break*/, 67];
                day = _f.value;
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 66];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 65:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 67];
            case 66:
                _f = _e.next();
                return [3 /*break*/, 64];
            case 67: return [3 /*break*/, 70];
            case 68:
                e_6_1 = _q.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 70];
            case 69:
                try {
                    if (_f && !_f.done && (_l = _e["return"])) _l.call(_e);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 70: return [3 /*break*/, 72];
            case 71:
                console.log('没有获取到签到信息！');
                _q.label = 72;
            case 72: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 登录领白菜
            ];
            case 73:
                _q.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 74:
                // 登录领白菜
                res = _q.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 76];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 75:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜：', res.data.drawnum);
                }
                _q.label = 76;
            case 76: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 77:
                _q.sent();
                console.log('任务列表开始');
                j = 0;
                _q.label = 78;
            case 78:
                if (!(j < 30)) return [3 /*break*/, 82];
                return [4 /*yield*/, getTask()];
            case 79:
                if ((_q.sent()) === 0) {
                    return [3 /*break*/, 82];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 80:
                _q.sent();
                _q.label = 81;
            case 81:
                j++;
                return [3 /*break*/, 78];
            case 82:
                console.log('任务列表结束');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 83:
                _q.sent();
                _q.label = 84;
            case 84:
                if (!(coins >= 5000 && food <= 500)) return [3 /*break*/, 87];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 85:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 87];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 86:
                _q.sent();
                return [3 /*break*/, 84];
            case 87: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 88:
                _q.sent();
                _q.label = 89;
            case 89:
                if (!(food >= 10)) return [3 /*break*/, 97];
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 90:
                res = _q.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 91];
                food -= 10;
                console.log('剩余草:', res.data.newnum);
                return [3 /*break*/, 95];
            case 91:
                if (!(res.ret === 2020)) return [3 /*break*/, 94];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 92:
                homePageInfo = _q.sent();
                try {
                    for (_g = (e_11 = void 0, __values(homePageInfo.data.petinfo)), _h = _g.next(); !_h.done; _h = _g.next()) {
                        t = _h.value;
                        if (t.cangetborn === 1) {
                            petid = t.petid;
                            break;
                        }
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_m = _g["return"])) _m.call(_g);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 93:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 97];
                }
                return [3 /*break*/, 95];
            case 94:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 97];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 97];
                }
                _q.label = 95;
            case 95: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 96:
                _q.sent();
                return [3 /*break*/, 89];
            case 97: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 98:
                _q.sent();
                _q.label = 99;
            case 99:
                if (!1) return [3 /*break*/, 108];
                _q.label = 100;
            case 100:
                _q.trys.push([100, 106, , 107]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 101:
                res = _q.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 108];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 102:
                _q.sent();
                if (!res.data.surprise) return [3 /*break*/, 105];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 103:
                res = _q.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 104:
                _q.sent();
                _q.label = 105;
            case 105: return [3 /*break*/, 107];
            case 106:
                e_7 = _q.sent();
                console.log('Error:', e_7);
                return [3 /*break*/, 108];
            case 107: return [3 /*break*/, 99];
            case 108: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 109:
                _q.sent();
                _q.label = 110;
            case 110:
                if (!1) return [3 /*break*/, 116];
                _q.label = 111;
            case 111:
                _q.trys.push([111, 114, , 115]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', {
                        type: '1',
                        petid: petid
                    })];
            case 112:
                res = _q.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 116];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 113:
                _q.sent();
                return [3 /*break*/, 115];
            case 114:
                e_8 = _q.sent();
                console.log('Error:', e_8);
                return [3 /*break*/, 116];
            case 115: return [3 /*break*/, 110];
            case 116:
                i++;
                return [3 /*break*/, 3];
            case 117: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 118:
                _q.sent();
                i = 0;
                _q.label = 119;
            case 119:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 131];
                return [4 /*yield*/, getCodes()
                    // 获取随机红包码
                ];
            case 120:
                _q.sent();
                _q.label = 121;
            case 121:
                _q.trys.push([121, 123, , 124]);
                (0, TS_USER_AGENTS_1.resetHosts)();
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmchb/30", { timeout: 10000 })];
            case 122:
                data = (_q.sent()).data;
                console.log('获取到30个随机红包码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesHbSelf), false), __read(shareCodesHbHw), false), __read(data.data), false)));
                return [3 /*break*/, 124];
            case 123:
                e_9 = _q.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesHbSelf), false), __read(shareCodesHbHw), false)));
                return [3 /*break*/, 124];
            case 124:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 125:
                jxToken = _q.sent();
                j = 0;
                _q.label = 126;
            case 126:
                if (!(j < shareCodes.length)) return [3 /*break*/, 130];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 127:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('成功');
                }
                else if (res.ret === 2711) {
                    console.log('上限');
                    return [3 /*break*/, 130];
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 128:
                _q.sent();
                _q.label = 129;
            case 129:
                j++;
                return [3 /*break*/, 126];
            case 130:
                i++;
                return [3 /*break*/, 119];
            case 131:
                i = 0;
                _q.label = 132;
            case 132:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 144];
                return [4 /*yield*/, getCodes()
                    // 获取随机助力码
                ];
            case 133:
                _q.sent();
                _q.label = 134;
            case 134:
                _q.trys.push([134, 136, , 137]);
                return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/jxmc/30", { timeout: 10000 })];
            case 135:
                data = (_q.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(data.data), false)));
                return [3 /*break*/, 137];
            case 136:
                e_10 = _q.sent();
                console.log('获取助力池失败');
                shareCodes = Array.from(new Set(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false)));
                return [3 /*break*/, 137];
            case 137:
                cookie = cookiesArr[i];
                return [4 /*yield*/, token(cookie)];
            case 138:
                jxToken = _q.sent();
                j = 0;
                _q.label = 139;
            case 139:
                if (!(j < shareCodes.length)) return [3 /*break*/, 143];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B" + shareCodes[j]);
                return [4 /*yield*/, api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', { sharekey: shareCodes[j] })];
            case 140:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('成功，获得:', res.data.addcoins);
                }
                else {
                    console.log('失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 141:
                _q.sent();
                _q.label = 142;
            case 142:
                j++;
                return [3 /*break*/, 139];
            case 143:
                i++;
                return [3 /*break*/, 132];
            case 144: return [2 /*return*/];
        }
    });
}); })();
function getTask() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, awardCoin, e_12_1;
        var e_12, _c;
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
                    e_12_1 = _d.sent();
                    e_12 = { error: e_12_1 };
                    return [3 /*break*/, 15];
                case 14:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_12) throw e_12.error; }
                    return [7 /*endfinally*/];
                case 15: return [2 /*return*/, 0];
            }
        });
    });
}
function api(fn, stk, params, temporary) {
    if (params === void 0) { params = {}; }
    if (temporary === void 0) { temporary = false; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1) {
                        if (temporary)
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc_zanaixin&bizCode=jxmc_zanaixin&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls", stk, params, 10028);
                        else
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc&bizCode=jxmc&_stk=" + encodeURIComponent(stk) + "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls", stk, params, 10028);
                    }
                    else {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=" + jxToken['farm_jstoken'] + "&timestamp=" + jxToken['timestamp'] + "&phoneid=" + jxToken['phoneid'] + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + (Date.now() + 2) + "&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls", stk, params, 10028);
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
                        return [2 /*return*/, JSON.parse(data.replace(/\n/g, '').match(/jsonpCBK.?\(([^)]*)/)[1])];
                    return [2 /*return*/, data];
                case 3:
                    e_13 = _a.sent();
                    console.log('api Error:', e_13);
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmc?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin)];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_14 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_14);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodesHb(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 1:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 2:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmchb?sharecode=" + code + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin, { timeout: 10000 })];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_15 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_15);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_16;
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
                    e_16 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
