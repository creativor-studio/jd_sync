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
exports.__esModule = true;
var axios_1 = require("axios");
var ts_md5_1 = require("ts-md5");
var notify = require("./sendNotify");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var token = require('./utils/jd_jxmc.js').token;
var cookie = '', res = '', shareCodes = [], homePageInfo, jxToken, UserName, index;
var shareCodesHbSelf = [], shareCodesHbHw = [], shareCodesSelf = [], shareCodesHW = [];
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, j, lastgettime, food, petid, coins, petNum, petids, e_1, tasks, _a, _b, t, j, e_2_1, drawTimes, j, _c, _d, card, e_3_1, e_4, e_5, _e, _f, day, e_6_1, j, _g, _h, t, e_7, e_8;
    var e_2, _j, e_3, _k, e_6, _l, e_9, _m;
    var _o, _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _q.sent();
                i = 0;
                _q.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 122];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                return [4 /*yield*/, token(cookie)];
            case 4:
                jxToken = _q.sent();
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 5:
                homePageInfo = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 6:
                _q.sent();
                if (!(homePageInfo.data.maintaskId !== 'pause')) return [3 /*break*/, 11];
                console.log('init...');
                j = 0;
                _q.label = 7;
            case 7:
                if (!(j < 20)) return [3 /*break*/, 11];
                return [4 /*yield*/, api('operservice/DoMainTask', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,step,timestamp', { step: homePageInfo.data.maintaskId })];
            case 8:
                res = _q.sent();
                if (res.data.maintaskId === 'pause')
                    return [3 /*break*/, 11];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 9:
                _q.sent();
                _q.label = 10;
            case 10:
                j++;
                return [3 /*break*/, 7];
            case 11: return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', { isgift: 1, isquerypicksite: 1, isqueryinviteicon: 1 })];
            case 12:
                homePageInfo = _q.sent();
                lastgettime = void 0;
                if ((_p = (_o = homePageInfo.data) === null || _o === void 0 ? void 0 : _o.cow) === null || _p === void 0 ? void 0 : _p.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    return [3 /*break*/, 121];
                }
                food = 0, petid = '', coins = 0, petNum = 0, petids = [];
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                    petid = homePageInfo.data.petinfo[0].petid;
                    petids = homePageInfo.data.petinfo.map(function (pet) {
                        return pet.petid;
                    });
                    petNum = homePageInfo.data.petinfo.length;
                    coins = homePageInfo.data.coins;
                }
                catch (e) {
                    console.log('初始化出错，手动去app');
                    return [3 /*break*/, 121];
                }
                console.log('助力码:', homePageInfo.data.sharekey);
                shareCodesSelf.push(homePageInfo.data.sharekey);
                _q.label = 13;
            case 13:
                _q.trys.push([13, 15, , 16]);
                return [4 /*yield*/, makeShareCodes(homePageInfo.data.sharekey)];
            case 14:
                _q.sent();
                return [3 /*break*/, 16];
            case 15:
                e_1 = _q.sent();
                console.log(e_1);
                return [3 /*break*/, 16];
            case 16:
                console.log('草草🌿', food);
                console.log('蛋蛋🥚', homePageInfo.data.eggcnt);
                console.log('钱钱💰', coins);
                console.log('鸡鸡🐔', petNum);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                    // 助农
                ];
            case 17:
                _q.sent();
                return [4 /*yield*/, api('GetUserTaskStatusList', 'bizCode,dateType,jxpp_wxapp_type,showAreaTaskFlag,source', { dateType: '2', showAreaTaskFlag: 0, jxpp_wxapp_type: 7 }, true)];
            case 18:
                tasks = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 19:
                _q.sent();
                _q.label = 20;
            case 20:
                _q.trys.push([20, 32, 33, 34]);
                _a = (e_2 = void 0, __values(tasks.data.userTaskStatusList)), _b = _a.next();
                _q.label = 21;
            case 21:
                if (!!_b.done) return [3 /*break*/, 31];
                t = _b.value;
                if (!(t.awardStatus === 2 && t.taskName !== '邀请牧场新用户助力' && t.taskName !== '拆开邀人红包')) return [3 /*break*/, 30];
                console.log(t.taskName);
                if (!(t.completedTimes < t.targetTimes)) return [3 /*break*/, 27];
                j = t.completedTimes;
                _q.label = 22;
            case 22:
                if (!(j < t.targetTimes)) return [3 /*break*/, 26];
                return [4 /*yield*/, api('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId }, true)];
            case 23:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败');
                    return [3 /*break*/, 26];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 24:
                _q.sent();
                _q.label = 25;
            case 25:
                j++;
                return [3 /*break*/, 22];
            case 26: return [3 /*break*/, 30];
            case 27: return [4 /*yield*/, api('Award', 'bizCode,source,taskId', { taskId: t.taskId }, true)];
            case 28:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('领奖成功', res.data.prizeInfo.match(/:(.*)}/)[1]);
                }
                else {
                    console.log('领奖失败');
                    return [3 /*break*/, 31];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 29:
                _q.sent();
                _q.label = 30;
            case 30:
                _b = _a.next();
                return [3 /*break*/, 21];
            case 31: return [3 /*break*/, 34];
            case 32:
                e_2_1 = _q.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 34];
            case 33:
                try {
                    if (_b && !_b.done && (_j = _a["return"])) _j.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 34: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 扭蛋机
            ];
            case 35:
                _q.sent();
                return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 36:
                // 扭蛋机
                res = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 37:
                _q.sent();
                drawTimes = res.data.times;
                if (!(typeof drawTimes === "undefined")) return [3 /*break*/, 39];
                return [4 /*yield*/, (0, notify.sendNotify)("牧场扭蛋机错误", "\u8D26\u53F7".concat(i + 1, " ").concat(UserName, "\n\u624B\u52A8\u5EFA\u9020\u626D\u86CB\u673A"))];
            case 38:
                _q.sent();
                return [3 /*break*/, 45];
            case 39:
                console.log('扭蛋机剩余次数:', drawTimes);
                j = 0;
                _q.label = 40;
            case 40:
                if (!(j < drawTimes)) return [3 /*break*/, 45];
                return [4 /*yield*/, api('operservice/DrawCard', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 41:
                res = _q.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 43];
                if (res.data.prizetype === 3) {
                    console.log('抽奖成功，金币:', res.data.addcoins);
                }
                else if (res.data.prizetype === 1) {
                    console.log('抽奖成功，卡片:', res.data.cardtype);
                }
                else {
                    console.log('抽奖成功，其他:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 42:
                _q.sent();
                return [3 /*break*/, 44];
            case 43:
                console.log('抽奖失败:', res);
                return [3 /*break*/, 45];
            case 44:
                j++;
                return [3 /*break*/, 40];
            case 45: return [4 /*yield*/, api('queryservice/GetCardInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 46:
                res = _q.sent();
                _q.label = 47;
            case 47:
                _q.trys.push([47, 57, , 58]);
                _q.label = 48;
            case 48:
                _q.trys.push([48, 54, 55, 56]);
                _c = (e_3 = void 0, __values(res.data.cardinfo)), _d = _c.next();
                _q.label = 49;
            case 49:
                if (!!_d.done) return [3 /*break*/, 53];
                card = _d.value;
                console.log("card ".concat(card.cardtype), card.currnum, '/', card.neednum);
                if (!(card.currnum >= card.neednum && petNum < 6)) return [3 /*break*/, 52];
                console.log('可以兑换');
                return [4 /*yield*/, api('operservice/Combine', 'activeid,activekey,cardtype,channel,jxmc_jstoken,phoneid,sceneid,timestamp', { cardtype: card.cardtype })];
            case 50:
                res = _q.sent();
                res.ret === 0 ? console.log('兑换成功') : '';
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 51:
                _q.sent();
                _q.label = 52;
            case 52:
                _d = _c.next();
                return [3 /*break*/, 49];
            case 53: return [3 /*break*/, 56];
            case 54:
                e_3_1 = _q.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 56];
            case 55:
                try {
                    if (_d && !_d.done && (_k = _c["return"])) _k.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 56: return [3 /*break*/, 58];
            case 57:
                e_4 = _q.sent();
                return [3 /*break*/, 58];
            case 58: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 红包
            ];
            case 59:
                _q.sent();
                return [4 /*yield*/, api('operservice/GetInviteStatus', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 60:
                // 红包
                res = _q.sent();
                console.log('红包助力:', res.data.sharekey);
                shareCodesHbSelf.push(res.data.sharekey);
                _q.label = 61;
            case 61:
                _q.trys.push([61, 63, , 64]);
                return [4 /*yield*/, makeShareCodesHb(res.data.sharekey)];
            case 62:
                _q.sent();
                return [3 /*break*/, 64];
            case 63:
                e_5 = _q.sent();
                return [3 /*break*/, 64];
            case 64: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 签到
            ];
            case 65:
                _q.sent();
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 66:
                // 签到
                res = _q.sent();
                if (!res.data.signlist) return [3 /*break*/, 75];
                _q.label = 67;
            case 67:
                _q.trys.push([67, 72, 73, 74]);
                _e = (e_6 = void 0, __values(res.data.signlist)), _f = _e.next();
                _q.label = 68;
            case 68:
                if (!!_f.done) return [3 /*break*/, 71];
                day = _f.value;
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 70];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 69:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('签到成功!');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 71];
            case 70:
                _f = _e.next();
                return [3 /*break*/, 68];
            case 71: return [3 /*break*/, 74];
            case 72:
                e_6_1 = _q.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 74];
            case 73:
                try {
                    if (_f && !_f.done && (_l = _e["return"])) _l.call(_e);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 74: return [3 /*break*/, 76];
            case 75:
                console.log('没有获取到签到信息！');
                _q.label = 76;
            case 76: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                // 登录领白菜
            ];
            case 77:
                _q.sent();
                return [4 /*yield*/, api('queryservice/GetVisitBackInfo', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 78:
                // 登录领白菜
                res = _q.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 79:
                _q.sent();
                if (!(res.iscandraw === 1)) return [3 /*break*/, 81];
                return [4 /*yield*/, api('operservice/GetVisitBackCabbage', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 80:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('登录领白菜:', res.data.drawnum);
                }
                _q.label = 81;
            case 81: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 82:
                _q.sent();
                console.log('任务列表开始');
                j = 0;
                _q.label = 83;
            case 83:
                if (!(j < 30)) return [3 /*break*/, 87];
                return [4 /*yield*/, getTask()];
            case 84:
                if ((_q.sent()) === 0) {
                    return [3 /*break*/, 87];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 85:
                _q.sent();
                _q.label = 86;
            case 86:
                j++;
                return [3 /*break*/, 83];
            case 87:
                console.log('任务列表结束');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 88:
                _q.sent();
                _q.label = 89;
            case 89:
                if (!(coins >= 5000)) return [3 /*break*/, 92];
                return [4 /*yield*/, api('operservice/Buy', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '1' })];
            case 90:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('买草成功:', res.data.newnum);
                    coins -= 5000;
                    food += 100;
                }
                else {
                    console.log(res);
                    return [3 /*break*/, 92];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 91:
                _q.sent();
                return [3 /*break*/, 89];
            case 92: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 93:
                _q.sent();
                _q.label = 94;
            case 94:
                if (!(food >= 10)) return [3 /*break*/, 102];
                food -= 10;
                return [4 /*yield*/, api('operservice/Feed', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp')];
            case 95:
                res = _q.sent();
                if (!(res.ret === 0)) return [3 /*break*/, 96];
                console.log('喂食:', res.data.newnum);
                return [3 /*break*/, 100];
            case 96:
                if (!(res.ret === 2020)) return [3 /*break*/, 99];
                console.log('收🥚');
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isqueryinviteicon,isquerypicksite,jxmc_jstoken,phoneid,sceneid,timestamp', {
                        isgift: 1,
                        isquerypicksite: 1,
                        isqueryinviteicon: 1
                    })];
            case 97:
                homePageInfo = _q.sent();
                try {
                    for (_g = (e_9 = void 0, __values(homePageInfo.data.petinfo)), _h = _g.next(); !_h.done; _h = _g.next()) {
                        t = _h.value;
                        if (t.cangetborn === 1) {
                            petid = t.petid;
                            break;
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_m = _g["return"])) _m.call(_g);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
                return [4 /*yield*/, api('operservice/GetSelfResult', 'activeid,activekey,channel,itemid,jxmc_jstoken,phoneid,sceneid,timestamp,type', { itemid: petid, type: '11' })];
            case 98:
                res = _q.sent();
                if (res.ret === 0) {
                    console.log('收🥚成功:', res.data.newnum);
                }
                else {
                    console.log('收🥚失败:', res);
                    return [3 /*break*/, 102];
                }
                return [3 /*break*/, 100];
            case 99:
                if (res.ret === 2005) {
                    console.log('今天吃撑了');
                    return [3 /*break*/, 102];
                }
                else {
                    console.log('Feed未知错误:', res);
                    return [3 /*break*/, 102];
                }
                _q.label = 100;
            case 100: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(7000)];
            case 101:
                _q.sent();
                return [3 /*break*/, 94];
            case 102: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(8000)];
            case 103:
                _q.sent();
                console.log('除草...start');
                _q.label = 104;
            case 104:
                if (!1) return [3 /*break*/, 113];
                _q.label = 105;
            case 105:
                _q.trys.push([105, 111, , 112]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type', { type: '2' })];
            case 106:
                res = _q.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 113];
                console.log('锄草:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 107:
                _q.sent();
                if (!res.data.surprise) return [3 /*break*/, 110];
                return [4 /*yield*/, api("operservice/GetSelfResult", "activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,timestamp,type", { type: '14', itemid: 'undefined' })];
            case 108:
                res = _q.sent();
                console.log('锄草奖励:', res.data.prizepool);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 109:
                _q.sent();
                _q.label = 110;
            case 110: return [3 /*break*/, 112];
            case 111:
                e_7 = _q.sent();
                console.log('除草 Error:', e_7);
                return [3 /*break*/, 113];
            case 112: return [3 /*break*/, 104];
            case 113: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 114:
                _q.sent();
                _q.label = 115;
            case 115:
                if (!1) return [3 /*break*/, 121];
                _q.label = 116;
            case 116:
                _q.trys.push([116, 119, , 120]);
                return [4 /*yield*/, api('operservice/Action', 'activeid,activekey,channel,jxmc_jstoken,petid,phoneid,sceneid,timestamp,type', { type: '1', petid: petids[Math.floor((Math.random() * petids.length))] })];
            case 117:
                res = _q.sent();
                if (res.data.addcoins === 0 || JSON.stringify(res.data) === '{}')
                    return [3 /*break*/, 121];
                console.log('挑逗:', res.data.addcoins);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 118:
                _q.sent();
                return [3 /*break*/, 120];
            case 119:
                e_8 = _q.sent();
                console.log('挑逗 Error:', e_8);
                return [3 /*break*/, 121];
            case 120: return [3 /*break*/, 115];
            case 121:
                i++;
                return [3 /*break*/, 3];
            case 122: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)
                /*
                for (let i = 0; i < cookiesArr.length; i++) {
                  await getCodes()
                  // 获取随机红包码
                  try {
                    let {data}: any = await axios.get(`https://api.jdsharecode.xyz/api/jxmchb/30`, {timeout: 10000})
                    console.log('获取到30个随机红包码:', data.data)
                    shareCodes = Array.from(new Set([...shareCodesHbSelf, ...shareCodesHbHw, ...data.data]))
                  } catch (e: any) {
                    console.log('获取助力池失败')
                    shareCodes = Array.from(new Set([...shareCodesHbSelf, ...shareCodesHbHw]))
                  }
              
                  cookie = cookiesArr[i]
                  jxToken = await token(cookie)
                  for (let j = 0; j < shareCodes.length; j++) {
                    console.log(`账号${i + 1}去助力${shareCodes[j]}`)
                    res = await api('operservice/InviteEnroll', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', {sharekey: shareCodes[j]})
                    if (res.ret === 0) {
                      console.log('成功')
                    } else if (res.ret === 2711) {
                      console.log('上限')
                      break
                    } else {
                      console.log('失败:', res.message)
                    }
                    await wait(8000)
                  }
                }
              
                for (let i = 0; i < cookiesArr.length; i++) {
                  await getCodes()
                  // 获取随机助力码
                  try {
                    let {data}: any = await axios.get(`https://api.jdsharecode.xyz/api/jxmc/30`, {timeout: 10000})
                    console.log('获取到30个随机助力码:', data.data)
                    shareCodes = Array.from(new Set([...shareCodesSelf, ...shareCodesHW, ...data.data]))
                  } catch (e: any) {
                    console.log('获取助力池失败')
                    shareCodes = Array.from(new Set([...shareCodesSelf, ...shareCodesHW]))
                  }
                  cookie = cookiesArr[i]
                  jxToken = await token(cookie)
                  for (let j = 0; j < shareCodes.length; j++) {
                    console.log(`账号${i + 1}去助力${shareCodes[j]}`)
                    res = await api('operservice/EnrollFriend', 'activeid,activekey,channel,jxmc_jstoken,phoneid,sceneid,sharekey,timestamp', {sharekey: shareCodes[j]})
                    if (res.ret === 0) {
                      console.log('成功，获得:', res.data.addcoins)
                    } else {
                      console.log('失败:', res)
                    }
                    await wait(8000)
                  }
                }
              
                 */
            ];
            case 123:
                _q.sent();
                return [2 /*return*/];
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
function api(fn, stk, params, temporary) {
    if (params === void 0) { params = {}; }
    if (temporary === void 0) { temporary = false; }
    return __awaiter(this, void 0, void 0, function () {
        var url, data, e_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1) {
                        if (temporary)
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc_zanaixin&bizCode=jxmc_zanaixin&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat(String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)), "&g_ty=ls"), stk, params, 10028);
                        else
                            url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/newtasksys/newtasksys_front/".concat(fn, "?_=").concat(Date.now(), "&source=jxmc&bizCode=jxmc&_stk=").concat(encodeURIComponent(stk), "&_ste=1&sceneval=2&g_login_type=1&callback=jsonpCBK").concat(String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)), "&g_ty=ls"), stk, params, 10028);
                    }
                    else {
                        url = (0, TS_USER_AGENTS_1.h5st)("https://m.jingxi.com/jxmc/".concat(fn, "?channel=7&sceneid=1001&activeid=jxmc_active_0001&activekey=null&jxmc_jstoken=").concat(jxToken['farm_jstoken'], "&timestamp=").concat(jxToken['timestamp'], "&phoneid=").concat(jxToken['phoneid'], "&_stk=").concat(encodeURIComponent(stk), "&_ste=1&_=").concat(Date.now(), "&sceneval=2"), stk, params, 10028);
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'User-Agent': "jdpingou;",
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
                    e_11 = _a.sent();
                    return [2 /*return*/, {}];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodes(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_12;
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
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmc?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin))];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_12 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_12);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function makeShareCodesHb(code) {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_13;
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
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxmchb?sharecode=".concat(code, "&bean=").concat(bean, "&farm=").concat(farm, "&pin=").concat(pin), { timeout: 10000 })];
                case 3:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 5];
                case 4:
                    e_13 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_13);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function getCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_14;
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
                    e_14 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
