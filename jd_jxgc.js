"use strict";
/**
 * TODO
 * 团
 *
 * cron: 30 * * * *
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
var date_fns_1 = require("date-fns");
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var sendNotify_1 = require("./sendNotify");
var path = require("path");
var cookie = '', res = '', UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, except, i, productionId, investedElectric, needElectric, progress, factoryId, flag, j, _a, _b, t, e_1_1, j;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requestAlgo)(10001)];
            case 1:
                _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 2:
                cookiesArr = _d.sent();
                except = (0, TS_USER_AGENTS_1.exceptCookie)(path.basename(__filename));
                i = 0;
                _d.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 33];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, api('userinfo/GetUserInfo', '_time,materialTuanId,materialTuanPin,needPickSiteInfo,pin,sharePin,shareType,source,zone', {
                        pin: '',
                        sharePin: '',
                        shareType: '',
                        materialTuanPin: '',
                        materialTuanId: '',
                        needPickSiteInfo: 0,
                        source: ''
                    })];
            case 4:
                res = _d.sent();
                productionId = 0;
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _d.sent();
                try {
                    productionId = res.data.productionList[0].productionId;
                    investedElectric = res.data.productionList[0].investedElectric, needElectric = res.data.productionList[0].needElectric, progress = (investedElectric / needElectric * 100).toFixed(2);
                    console.log('生产进度:', progress);
                    if (progress === '100.00') {
                        (0, notify.sendNotify)("京喜工厂生产完成", "\u8D26\u53F7" + index + " " + UserName);
                        return [3 /*break*/, 32];
                    }
                }
                catch (e) {
                    console.log('当前没有产品在生产');
                    return [3 /*break*/, 32];
                }
                factoryId = res.data.factoryList[0].factoryId;
                return [4 /*yield*/, api('generator/QueryCurrentElectricityQuantity', '_time,factoryid,querytype,zone', { factoryid: factoryId, querytype: 1 })];
            case 6:
                res = _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 7:
                _d.sent();
                flag = -1;
                if (res.data.nextCollectDoubleFlag === 1) {
                    // 下次双倍
                    if (res.data.currentElectricityQuantity === res.data.maxElectricityQuantity) {
                        // 发电机满
                        flag = 1;
                    }
                    else {
                        console.log('发电机可收取双倍，但没满');
                    }
                }
                else {
                    // 没有双倍，直接收
                    flag = 0;
                }
                if (!(flag !== -1)) return [3 /*break*/, 9];
                return [4 /*yield*/, api('generator/CollectCurrentElectricity', '_time,apptoken,doubleflag,factoryid,pgtimestamp,phoneID,zone', { apptoken: '', pgtimestamp: '', phoneID: '', factoryid: factoryId, doubleflag: flag, timeStamp: 'undefined' })];
            case 8:
                res = _d.sent();
                res.ret === 0
                    ? console.log('发电机收取成功:', res.data.CollectElectricity)
                    : console.log('发电机收取失败:', res);
                _d.label = 9;
            case 9: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)
                // 投入电力
            ];
            case 10:
                _d.sent();
                j = 0;
                _d.label = 11;
            case 11:
                if (!(j < 3)) return [3 /*break*/, 15];
                return [4 /*yield*/, api('userinfo/InvestElectric', '_time,productionId,zone', { productionId: productionId })];
            case 12:
                res = _d.sent();
                if (res.ret === 0) {
                    console.log('投入电力:', res.data.investElectric);
                }
                else {
                    console.log('投入电力失败:', res);
                    return [3 /*break*/, 15];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 13:
                _d.sent();
                _d.label = 14;
            case 14:
                j++;
                return [3 /*break*/, 11];
            case 15: return [4 /*yield*/, api('friend/QueryHireReward', '_time,zone')];
            case 16:
                res = _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 17:
                _d.sent();
                _d.label = 18;
            case 18:
                _d.trys.push([18, 24, 25, 26]);
                _a = (e_1 = void 0, __values(res.data.hireReward)), _b = _a.next();
                _d.label = 19;
            case 19:
                if (!!_b.done) return [3 /*break*/, 23];
                t = _b.value;
                if (!(t.date !== (0, date_fns_1.format)(Date.now(), "yyyyMMdd"))) return [3 /*break*/, 22];
                return [4 /*yield*/, api('friend/HireAward', '_time,date,type,zone', { date: t.date })];
            case 20:
                res = _d.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 21:
                _d.sent();
                if (res.ret === 0)
                    console.log('收取气泡成功:', t.electricityQuantity);
                _d.label = 22;
            case 22:
                _b = _a.next();
                return [3 /*break*/, 19];
            case 23: return [3 /*break*/, 26];
            case 24:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 26];
            case 25:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 26:
                console.log('任务列表开始');
                j = 0;
                _d.label = 27;
            case 27:
                if (!(j < 30)) return [3 /*break*/, 31];
                return [4 /*yield*/, task()];
            case 28:
                if ((_d.sent()) === 0) {
                    return [3 /*break*/, 31];
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
            case 29:
                _d.sent();
                _d.label = 30;
            case 30:
                j++;
                return [3 /*break*/, 27];
            case 31:
                console.log('任务列表结束');
                _d.label = 32;
            case 32:
                i++;
                return [3 /*break*/, 3];
            case 33: return [2 /*return*/];
        }
    });
}); })();
function task() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, t, e_2_1;
        var e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, api('GetUserTaskStatusList', '_time,bizCode,source')];
                case 1:
                    res = _d.sent();
                    console.log('GetUserTaskStatusList: 刷新任务列表');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _d.trys.push([3, 15, 16, 17]);
                    _a = __values(res.data.userTaskStatusList), _b = _a.next();
                    _d.label = 4;
                case 4:
                    if (!!_b.done) return [3 /*break*/, 14];
                    t = _b.value;
                    if (!(t.awardStatus === 2)) return [3 /*break*/, 13];
                    if (!(t.completedTimes >= t.targetTimes)) return [3 /*break*/, 8];
                    console.log('可领奖:', t.taskName);
                    return [4 /*yield*/, api('Award', '_time,bizCode,source,taskId', { taskId: t.taskId })];
                case 5:
                    res = _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 7];
                    console.log('领奖成功:', res.data.prizeInfo.trim() * 1);
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(4000)];
                case 6:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 7:
                    console.log('领奖出错');
                    return [2 /*return*/, 0];
                case 8:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && [2, 6, 9].indexOf(t.taskType) > -1)) return [3 /*break*/, 13];
                    console.log('任务开始:', t.taskName);
                    return [4 /*yield*/, api('DoTask', '_time,bizCode,configExtra,source,taskId', { configExtra: '', taskId: t.taskId })];
                case 9:
                    res = _d.sent();
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
                case 10:
                    _d.sent();
                    if (!(res.ret === 0)) return [3 /*break*/, 12];
                    console.log('任务完成');
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
                case 11:
                    _d.sent();
                    return [2 /*return*/, 1];
                case 12:
                    console.log('任务失败:');
                    return [2 /*return*/, 0];
                case 13:
                    _b = _a.next();
                    return [3 /*break*/, 4];
                case 14: return [3 /*break*/, 17];
                case 15:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 17];
                case 16:
                    try {
                        if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 17: return [2 /*return*/, 0];
            }
        });
    });
}
function api(fn, stk, params) {
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) {
        var url = '';
        if (['GetUserTaskStatusList', 'DoTask', 'Award'].indexOf(fn) > -1)
            url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?source=dreamfactory&bizCode=dream_factory&_time=" + Date.now() + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
        else
            url = "https://m.jingxi.com/dreamfactory/" + fn + "?zone=dream_factory&_time=" + Date.now() + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
        url = (0, TS_USER_AGENTS_1.h5st)(url, stk, params, 10001);
        axios_1["default"].get(url, {
            headers: {
                'Cookie': cookie,
                'Host': 'm.jingxi.com',
                'User-Agent': 'jdpingou;',
                'Referer': 'https://st.jingxi.com/pingou/dream_factory/index.html'
            }
        }).then(function (res) {
            resolve(res.data);
        })["catch"](function (err) {
            console.log('err:', err);
            reject(err);
        });
    });
}
