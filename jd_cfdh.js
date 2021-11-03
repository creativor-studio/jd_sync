"use strict";
/**
 * 京喜财富岛
 * 包含雇佣导游，建议每小时1次
 * 使用jd_env_copy.js同步js环境变量到ts
 * 使用jd_ts_test.ts测试环境变量
 *
 * cron: 0 * * * *
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
var date_fns_1 = require("date-fns");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var axi = axios_1["default"].create({ timeout: 10000 });
var cookie = '', res = '', UserName, index;
var shareCodes = [], shareCodesSelf = [], shareCodesHW = [], isCollector = false, USER_AGENT = 'jdpingou;', token = {};
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, e_1, todayMoney, flag, dwPageIndex, _a, _b, t, _c, _d, xb, e_2_1, tasks, _e, _f, t, prizeInfo, CardList, cards, CardList_1, CardList_1_1, card, e_3_1, richcard, coincard, isUsing, coincard_1, coincard_1_1, card, e_4_1, richcard_1, richcard_1_1, card, j, e_5_1, j, wallet, build, minLV, _g, _h, b, e_6_1, dwCurProgress, strDT, strMyShareId, ddwSeasonStartTm, strLT, RealTmReport, j, employee, employee_1, employee_1_1, emp, empRes, e_7_1, _j, _k, sign, e_8_1, MermaidRes, shipRes, bags_1, _l, _m, s, strTypeCnt_1, n, bags, _o, _p, s, strTypeCnt, n, j, _q, _r, t, e_9_1, _s, _t, t, e_10_1, _u, _v, e, employ, e_11_1, _w, _x, b, e_12_1, i, data, e_13, j;
    var e_14, _y, e_2, _z, e_3, _0, e_15, _1, e_4, _2, e_5, _3, e_6, _4, e_7, _5, e_8, _6, e_16, _7, e_17, _8, e_9, _9, e_10, _10, e_11, _11, e_12, _12;
    var _13;
    return __generator(this, function (_14) {
        switch (_14.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)()];
            case 1:
                _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _14.sent();
                i = 0;
                _14.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 201];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                token = (0, TS_USER_AGENTS_1.getJxToken)(cookie);
                _14.label = 4;
            case 4:
                _14.trys.push([4, 6, , 7]);
                return [4 /*yield*/, makeShareCodes()];
            case 5:
                _14.sent();
                return [3 /*break*/, 7];
            case 6:
                e_1 = _14.sent();
                console.log(e_1);
                return [3 /*break*/, 7];
            case 7:
                todayMoney = 0, flag = true;
                dwPageIndex = 0;
                _14.label = 8;
            case 8:
                if (!(dwPageIndex < 5)) return [3 /*break*/, 12];
                if (!flag)
                    return [3 /*break*/, 12];
                return [4 /*yield*/, api('user/GetMoneyDetail', '_cfd_t,bizCode,dwEnv,dwPageIndex,dwPageSize,dwProperty,dwQueryType,ptag,source,strZone', { dwQueryType: 0, dwPageIndex: 1, dwPageSize: 10, dwProperty: 1 })];
            case 9:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 10:
                _14.sent();
                try {
                    for (_a = (e_14 = void 0, __values(res === null || res === void 0 ? void 0 : res.Detail)), _b = _a.next(); !_b.done; _b = _a.next()) {
                        t = _b.value;
                        if ((0, date_fns_1.getDate)(t.ddwTime * 1000) === (0, date_fns_1.getDate)(new Date())) {
                            todayMoney += t.ddwValue;
                        }
                        else {
                            flag = false;
                            break;
                        }
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_y = _a["return"])) _y.call(_a);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
                _14.label = 11;
            case 11:
                dwPageIndex++;
                return [3 /*break*/, 8];
            case 12:
                console.log('今日累计获得财富:', todayMoney);
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 13:
                // 离线
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                    // 寻宝
                ];
            case 14:
                _14.sent();
                _14.label = 15;
            case 15:
                _14.trys.push([15, 21, 22, 23]);
                _c = (e_2 = void 0, __values(res.XbStatus.XBDetail)), _d = _c.next();
                _14.label = 16;
            case 16:
                if (!!_d.done) return [3 /*break*/, 20];
                xb = _d.value;
                if (!(xb.dwRemainCnt !== 0)) return [3 /*break*/, 19];
                return [4 /*yield*/, api('user/TreasureHunt', '_cfd_t,bizCode,dwEnv,ptag,source,strIndex,strZone', { strIndex: xb.strIndex })];
            case 17:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log('发现宝物:', res.AwardInfo.ddwValue);
                }
                else {
                    console.log('寻宝失败:', res);
                    return [3 /*break*/, 20];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 18:
                _14.sent();
                _14.label = 19;
            case 19:
                _d = _c.next();
                return [3 /*break*/, 16];
            case 20: return [3 /*break*/, 23];
            case 21:
                e_2_1 = _14.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 23];
            case 22:
                try {
                    if (_d && !_d.done && (_z = _c["return"])) _z.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 23:
                tasks = void 0;
                return [4 /*yield*/, api('story/GetPropTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 24:
                // 加速卡任务
                tasks = _14.sent();
                _14.label = 25;
            case 25:
                _14.trys.push([25, 34, 35, 36]);
                _e = (e_3 = void 0, __values(tasks.Data.TaskList)), _f = _e.next();
                _14.label = 26;
            case 26:
                if (!!_f.done) return [3 /*break*/, 33];
                t = _f.value;
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 29];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 27:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 28:
                _14.sent();
                if (res.ret === 0) {
                    prizeInfo = JSON.parse(res.data.prizeInfo);
                    CardList = prizeInfo.CardInfo.CardList;
                    cards = '';
                    try {
                        for (CardList_1 = (e_15 = void 0, __values(CardList)), CardList_1_1 = CardList_1.next(); !CardList_1_1.done; CardList_1_1 = CardList_1.next()) {
                            card = CardList_1_1.value;
                            cards += card.strCardName;
                        }
                    }
                    catch (e_15_1) { e_15 = { error: e_15_1 }; }
                    finally {
                        try {
                            if (CardList_1_1 && !CardList_1_1.done && (_1 = CardList_1["return"])) _1.call(CardList_1);
                        }
                        finally { if (e_15) throw e_15.error; }
                    }
                    console.log('加速卡领取成功', cards);
                }
                else {
                    console.log('加速卡领取失败', res);
                    return [3 /*break*/, 33];
                }
                _14.label = 29;
            case 29:
                if (!(t.dwCompleteNum < t.dwTargetNum && t.strTaskName !== '去接待NPC')) return [3 /*break*/, 32];
                console.log(t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { bizCode: tasks.Data.strZone, taskId: t.ddwTaskId })];
            case 30:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)((_13 = t.dwLookTime * 1000) !== null && _13 !== void 0 ? _13 : 2000)];
            case 31:
                _14.sent();
                if (res.ret === 0) {
                    console.log('加速卡任务完成');
                }
                else {
                    console.log('加速卡任务失败', res);
                    return [3 /*break*/, 33];
                }
                _14.label = 32;
            case 32:
                _f = _e.next();
                return [3 /*break*/, 26];
            case 33: return [3 /*break*/, 36];
            case 34:
                e_3_1 = _14.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 36];
            case 35:
                try {
                    if (_f && !_f.done && (_0 = _e["return"])) _0.call(_e);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 36: return [4 /*yield*/, api('user/GetPropCardCenterInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 37:
                // 加速卡
                res = _14.sent();
                richcard = res.cardInfo.richcard, coincard = res.cardInfo.coincard, isUsing = res.cardInfo.dwWorkingType !== 0;
                _14.label = 38;
            case 38:
                _14.trys.push([38, 44, 45, 46]);
                coincard_1 = (e_4 = void 0, __values(coincard)), coincard_1_1 = coincard_1.next();
                _14.label = 39;
            case 39:
                if (!!coincard_1_1.done) return [3 /*break*/, 43];
                card = coincard_1_1.value;
                if (!(!isUsing && card.dwCardNums !== 0)) return [3 /*break*/, 41];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 1, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 40:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log('金币加速卡使用成功');
                    isUsing = true;
                }
                else {
                    console.log('金币加速卡使用失败', res);
                }
                return [3 /*break*/, 42];
            case 41: return [3 /*break*/, 43];
            case 42:
                coincard_1_1 = coincard_1.next();
                return [3 /*break*/, 39];
            case 43: return [3 /*break*/, 46];
            case 44:
                e_4_1 = _14.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 46];
            case 45:
                try {
                    if (coincard_1_1 && !coincard_1_1.done && (_2 = coincard_1["return"])) _2.call(coincard_1);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 46:
                _14.trys.push([46, 56, 57, 58]);
                richcard_1 = (e_5 = void 0, __values(richcard)), richcard_1_1 = richcard_1.next();
                _14.label = 47;
            case 47:
                if (!!richcard_1_1.done) return [3 /*break*/, 55];
                card = richcard_1_1.value;
                if (!(!isUsing && card.dwCardNums !== 0)) return [3 /*break*/, 53];
                j = 0;
                _14.label = 48;
            case 48:
                if (!(j < card.dwCardNums)) return [3 /*break*/, 52];
                return [4 /*yield*/, api('user/UsePropCard', '_cfd_t,bizCode,dwCardType,dwEnv,ptag,source,strCardTypeIndex,strZone', { dwCardType: 2, strCardTypeIndex: encodeURIComponent(card.strCardTypeIndex) })];
            case 49:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log('点券加速卡使用成功');
                    isUsing = true;
                }
                else {
                    console.log('点券加速卡使用失败', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 50:
                _14.sent();
                _14.label = 51;
            case 51:
                j++;
                return [3 /*break*/, 48];
            case 52: return [3 /*break*/, 54];
            case 53: return [3 /*break*/, 55];
            case 54:
                richcard_1_1 = richcard_1.next();
                return [3 /*break*/, 47];
            case 55: return [3 /*break*/, 58];
            case 56:
                e_5_1 = _14.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 58];
            case 57:
                try {
                    if (richcard_1_1 && !richcard_1_1.done && (_3 = richcard_1["return"])) _3.call(richcard_1);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 58:
                // 任务⬇️
                console.log('底部任务列表开始');
                j = 0;
                _14.label = 59;
            case 59:
                if (!(j < 30)) return [3 /*break*/, 63];
                return [4 /*yield*/, task()];
            case 60:
                if ((_14.sent()) === 0) {
                    return [3 /*break*/, 63];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 61:
                _14.sent();
                _14.label = 62;
            case 62:
                j++;
                return [3 /*break*/, 59];
            case 63:
                console.log('底部任务列表结束');
                _14.label = 64;
            case 64:
                if (!1) return [3 /*break*/, 84];
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task',
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 65:
                res = _14.sent();
                wallet = res.ddwCoinBalance;
                console.log('金币余额:', wallet);
                build = '', minLV = 99999;
                _14.label = 66;
            case 66:
                _14.trys.push([66, 72, 73, 74]);
                _g = (e_6 = void 0, __values(['food', 'fun', 'shop', 'sea'])), _h = _g.next();
                _14.label = 67;
            case 67:
                if (!!_h.done) return [3 /*break*/, 71];
                b = _h.value;
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b })];
            case 68:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 69:
                _14.sent();
                if (res.dwBuildLvl <= minLV) {
                    minLV = res.dwBuildLvl;
                    build = b;
                }
                _14.label = 70;
            case 70:
                _h = _g.next();
                return [3 /*break*/, 67];
            case 71: return [3 /*break*/, 74];
            case 72:
                e_6_1 = _14.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 74];
            case 73:
                try {
                    if (_h && !_h.done && (_4 = _g["return"])) _4.call(_g);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 74:
                console.log('最低等级建筑:', minLV, build);
                return [4 /*yield*/, api('user/GetBuildInfo', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: build })];
            case 75:
                res = _14.sent();
                console.log(build + "\u5347\u7EA7\u9700\u8981:", res.ddwNextLvlCostCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 76:
                _14.sent();
                if (!(res.dwCanLvlUp === 1 && res.ddwNextLvlCostCoin * 2 <= wallet)) return [3 /*break*/, 81];
                return [4 /*yield*/, api('user/BuildLvlUp', '_cfd_t,bizCode,ddwCostCoin,dwEnv,ptag,source,strBuildIndex,strZone', { ddwCostCoin: res.ddwNextLvlCostCoin, strBuildIndex: build })];
            case 77:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 78:
                _14.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 80];
                console.log("\u5347\u7EA7\u6210\u529F");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 79:
                _14.sent();
                _14.label = 80;
            case 80: return [3 /*break*/, 82];
            case 81: return [3 /*break*/, 84];
            case 82: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 83:
                _14.sent();
                return [3 /*break*/, 64];
            case 84: return [4 /*yield*/, api('user/ComposePearlState', '', { __t: Date.now(), dwGetType: 0 })];
            case 85:
                // 珍珠
                res = _14.sent();
                dwCurProgress = res.dwCurProgress, strDT = res.strDT, strMyShareId = res.strMyShareId, ddwSeasonStartTm = res.ddwSeasonStartTm;
                strLT = res.oPT[res.ddwCurTime % (res.oPT.length)];
                console.log("\u5DF2\u5408\u6210" + dwCurProgress + "\u4E2A\u73CD\u73E0\uFF0C" + res.ddwVirHb / 100 + "\u5143\u7EA2\u5305");
                if (!(res.dayDrawInfo.dwIsDraw === 0)) return [3 /*break*/, 88];
                return [4 /*yield*/, api("user/GetPearlDailyReward", "__t,strZone", { __t: Date.now() })];
            case 86:
                res = _14.sent();
                if (!(res.iRet === 0)) return [3 /*break*/, 88];
                return [4 /*yield*/, api("user/PearlDailyDraw", "__t,ddwSeaonStart,strToken,strZone", { __t: Date.now(), ddwSeaonStart: ddwSeasonStartTm, strToken: res.strToken })];
            case 87:
                res = _14.sent();
                if (res.strPrizeName) {
                    console.log('抽奖获得：', res.strPrizeName);
                }
                else {
                    console.log('抽奖失败？', res);
                }
                _14.label = 88;
            case 88:
                if (!strDT) return [3 /*break*/, 97];
                console.log('继续合成');
                RealTmReport = (0, TS_USER_AGENTS_1.getRandomNumberByRange)(10, 20);
                console.log('本次合成需要上报：', RealTmReport);
                j = 0;
                _14.label = 89;
            case 89:
                if (!(j < RealTmReport)) return [3 /*break*/, 95];
                return [4 /*yield*/, api('user/RealTmReport', '', { __t: Date.now(), dwIdentityType: 0, strBussKey: 'composegame', strMyShareId: strMyShareId, ddwCount: 10 })];
            case 90:
                res = _14.sent();
                if (res.iRet === 0)
                    console.log("\u6E38\u620F\u4E2D\u9014\u4E0A\u62A5" + (j + 1) + "\uFF1AOK");
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 91:
                _14.sent();
                if (!((0, TS_USER_AGENTS_1.getRandomNumberByRange)(1, 6) === 2)) return [3 /*break*/, 94];
                return [4 /*yield*/, api('user/ComposePearlAward', '__t,size,strBT,strZone,type', { __t: Date.now(), size: 1, strBT: strDT, type: 4 })];
            case 92:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log("\u4E0A\u62A5\u5F97\u7EA2\u5305:" + res.ddwAwardHb / 100 + "\u7EA2\u5305\uFF0C\u5F53\u524D\u6709" + res.ddwVirHb / 100);
                }
                else {
                    console.log('上报得红包失败：', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 93:
                _14.sent();
                _14.label = 94;
            case 94:
                j++;
                return [3 /*break*/, 89];
            case 95: return [4 /*yield*/, api("user/ComposePearlAddProcess", '__t,strBT,strLT,strZone', { __t: Date.now(), strBT: strDT, strLT: strLT })];
            case 96:
                // 珍珠奖励
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log("\u5408\u6210\u6210\u529F\uFF1A\u83B7\u5F97" + res.ddwAwardHb / 100 + "\u7EA2\u5305\uFF0C\u5F53\u524D\u6709" + res.dwCurProgress + "\u73CD\u73E0\uFF0C" + res.ddwVirHb / 100 + "\u7EA2\u5305");
                }
                else {
                    console.log('合成失败：', res);
                }
                _14.label = 97;
            case 97: return [4 /*yield*/, api('story/GetTakeAggrPage', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 98:
                // 签到 助力奖励
                res = _14.sent();
                employee = res.Data.Employee.EmployeeList.filter(function (e) {
                    return e.dwStatus === 0;
                });
                _14.label = 99;
            case 99:
                _14.trys.push([99, 105, 106, 107]);
                employee_1 = (e_7 = void 0, __values(employee)), employee_1_1 = employee_1.next();
                _14.label = 100;
            case 100:
                if (!!employee_1_1.done) return [3 /*break*/, 104];
                emp = employee_1_1.value;
                return [4 /*yield*/, api('story/helpdraw', '_cfd_t,bizCode,dwEnv,dwUserId,ptag,source,strZone', { dwUserId: emp.dwId })];
            case 101:
                empRes = _14.sent();
                if (empRes.iRet === 0)
                    console.log('助力奖励领取成功：', empRes.Data.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 102:
                _14.sent();
                _14.label = 103;
            case 103:
                employee_1_1 = employee_1.next();
                return [3 /*break*/, 100];
            case 104: return [3 /*break*/, 107];
            case 105:
                e_7_1 = _14.sent();
                e_7 = { error: e_7_1 };
                return [3 /*break*/, 107];
            case 106:
                try {
                    if (employee_1_1 && !employee_1_1.done && (_5 = employee_1["return"])) _5.call(employee_1);
                }
                finally { if (e_7) throw e_7.error; }
                return [7 /*endfinally*/];
            case 107:
                if (!(res.Data.Sign.dwTodayStatus === 0)) return [3 /*break*/, 116];
                console.log('今日未签到');
                _14.label = 108;
            case 108:
                _14.trys.push([108, 113, 114, 115]);
                _j = (e_8 = void 0, __values(res.Data.Sign.SignList)), _k = _j.next();
                _14.label = 109;
            case 109:
                if (!!_k.done) return [3 /*break*/, 112];
                sign = _k.value;
                if (!(sign.dwDayId === res.Data.Sign.dwTodayId)) return [3 /*break*/, 111];
                return [4 /*yield*/, api('story/RewardSign', '_cfd_t,bizCode,ddwCoin,ddwMoney,dwEnv,dwPrizeLv,dwPrizeType,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strPrizePool,strZone', {
                        ddwCoin: sign.ddwCoin,
                        ddwMoney: sign.ddwMoney,
                        dwPrizeLv: sign.dwBingoLevel,
                        dwPrizeType: sign.dwPrizeType,
                        strPrizePool: sign.strPrizePool,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strPgUUNum: token.strPgUUNum
                    })];
            case 110:
                res = _14.sent();
                if (res.iRet === 0)
                    console.log('签到成功：', res.Data.ddwCoin, res.Data.ddwMoney, res.Data.strPrizePool);
                else
                    console.log('签到失败：', res);
                return [3 /*break*/, 112];
            case 111:
                _k = _j.next();
                return [3 /*break*/, 109];
            case 112: return [3 /*break*/, 115];
            case 113:
                e_8_1 = _14.sent();
                e_8 = { error: e_8_1 };
                return [3 /*break*/, 115];
            case 114:
                try {
                    if (_k && !_k.done && (_6 = _j["return"])) _6.call(_j);
                }
                finally { if (e_8) throw e_8.error; }
                return [7 /*endfinally*/];
            case 115: return [3 /*break*/, 117];
            case 116:
                console.log('今日已经签到');
                _14.label = 117;
            case 117: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 118:
                _14.sent();
                return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strMarkList,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                        ddwTaskId: '',
                        strShareId: '',
                        strMarkList: 'guider_step,collect_coin_auth,guider_medal,guider_over_flag,build_food_full,build_sea_full,build_shop_full,build_fun_full,medal_guider_show,guide_guider_show,guide_receive_vistor,daily_task,guider_daily_task,cfd_has_show_selef_point',
                        strPgUUNum: token.strPgUUNum,
                        strPgtimestamp: token.strPgtimestamp,
                        strPhoneID: token.strPhoneID,
                        strVersion: '1.0.1'
                    })];
            case 119:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 120:
                _14.sent();
                if (!res.StoryInfo.StoryList) return [3 /*break*/, 140];
                if (!res.StoryInfo.StoryList[0].Mermaid) return [3 /*break*/, 127];
                console.log("\u53D1\u73B0\u7F8E\u4EBA\u9C7C\uD83E\uDDDC\u200D\u2640\uFE0F");
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '1',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 121:
                MermaidRes = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 122:
                _14.sent();
                if (!(MermaidRes.iRet === 0)) return [3 /*break*/, 124];
                return [4 /*yield*/, api('story/MermaidOpe', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 123:
                MermaidRes = _14.sent();
                if (MermaidRes.iRet === 0) {
                    console.log("\u62EF\u6551\u7F8E\u4EBA\u9C7C\u6210\u529F");
                }
                _14.label = 124;
            case 124: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 125:
                _14.sent();
                return [4 /*yield*/, api('story/MermaidOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 126:
                MermaidRes = _14.sent();
                if (MermaidRes.iRet === 0)
                    console.log('获得金币:', MermaidRes.Data.ddwCoin);
                _14.label = 127;
            case 127: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 128:
                _14.sent();
                if (!res.StoryInfo.StoryList[0].Special) return [3 /*break*/, 132];
                console.log("\u8239\u6765\u4E86\uFF0C\u4E58\u5BA2\u662F" + res.StoryInfo.StoryList[0].Special.strName);
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '2',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 129:
                shipRes = _14.sent();
                console.log('正在下船，等待30s');
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(30000)];
            case 130:
                _14.sent();
                return [4 /*yield*/, api('story/SpecialUserOper', '_cfd_t,bizCode,ddwTriggerDay,dwEnv,dwType,ptag,source,strStoryId,strZone,triggerType', {
                        strStoryId: res.StoryInfo.StoryList[0].strStoryId,
                        dwType: '3',
                        triggerType: 0,
                        ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay
                    })];
            case 131:
                shipRes = _14.sent();
                if (shipRes.iRet === 0)
                    console.log('船客接待成功');
                else
                    console.log('船客接待失败', shipRes);
                _14.label = 132;
            case 132:
                isCollector = false;
                if (!res.StoryInfo.StoryList[0].Collector) return [3 /*break*/, 138];
                console.log('收藏家出现');
                return [4 /*yield*/, api('story/CollectorOper', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,strStoryId,dwType,ddwTriggerDay', { strStoryId: res.StoryInfo.StoryList[0].strStoryId, dwType: '2', ddwTriggerDay: res.StoryInfo.StoryList[0].ddwTriggerDay })];
            case 133:
                // TODO 背包满了再卖给收破烂的
                res = _14.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 134:
                _14.sent();
                isCollector = true;
                return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 135:
                // 清空背包
                res = _14.sent();
                bags_1 = [];
                try {
                    for (_l = (e_16 = void 0, __values(res.Data.Office)), _m = _l.next(); !_m.done; _m = _l.next()) {
                        s = _m.value;
                        bags_1.push(s.dwType);
                        bags_1.push(s.dwCount);
                    }
                }
                catch (e_16_1) { e_16 = { error: e_16_1 }; }
                finally {
                    try {
                        if (_m && !_m.done && (_7 = _l["return"])) _7.call(_l);
                    }
                    finally { if (e_16) throw e_16.error; }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 136:
                _14.sent();
                strTypeCnt_1 = '';
                for (n = 0; n < bags_1.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt_1 += bags_1[n] + ":";
                    else
                        strTypeCnt_1 += bags_1[n] + "|";
                }
                if (!(bags_1.length !== 0)) return [3 /*break*/, 138];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt_1 })];
            case 137:
                res = _14.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _14.label = 138;
            case 138: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 139:
                _14.sent();
                _14.label = 140;
            case 140: return [4 /*yield*/, api('story/querystorageroom', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 141:
                // 清空背包
                res = _14.sent();
                bags = [];
                try {
                    for (_o = (e_17 = void 0, __values(res.Data.Office)), _p = _o.next(); !_p.done; _p = _o.next()) {
                        s = _p.value;
                        bags.push(s.dwType);
                        bags.push(s.dwCount);
                    }
                }
                catch (e_17_1) { e_17 = { error: e_17_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_8 = _o["return"])) _8.call(_o);
                    }
                    finally { if (e_17) throw e_17.error; }
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 142:
                _14.sent();
                strTypeCnt = '';
                for (n = 0; n < bags.length; n++) {
                    if (n % 2 === 0)
                        strTypeCnt += bags[n] + ":";
                    else
                        strTypeCnt += bags[n] + "|";
                }
                if (!(bags.length !== 0)) return [3 /*break*/, 144];
                return [4 /*yield*/, api('story/sellgoods', '_cfd_t,bizCode,dwEnv,dwSceneId,ptag,source,strTypeCnt,strZone', { dwSceneId: isCollector ? '2' : '1', strTypeCnt: strTypeCnt })];
            case 143:
                res = _14.sent();
                console.log('卖贝壳收入:', res.Data.ddwCoin, res.Data.ddwMoney);
                _14.label = 144;
            case 144: return [4 /*yield*/, api('story/QueryRubbishInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 145:
                // 垃圾🚮
                res = _14.sent();
                if (!(res.Data.StoryInfo.StoryList.length !== 0)) return [3 /*break*/, 152];
                console.log('有垃圾');
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwType,ptag,source,strZone', {
                        dwType: '1',
                        dwRewardType: 0
                    })];
            case 146:
                _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 147:
                _14.sent();
                j = 1;
                _14.label = 148;
            case 148:
                if (!(j < 9)) return [3 /*break*/, 152];
                return [4 /*yield*/, api('story/RubbishOper', '_cfd_t,bizCode,dwEnv,dwRewardType,dwRubbishId,dwType,ptag,source,strZone', {
                        dwType: '2',
                        dwRewardType: 0,
                        dwRubbishId: j
                    })];
            case 149:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1500)];
            case 150:
                _14.sent();
                _14.label = 151;
            case 151:
                j++;
                return [3 /*break*/, 148];
            case 152: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 任务➡️
            ];
            case 153:
                _14.sent();
                return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 154:
                // 任务➡️
                tasks = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 155:
                _14.sent();
                _14.label = 156;
            case 156:
                _14.trys.push([156, 162, 163, 164]);
                _q = (e_9 = void 0, __values(tasks.Data.TaskList)), _r = _q.next();
                _14.label = 157;
            case 157:
                if (!!_r.done) return [3 /*break*/, 161];
                t = _r.value;
                if (!([1, 2].indexOf(t.dwOrderId) > -1 && t.dwCompleteNum < t.dwTargetNum && t.strTaskName != '热气球接待20位游客')) return [3 /*break*/, 160];
                console.log('开始任务➡️:', t.strTaskName);
                return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId, configExtra: '' }, 'right')];
            case 158:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.dwLookTime * 1000)];
            case 159:
                _14.sent();
                if (res.ret === 0) {
                    console.log('任务完成');
                }
                else {
                    console.log('任务失败', res);
                }
                _14.label = 160;
            case 160:
                _r = _q.next();
                return [3 /*break*/, 157];
            case 161: return [3 /*break*/, 164];
            case 162:
                e_9_1 = _14.sent();
                e_9 = { error: e_9_1 };
                return [3 /*break*/, 164];
            case 163:
                try {
                    if (_r && !_r.done && (_9 = _q["return"])) _9.call(_q);
                }
                finally { if (e_9) throw e_9.error; }
                return [7 /*endfinally*/];
            case 164: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 165:
                tasks = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 166:
                _14.sent();
                _14.label = 167;
            case 167:
                _14.trys.push([167, 173, 174, 175]);
                _s = (e_10 = void 0, __values(tasks.Data.TaskList)), _t = _s.next();
                _14.label = 168;
            case 168:
                if (!!_t.done) return [3 /*break*/, 172];
                t = _t.value;
                if (!(t.dwCompleteNum === t.dwTargetNum && t.dwAwardStatus === 2)) return [3 /*break*/, 171];
                return [4 /*yield*/, api('Award', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.ddwTaskId }, 'right')];
            case 169:
                res = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 170:
                _14.sent();
                if (res.ret === 0) {
                    console.log("\u9886\u5956\u6210\u529F:", res);
                }
                else {
                    console.log('领奖失败', res);
                }
                _14.label = 171;
            case 171:
                _t = _s.next();
                return [3 /*break*/, 168];
            case 172: return [3 /*break*/, 175];
            case 173:
                e_10_1 = _14.sent();
                e_10 = { error: e_10_1 };
                return [3 /*break*/, 175];
            case 174:
                try {
                    if (_t && !_t.done && (_10 = _s["return"])) _10.call(_s);
                }
                finally { if (e_10) throw e_10.error; }
                return [7 /*endfinally*/];
            case 175: return [4 /*yield*/, api('story/GetActTask', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 176:
                tasks = _14.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 177:
                _14.sent();
                if (!(tasks.Data.dwStatus === 3)) return [3 /*break*/, 179];
                return [4 /*yield*/, api('story/ActTaskAward', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 178:
                res = _14.sent();
                if (res.ret === 0) {
                    console.log('100财富任务完成');
                }
                _14.label = 179;
            case 179: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 导游
            ];
            case 180:
                _14.sent();
                return [4 /*yield*/, api('user/EmployTourGuideInfo', '_cfd_t,bizCode,dwEnv,ptag,source,strZone')];
            case 181:
                // 导游
                res = _14.sent();
                if (!!res.TourGuideList) return [3 /*break*/, 182];
                console.log('手动雇佣4个试用导游');
                return [3 /*break*/, 190];
            case 182:
                _14.trys.push([182, 188, 189, 190]);
                _u = (e_11 = void 0, __values(res.TourGuideList)), _v = _u.next();
                _14.label = 183;
            case 183:
                if (!!_v.done) return [3 /*break*/, 187];
                e = _v.value;
                if (!(e.strBuildIndex !== 'food' && e.ddwRemainTm === 0)) return [3 /*break*/, 186];
                return [4 /*yield*/, api('user/EmployTourGuide', '_cfd_t,bizCode,ddwConsumeCoin,dwEnv,dwIsFree,ptag,source,strBuildIndex,strZone', { ddwConsumeCoin: e.ddwCostCoin, dwIsFree: 0, strBuildIndex: e.strBuildIndex })];
            case 184:
                employ = _14.sent();
                if (employ.iRet === 0)
                    console.log("\u96C7\u4F63" + e.strBuildIndex + "\u5BFC\u6E38\u6210\u529F");
                if (employ.iRet === 2003)
                    return [3 /*break*/, 187];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 185:
                _14.sent();
                _14.label = 186;
            case 186:
                _v = _u.next();
                return [3 /*break*/, 183];
            case 187: return [3 /*break*/, 190];
            case 188:
                e_11_1 = _14.sent();
                e_11 = { error: e_11_1 };
                return [3 /*break*/, 190];
            case 189:
                try {
                    if (_v && !_v.done && (_11 = _u["return"])) _11.call(_u);
                }
                finally { if (e_11) throw e_11.error; }
                return [7 /*endfinally*/];
            case 190: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 191:
                _14.sent();
                _14.label = 192;
            case 192:
                _14.trys.push([192, 198, 199, 200]);
                _w = (e_12 = void 0, __values(['fun', 'shop', 'sea', 'food'])), _x = _w.next();
                _14.label = 193;
            case 193:
                if (!!_x.done) return [3 /*break*/, 197];
                b = _x.value;
                return [4 /*yield*/, api('user/CollectCoin', '_cfd_t,bizCode,dwEnv,dwType,ptag,source,strBuildIndex,strZone', { strBuildIndex: b, dwType: '1' })];
            case 194:
                res = _14.sent();
                console.log(b + "\u6536\u91D1\u5E01:", res.ddwCoin);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 195:
                _14.sent();
                _14.label = 196;
            case 196:
                _x = _w.next();
                return [3 /*break*/, 193];
            case 197: return [3 /*break*/, 200];
            case 198:
                e_12_1 = _14.sent();
                e_12 = { error: e_12_1 };
                return [3 /*break*/, 200];
            case 199:
                try {
                    if (_x && !_x.done && (_12 = _w["return"])) _12.call(_w);
                }
                finally { if (e_12) throw e_12.error; }
                return [7 /*endfinally*/];
            case 200:
                i++;
                return [3 /*break*/, 3];
            case 201:
                i = 0;
                _14.label = 202;
            case 202:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 213];
                return [4 /*yield*/, getCodesHW()
                    // 获取随机助力码
                ];
            case 203:
                _14.sent();
                _14.label = 204;
            case 204:
                _14.trys.push([204, 206, , 207]);
                return [4 /*yield*/, axi.get("https://api.jdsharecode.xyz/api/jxcfd/30", { timeout: 10000 })];
            case 205:
                data = (_14.sent()).data;
                console.log('获取到30个随机助力码:', data.data);
                shareCodes = __spreadArray(__spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false), __read(data.data), false);
                return [3 /*break*/, 207];
            case 206:
                e_13 = _14.sent();
                console.log('获取助力池失败');
                shareCodes = __spreadArray(__spreadArray([], __read(shareCodesSelf), false), __read(shareCodesHW), false);
                return [3 /*break*/, 207];
            case 207:
                j = 0;
                _14.label = 208;
            case 208:
                if (!(j < shareCodes.length)) return [3 /*break*/, 212];
                cookie = cookiesArr[i];
                console.log("\u8D26\u53F7" + (i + 1) + "\u53BB\u52A9\u529B:", shareCodes[j]);
                return [4 /*yield*/, api('story/helpbystage', '_cfd_t,bizCode,dwEnv,ptag,source,strShareId,strZone', { strShareId: shareCodes[j] })];
            case 209:
                res = _14.sent();
                if (res.iRet === 0) {
                    console.log('助力成功:', res.Data.GuestPrizeInfo.strPrizeName);
                }
                else if (res.iRet === 2190) {
                    console.log('上限');
                    return [3 /*break*/, 212];
                }
                else if (res.iRet === 2191) {
                    console.log('已助力');
                }
                else {
                    console.log('其他错误:', res);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 210:
                _14.sent();
                _14.label = 211;
            case 211:
                j++;
                return [3 /*break*/, 208];
            case 212:
                i++;
                return [3 /*break*/, 202];
            case 213: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params, taskPosition) {
    if (params === void 0) { params = {}; }
    if (taskPosition === void 0) { taskPosition = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var url, bizCode, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (['GetUserTaskStatusList', 'Award', 'DoTask'].includes(fn)) {
                        bizCode = void 0;
                        if (!params.bizCode) {
                            bizCode = taskPosition === 'right' ? 'jxbfddch' : 'jxbfd';
                        }
                        else {
                            bizCode = params.bizCode;
                        }
                        url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?strZone=jxbfd&bizCode=" + bizCode + "&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls";
                    }
                    else {
                        url = "https://m.jingxi.com/jxbfd/" + fn + "?strZone=jxbfd&bizCode=jxbfd&source=jxbfd&dwEnv=7&_cfd_t=" + Date.now() + "&ptag=7155.9.47&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBK" + String.fromCharCode(Math.floor(Math.random() * 26) + "A".charCodeAt(0)) + "&g_ty=ls";
                    }
                    url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10032);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/',
                                'User-Agent': USER_AGENT,
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    if (typeof data === 'string')
                        return [2 /*return*/, JSON.parse(data.replace(/\n/g, '').match(/jsonpCBK.?\(([^)]*)/)[1])];
                    else
                        return [2 /*return*/, data];
                    return [2 /*return*/];
            }
        });
    });
}
function task() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, e_18_1;
        var e_18, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('刷新任务列表');
                    return [4 /*yield*/, api('GetUserTaskStatusList', '_cfd_t,bizCode,dwEnv,ptag,showAreaTaskFlag,source,strZone,taskId', { taskId: 0, showAreaTaskFlag: 1 })];
                case 1:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 14, 15, 16]);
                    _a = __values(res.data.userTaskStatusList), _b = _a.next();
                    _d.label = 4;
                case 4:
                    if (!!_b.done) return [3 /*break*/, 13];
                    t = _b.value;
                    if (!(t.awardStatus === 2 && t.completedTimes === t.targetTimes)) return [3 /*break*/, 9];
                    console.log('可领奖:', t.taskName);
                    return [4 /*yield*/, api('Award', '_cfd_t,bizCode,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, bizCode: t.bizCode })];
                case 5:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 6:
                    _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 8];
                    try {
                        res = JSON.parse(res.data.prizeInfo);
                        console.log("\u9886\u5956\u6210\u529F:", res.ddwCoin, res.ddwMoney);
                    }
                    catch (e) {
                        console.log('领奖成功:', res.data);
                    }
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 7:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 8:
                    console.log('领奖失败:', res);
                    return [2 /*return*/, 0];
                case 9:
                    if (!(t.dateType === 2 && t.awardStatus === 2 && t.completedTimes < t.targetTimes && t.taskCaller === 1)) return [3 /*break*/, 12];
                    console.log('做任务:', t.taskId, t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, api('DoTask', '_cfd_t,bizCode,configExtra,dwEnv,ptag,source,strZone,taskId', { taskId: t.taskId, configExtra: '', bizCode: t.bizCode })];
                case 10:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 11:
                    _d.sent();
                    if (res.ret === 0) {
                        console.log('任务完成');
                        return [2 /*return*/, 1];
                    }
                    else {
                        console.log('任务失败');
                        return [2 /*return*/, 0];
                    }
                    _d.label = 12;
                case 12:
                    _b = _a.next();
                    return [3 /*break*/, 4];
                case 13: return [3 /*break*/, 16];
                case 14:
                    e_18_1 = _d.sent();
                    e_18 = { error: e_18_1 };
                    return [3 /*break*/, 16];
                case 15:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_18) throw e_18.error; }
                    return [7 /*endfinally*/];
                case 16: return [2 /*return*/, 0];
            }
        });
    });
}
function makeShareCodes() {
    return __awaiter(this, void 0, void 0, function () {
        var bean, farm, pin, data, e_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    return [4 /*yield*/, api('user/QueryUserInfo', '_cfd_t,bizCode,ddwTaskId,dwEnv,ptag,source,strPgUUNum,strPgtimestamp,strPhoneID,strShareId,strVersion,strZone', {
                            ddwTaskId: '',
                            strShareId: '',
                            strMarkList: 'undefined',
                            strPgUUNum: token.strPgUUNum,
                            strPgtimestamp: token.strPgtimestamp,
                            strPhoneID: token.strPhoneID,
                            strVersion: '1.0.1'
                        })];
                case 1:
                    res = _a.sent();
                    console.log('助力码:', res.strMyShareId);
                    shareCodesSelf.push(res.strMyShareId);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getBeanShareCode)(cookie)];
                case 2:
                    bean = _a.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.getFarmShareCode)(cookie)];
                case 3:
                    farm = _a.sent();
                    pin = ts_md5_1.Md5.hashStr(cookie.match(/pt_pin=([^;]*)/)[1]);
                    return [4 /*yield*/, axios_1["default"].get("https://api.jdsharecode.xyz/api/autoInsert/jxcfd?sharecode=" + res.strMyShareId + "&bean=" + bean + "&farm=" + farm + "&pin=" + pin)];
                case 4:
                    data = (_a.sent()).data;
                    console.log(data.message);
                    return [3 /*break*/, 6];
                case 5:
                    e_19 = _a.sent();
                    console.log('自动提交失败');
                    console.log(e_19);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function getCodesHW() {
    return __awaiter(this, void 0, void 0, function () {
        var data, e_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axi.get("https://api.jdsharecode.xyz/api/HW_CODES", { timeout: 10000 })];
                case 1:
                    data = (_a.sent()).data;
                    shareCodesHW = data['jxcfd'] || [];
                    return [3 /*break*/, 3];
                case 2:
                    e_20 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
