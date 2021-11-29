"use strict";
/**
 * 宠汪汪三代目
 * cron: 0 0-23/3 * * *
 *
 * follow_fail就停
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
var date_fns_1 = require("date-fns");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var JDJRValidator = require('./utils/jd_joy_validate').JDJRValidator;
var cookie = '', res = '', UserName, index, invokeKey = 'q8DNJdpcfRQ69gIx';
var message;
function get(url, config) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        axios_1["default"].get(url, config).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var validateRes, validate, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(JSON.stringify(res.data).search('验证') > -1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new JDJRValidator().run()];
                    case 1:
                        validateRes = _a.sent();
                        validate = validateRes.validate;
                        return [4 /*yield*/, get("".concat(url, "&validate=").concat(validate), config)];
                    case 2:
                        data = _a.sent();
                        resolve(data);
                        return [3 /*break*/, 4];
                    case 3:
                        resolve(res.data);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); })["catch"](function (err) {
            reject(err);
        });
    });
}
function post(url, body, config) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        axios_1["default"].post(url, body, config).then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var validateRes, validate, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(JSON.stringify(res.data).search('验证') > -1)) return [3 /*break*/, 3];
                        return [4 /*yield*/, new JDJRValidator().run()];
                    case 1:
                        validateRes = _a.sent();
                        validate = validateRes.validate;
                        return [4 /*yield*/, post("".concat(url, "&validate=").concat(validate), body, config)];
                    case 2:
                        data = _a.sent();
                        resolve(data);
                        return [3 /*break*/, 4];
                    case 3:
                        resolve(res.data);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); })["catch"](function (err) {
            reject(err);
        });
    });
}
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, lastFeedTime, winCoin, _a, _b, user, _c, _d, t, _e, _f, task, e_1_1, _g, _h, task, e_2_1, _j, _k, task, e_3_1, e_4_1, e_5;
    var e_6, _l, e_4, _m, e_1, _o, e_2, _p, e_3, _q;
    return __generator(this, function (_r) {
        switch (_r.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _r.sent();
                i = 0;
                _r.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 88];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n"));
                _r.label = 3;
            case 3:
                _r.trys.push([3, 86, , 87]);
                return [4 /*yield*/, doTask('enterRoom/h5', {}, '&invitePin=')];
            case 4:
                // 进入游戏
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 5:
                _r.sent();
                lastFeedTime = res.data.lastFeedTime;
                if (!((0, date_fns_1.differenceInMinutes)(Date.now(), lastFeedTime) > 180)) return [3 /*break*/, 10];
                return [4 /*yield*/, click('feed')];
            case 6:
                _r.sent();
                return [4 /*yield*/, beforeFeed()];
            case 7:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 8:
                _r.sent();
                return [4 /*yield*/, feed()];
            case 9:
                res = _r.sent();
                if (res.errorCode === 'feed_ok') {
                    console.log('喂食成功', 80);
                }
                else {
                    console.log('喂食失败', res.errorCode);
                }
                return [3 /*break*/, 11];
            case 10:
                console.log('feed间隔未满3小时，上次喂食', (0, date_fns_1.format)(lastFeedTime, 'HH:mm:ss'));
                _r.label = 11;
            case 11: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)
                // 查询积分
            ];
            case 12:
                _r.sent();
                return [4 /*yield*/, api('gift/getBeanConfigs')];
            case 13:
                // 查询积分
                res = _r.sent();
                console.log('现有积分', res.data.petCoin);
                // run
                return [4 /*yield*/, click('race')];
            case 14:
                // run
                _r.sent();
                return [4 /*yield*/, beforeFeed('race')];
            case 15:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 16:
                _r.sent();
                return [4 /*yield*/, api('pet/combat/detail/v2', '', '&help=false')];
            case 17:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 18:
                _r.sent();
                if (!(res.data.petRaceResult === 'unreceive')) return [3 /*break*/, 21];
                winCoin = res.data.winCoin // 赛跑奖励
                ;
                return [4 /*yield*/, api('pet/combat/receive')];
            case 19:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 20:
                _r.sent();
                if (!res.errorCode) {
                    console.log('赛跑领奖成功', winCoin);
                    message += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n\u8D5B\u8DD1\u9886\u5956\u6210\u529F\uFF0C\u83B7\u5F97").concat(winCoin, "\u79EF\u5206\n\n");
                }
                return [3 /*break*/, 33];
            case 21:
                if (!(res.data.petRaceResult === 'not_participate')) return [3 /*break*/, 32];
                console.log('可参赛');
                return [4 /*yield*/, api('pet/combat/match', '', '&teamLevel=2')];
            case 22:
                res = _r.sent();
                return [4 /*yield*/, beforeFeed('race_match')];
            case 23:
                _r.sent();
                return [4 /*yield*/, click('race_match')];
            case 24:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 25:
                _r.sent();
                _r.label = 26;
            case 26:
                if (!1) return [3 /*break*/, 31];
                if (!(res.data.petRaceResult === 'matching')) return [3 /*break*/, 29];
                console.log('正在匹配......');
                return [4 /*yield*/, api('pet/combat/match', '', '&teamLevel=2')];
            case 27:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(5000)];
            case 28:
                _r.sent();
                return [3 /*break*/, 30];
            case 29: return [3 /*break*/, 31];
            case 30: return [3 /*break*/, 26];
            case 31: return [3 /*break*/, 33];
            case 32:
                if (res.data.petRaceResult === 'participate') {
                    console.log('比赛中......');
                    try {
                        for (_a = (e_6 = void 0, __values(res.data.raceUsers)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            user = _b.value;
                            console.log(user.nickName, user.distance);
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_l = _a["return"])) _l.call(_a);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
                else if (res.data.petRaceResult === 'time_over') {
                    console.log('赛跑已结束');
                }
                else if (res.data.petRaceResult === 'race_lose') {
                    console.log('赛跑结果  输');
                    message += "\u3010\u4EAC\u4E1C\u8D26\u53F7".concat(index, "\u3011").concat(UserName, "\n\u8D5B\u8DD1\u7ED3\u679C\uFF1A\u8F93\n\n");
                }
                else if (res.data.petRaceResult === 'unbegin') {
                    console.log('赛跑未开始');
                }
                else {
                    console.log('赛跑状态未知');
                    (0, TS_USER_AGENTS_1.o2s)(res);
                }
                _r.label = 33;
            case 33: return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 34:
                _r.sent();
                return [4 /*yield*/, api('pet/getPetTaskConfig')];
            case 35:
                res = _r.sent();
                _r.label = 36;
            case 36:
                _r.trys.push([36, 83, 84, 85]);
                _c = (e_4 = void 0, __values(res.datas)), _d = _c.next();
                _r.label = 37;
            case 37:
                if (!!_d.done) return [3 /*break*/, 82];
                t = _d.value;
                if (!(t.receiveStatus === 'unreceive')) return [3 /*break*/, 40];
                console.log('可领奖:', t.taskName);
                return [4 /*yield*/, api('pet/getFood', t.taskType)];
            case 38:
                res = _r.sent();
                if (res.errorCode === 'received') {
                    console.log('已领取:', res.data);
                }
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(3000)];
            case 39:
                _r.sent();
                _r.label = 40;
            case 40:
                if (!(t.taskName === '浏览频道')) return [3 /*break*/, 57];
                return [4 /*yield*/, beforeFeed('follow_channel')];
            case 41:
                _r.sent();
                return [4 /*yield*/, click('follow_channel')];
            case 42:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 43:
                _r.sent();
                return [4 /*yield*/, api('pet/getFollowChannels')];
            case 44:
                res = _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 45:
                _r.sent();
                _r.label = 46;
            case 46:
                _r.trys.push([46, 55, 56, 57]);
                _e = (e_1 = void 0, __values(res.datas)), _f = _e.next();
                _r.label = 47;
            case 47:
                if (!!_f.done) return [3 /*break*/, 54];
                task = _f.value;
                if (!!task.status) return [3 /*break*/, 53];
                console.log('浏览频道', task.channelName);
                return [4 /*yield*/, click('follow_channel', task.channelId)];
            case 48:
                _r.sent();
                return [4 /*yield*/, beforeTask('follow_channel', task.channelId)];
            case 49:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 50:
                _r.sent();
                return [4 /*yield*/, doTask('scan', { "channelId": task.channelId, "taskType": 'FollowChannel' })];
            case 51:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 52:
                _r.sent();
                _r.label = 53;
            case 53:
                _f = _e.next();
                return [3 /*break*/, 47];
            case 54: return [3 /*break*/, 57];
            case 55:
                e_1_1 = _r.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 57];
            case 56:
                try {
                    if (_f && !_f.done && (_o = _e["return"])) _o.call(_e);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 57:
                if (!(t.taskName === '逛会场')) return [3 /*break*/, 69];
                _r.label = 58;
            case 58:
                _r.trys.push([58, 67, 68, 69]);
                _g = (e_2 = void 0, __values(t.scanMarketList)), _h = _g.next();
                _r.label = 59;
            case 59:
                if (!!_h.done) return [3 /*break*/, 66];
                task = _h.value;
                if (!!task.status) return [3 /*break*/, 65];
                console.log('逛逛会场', task.marketName);
                return [4 /*yield*/, beforeTask('scan_market', encodeURIComponent(task.marketLink || task.marketLinkH5))];
            case 60:
                _r.sent();
                return [4 /*yield*/, click('scan_market', encodeURIComponent(task.marketLink || task.marketLinkH5))];
            case 61:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 62:
                _r.sent();
                return [4 /*yield*/, doTask('scan', { "marketLink": task.marketLink || task.marketLinkH5, "taskType": "ScanMarket" })];
            case 63:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 64:
                _r.sent();
                _r.label = 65;
            case 65:
                _h = _g.next();
                return [3 /*break*/, 59];
            case 66: return [3 /*break*/, 69];
            case 67:
                e_2_1 = _r.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 69];
            case 68:
                try {
                    if (_h && !_h.done && (_p = _g["return"])) _p.call(_g);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 69:
                if (!(t.taskName === '关注商品')) return [3 /*break*/, 81];
                _r.label = 70;
            case 70:
                _r.trys.push([70, 79, 80, 81]);
                _j = (e_3 = void 0, __values(t.followGoodList)), _k = _j.next();
                _r.label = 71;
            case 71:
                if (!!_k.done) return [3 /*break*/, 78];
                task = _k.value;
                if (!!task.status) return [3 /*break*/, 77];
                console.log('关注商品', task.skuName);
                return [4 /*yield*/, beforeTask('follow_good', task.sku)];
            case 72:
                _r.sent();
                return [4 /*yield*/, click('follow_good', task.sku)];
            case 73:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(6000)];
            case 74:
                _r.sent();
                return [4 /*yield*/, doTask('followGood', "sku=".concat(task.sku))];
            case 75:
                _r.sent();
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
            case 76:
                _r.sent();
                _r.label = 77;
            case 77:
                _k = _j.next();
                return [3 /*break*/, 71];
            case 78: return [3 /*break*/, 81];
            case 79:
                e_3_1 = _r.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 81];
            case 80:
                try {
                    if (_k && !_k.done && (_q = _j["return"])) _q.call(_j);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 81:
                _d = _c.next();
                return [3 /*break*/, 37];
            case 82: return [3 /*break*/, 85];
            case 83:
                e_4_1 = _r.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 85];
            case 84:
                try {
                    if (_d && !_d.done && (_m = _c["return"])) _m.call(_c);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 85: return [3 /*break*/, 87];
            case 86:
                e_5 = _r.sent();
                console.log(e_5);
                console.log('Error! 手动打开app确认');
                return [3 /*break*/, 87];
            case 87:
                i++;
                return [3 /*break*/, 2];
            case 88: return [2 /*return*/];
        }
    });
}); })();
function api(fn, taskType, params) {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    url = taskType
                        ? "https://jdjoy.jd.com/common/".concat(fn, "?reqSource=h5&invokeKey=").concat(invokeKey, "&taskType=").concat(taskType)
                        : "https://jdjoy.jd.com/common/".concat(fn, "?reqSource=h5&invokeKey=").concat(invokeKey).concat(params !== null && params !== void 0 ? params : '');
                    return [4 /*yield*/, get(url, {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'Accept': '*/*',
                                'lkt': lkt.toString(),
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Content-Type': 'application/json',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'lks': lks,
                                'Referer': 'https://h5.m.jd.com/',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
function beforeFeed(fn) {
    if (fn === void 0) { fn = 'feed'; }
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    return [4 /*yield*/, get("https://jdjoy.jd.com/common/pet/icon/click1?iconCode=".concat(fn, "&reqSource=h5&invokeKey=").concat(invokeKey), {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'lkt': lkt.toString(),
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'lks': lks,
                                'Referer': 'https://h5.m.jd.com/',
                                'Content-Type': 'application/json',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
function feed() {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    return [4 /*yield*/, get("https://jdjoy.jd.com/common/pet/feed?feedCount=80&reqSource=h5&invokeKey=".concat(invokeKey), {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'lkt': lkt.toString(),
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'lks': lks,
                                'Referer': 'https://h5.m.jd.com/',
                                'Content-Type': 'application/json',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
function beforeTask(fn, linkAddr) {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    return [4 /*yield*/, get("https://jdjoy.jd.com/common/pet/icon/click1?iconCode=".concat(fn, "&linkAddr=").concat(linkAddr, "&reqSource=h5&invokeKey=").concat(invokeKey), {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'Accept': '*/*',
                                'lkt': lkt.toString(),
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Connection': 'keep-alive',
                                'lks': lks,
                                'Referer': 'https://h5.m.jd.com/',
                                'Content-Type': 'application/json',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    res = _a.sent();
                    if (res.errorCode) {
                        console.log(res.errorCode);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function doTask(fn, body, params) {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    return [4 /*yield*/, post("https://jdjoy.jd.com/common/pet/".concat(fn, "?reqSource=h5&invokeKey=").concat(invokeKey).concat(params !== null && params !== void 0 ? params : ''), typeof body === 'object' ? JSON.stringify(body) : body, {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'lkt': lkt.toString(),
                                'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
                                'Origin': 'https://h5.m.jd.com',
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'Referer': 'https://h5.m.jd.com/',
                                'lks': lks,
                                'Content-Type': typeof body === 'object' ? 'application/json' : 'application/x-www-form-urlencoded',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    res = _a.sent();
                    if (res.errorCode) {
                        console.log(res.errorCode);
                    }
                    return [2 /*return*/, res];
            }
        });
    });
}
function click(iconCode, linkAddr) {
    return __awaiter(this, void 0, void 0, function () {
        var lkt, lks, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lkt = Date.now();
                    lks = ts_md5_1.Md5.hashStr('' + invokeKey + lkt);
                    url = linkAddr
                        ? "https://jdjoy.jd.com/common/pet/icon/click?code=1624363341529274068136&iconCode=".concat(iconCode, "&linkAddr=").concat(linkAddr, "&reqSource=h5&invokeKey=").concat(invokeKey)
                        : "https://jdjoy.jd.com/common/pet/icon/click?code=1624363341529274068136&iconCode=".concat(iconCode, "&reqSource=h5&invokeKey=").concat(invokeKey);
                    return [4 /*yield*/, get(url, {
                            headers: {
                                'Host': 'jdjoy.jd.com',
                                'Connection': 'keep-alive',
                                'Sec-Fetch-Mode': 'cors',
                                'Origin': 'https://h5.m.jd.com',
                                'lks': lks,
                                'User-Agent': TS_USER_AGENTS_1["default"],
                                'lkt': lkt.toString(),
                                'content-type': 'application/json',
                                'X-Requested-With': 'com.jingdong.app.mall',
                                'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2wuqXrZrhygTQzYA7VufBEpj4amH/index.html',
                                'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    res = _a.sent();
                    if (res.errorCode) {
                        console.log(res.errorCode);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
