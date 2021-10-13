"use strict";
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
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var $ = {};
var cookie = '', cookiesArr = [], res, shareCodes = [];
var token = '', token2 = '', pin = '', uuid = '';
var shopId = '';
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, foodLeft, _a, _b, t, signRes, r, products, _c, _d, p, i_1, playRes, e_1_1;
    var e_1, _e, e_2, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0: return [4 /*yield*/, requireConfig()];
            case 1:
                _g.sent();
                i = 0;
                _g.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 32];
                cookie = cookiesArr[i];
                $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                $.index = i + 1;
                $.isLogin = true;
                $.nickName = $.UserName;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + $.index + "\u3011" + ($.nickName || $.UserName) + "\n");
                return [4 /*yield*/, getIsvToken()];
            case 3:
                _g.sent();
                return [4 /*yield*/, getIsvToken2()];
            case 4:
                _g.sent();
                return [4 /*yield*/, init()];
            case 5:
                _g.sent();
                return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/dz/common/getSimpleActInfoVo', 'activityId=90121061401')];
            case 6:
                res = _g.sent();
                shopId = res.data.shopId;
                console.log('shopId:', shopId);
                return [4 /*yield*/, api('https://lzdz-isv.isvjcloud.com/customer/getMyPing', "userId=1000361242&token=" + token2 + "&fromType=APP")];
            case 7:
                res = _g.sent();
                pin = res.data.secretPin;
                console.log('pin:', pin);
                return [4 /*yield*/, api('myInfo', "activityId=90121061401&pin=" + encodeURIComponent(pin))];
            case 8:
                res = _g.sent();
                foodLeft = res.data.bags[1].totalNum - res.data.bags[1].useNum;
                console.log(foodLeft);
                _g.label = 9;
            case 9:
                _g.trys.push([9, 29, 30, 31]);
                _a = (e_1 = void 0, __values(res.data.task)), _b = _a.next();
                _g.label = 10;
            case 10:
                if (!!_b.done) return [3 /*break*/, 28];
                t = _b.value;
                if (!(t.type === 0 && t.maxNeed === 10000000)) return [3 /*break*/, 13];
                // 首页任务
                console.log(t.type, t.taskname);
                return [4 /*yield*/, api('doTask', "taskId=" + t.taskid + "&activityId=90121061401&pin=" + encodeURIComponent(pin))];
            case 11:
                res = _g.sent();
                if (res.result) {
                    console.log(t.taskname + "\u6210\u529F:" + res.data.growUp);
                }
                else {
                    console.log(res.errorMessage);
                }
                return [4 /*yield*/, wait(5000)];
            case 12:
                _g.sent();
                _g.label = 13;
            case 13:
                if (!(t.curNum != t.need && t.type === 1)) return [3 /*break*/, 27];
                console.log(t.taskname);
                if (!(t.taskid === 'signin')) return [3 /*break*/, 15];
                return [4 /*yield*/, api("signin", "taskId=signin&param=&activityId=90121061401&pin=" + encodeURIComponent(pin))];
            case 14:
                signRes = _g.sent();
                console.log('签到:', signRes);
                _g.label = 15;
            case 15:
                if (!(t.taskid === 'scanvideo')) return [3 /*break*/, 18];
                return [4 /*yield*/, api('doTask', "taskId=" + t.taskid + "&activityId=90121061401&pin=" + encodeURIComponent(pin))];
            case 16:
                r = _g.sent();
                return [4 /*yield*/, wait(1000)];
            case 17:
                _g.sent();
                _g.label = 18;
            case 18:
                if (!(t.taskid === 'scansku' || t.taskid === 'add2cart')) return [3 /*break*/, 22];
                return [4 /*yield*/, api('getproduct', "type=" + t.params + "&activityId=90121061401&pin=" + encodeURIComponent(pin))];
            case 19:
                products = _g.sent();
                return [4 /*yield*/, wait(1000)];
            case 20:
                _g.sent();
                return [4 /*yield*/, api("doTask", "taskId=" + t.taskid + "&param=" + products.data[0].id + "&activityId=90121061401&pin=" + encodeURIComponent(pin))];
            case 21:
                _g.sent();
                try {
                    for (_c = (e_2 = void 0, __values(products.data)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        p = _d.value;
                        console.log(p.id);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_f = _c["return"])) _f.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                _g.label = 22;
            case 22:
                if (!(t.taskid === 'interact')) return [3 /*break*/, 27];
                i_1 = 0;
                _g.label = 23;
            case 23:
                if (!(i_1 < t.maxNeed - t.curNum)) return [3 /*break*/, 27];
                return [4 /*yield*/, api('doTask', "taskId=" + t.taskid + "&activityId=90121061401&pin=" + encodeURIComponent(pin))];
            case 24:
                playRes = _g.sent();
                if (playRes.result) {
                    console.log('互动成功:', playRes.data.growUp);
                }
                else {
                    console.log(res.errorMessage);
                }
                return [4 /*yield*/, wait(1000)];
            case 25:
                _g.sent();
                _g.label = 26;
            case 26:
                i_1++;
                return [3 /*break*/, 23];
            case 27:
                _b = _a.next();
                return [3 /*break*/, 10];
            case 28: return [3 /*break*/, 31];
            case 29:
                e_1_1 = _g.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 31];
            case 30:
                try {
                    if (_b && !_b.done && (_e = _a["return"])) _e.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 31:
                i++;
                return [3 /*break*/, 2];
            case 32: return [2 /*return*/];
        }
    });
}); })();
function api(fn, body) {
    var _this = this;
    var url;
    if (fn.indexOf('https://') > -1) {
        url = fn;
    }
    else {
        url = "https://lzdz-isv.isvjcloud.com/dingzhi/qqxing/pasture/" + fn + "?_=" + Date.now();
    }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var _a, data, headers;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post(url, body
                    // `activityId=90121061401&pin=${encodeURIComponent(pin)}&actorUuid=${uuid}&userUuid=${uuid}`
                    , {
                        headers: {
                            'Host': 'lzdz-isv.isvjcloud.com',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Referer': 'https://lzdz-isv.isvjcloud.com/dingzhi/qqxing/pasture/activity?activityId=90121061401',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Accept': 'application/json',
                            'Origin': 'https://lzdz-isv.isvjcloud.com',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    _a = _b.sent(), data = _a.data, headers = _a.headers;
                    reloadCookie(headers['set-cookie']);
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
function getIsvToken() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=genToken&clientVersion=10.0.2&client=android&uuid=818aa057737ba6a4&st=1623934987178&sign=0877498be29cda51b9628fa0195f412f&sv=111", "body=" + escape('{"action":"to","to":"https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F3KSjXqQabiTuD1cJ28QskrpWoBKT%2Findex.html%3FbabelChannel%3D45%26collectionId%3D519"}'), {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'charset': 'UTF-8',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'cache-control': 'no-cache',
                            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                            'cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    token = data.tokenKey;
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function getIsvToken2() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action?functionId=isvObfuscator&clientVersion=10.0.2&client=android&uuid=818aa057737ba6a4&st=1623934998790&sign=e571148c8dfb456a1795d249c6aa3956&sv=100", 'body=%7B%22id%22%3A%22%22%2C%22url%22%3A%22https%3A//xinruidddj-isv.isvjcloud.com%22%7D', {
                        headers: {
                            'Host': 'api.m.jd.com',
                            'user-agent': TS_USER_AGENTS_1["default"],
                            'content-type': 'application/x-www-form-urlencoded',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    token2 = data.token;
                    cookie += 'IsvToken=' + token2 + ';';
                    resolve();
                    return [2 /*return*/];
            }
        });
    }); });
}
function init() {
    return new Promise(function (resolve) {
        axios_1["default"].get("https://lzdz-isv.isvjcloud.com/dingzhi/qqxing/pasture/activity?activityId=90121061401?activityId=90121061401", {
            headers: {
                'Host': 'lzdz-isv.isvjcloud.com',
                'User-Agent': TS_USER_AGENTS_1["default"],
                'X-Requested-With': 'com.jingdong.app.mall',
                'Cookie': 'IsvToken=' + token
            }
        }).then(function (res) {
            reloadCookie(res.headers['set-cookie']);
            resolve();
        });
    });
}
function reloadCookie(setCookie) {
    var e_3, _a, e_4, _b;
    var cookieArr = cookie.split(';');
    cookieArr.pop();
    var cookieTEMP = {};
    try {
        for (var cookieArr_1 = __values(cookieArr), cookieArr_1_1 = cookieArr_1.next(); !cookieArr_1_1.done; cookieArr_1_1 = cookieArr_1.next()) {
            var ck = cookieArr_1_1.value;
            cookieTEMP[ck.split('=')[0]] = ck.match(/(pt_key|pt_pin|LZ_TOKEN_KEY|LZ_TOKEN_VALUE|AUTH_C_USER|lz_jdpin_token|IsvToken)=([^;]*)/)[2];
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (cookieArr_1_1 && !cookieArr_1_1.done && (_a = cookieArr_1["return"])) _a.call(cookieArr_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    try {
        for (var setCookie_1 = __values(setCookie), setCookie_1_1 = setCookie_1.next(); !setCookie_1_1.done; setCookie_1_1 = setCookie_1.next()) {
            var ck = setCookie_1_1.value;
            ck = ck.split(';')[0];
            cookieTEMP[ck.split('=')[0]] = ck.match(/(pt_key|pt_pin|LZ_TOKEN_KEY|LZ_TOKEN_VALUE|AUTH_C_USER|lz_jdpin_token|IsvToken)=([^;]*)/)[2];
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (setCookie_1_1 && !setCookie_1_1.done && (_b = setCookie_1["return"])) _b.call(setCookie_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    cookie = '';
    for (var ck in cookieTEMP) {
        if (cookieTEMP.hasOwnProperty(ck)) {
            cookie += ck + "=" + cookieTEMP[ck] + ";";
        }
    }
}
function wait(t) {
    var _this = this;
    return new Promise(function (resolve) {
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                resolve();
                return [2 /*return*/];
            });
        }); }, t);
    });
}
function requireConfig() {
    return new Promise(function (resolve) {
        console.log('\n====================Hello World====================\n');
        console.log('开始获取配置文件\n');
        var jdCookieNode = require('./jdCookie.js');
        Object.keys(jdCookieNode).forEach(function (item) {
            if (jdCookieNode[item]) {
                cookiesArr.push(jdCookieNode[item]);
            }
        });
        console.log("\u5171" + cookiesArr.length + "\u4E2A\u4EAC\u4E1C\u8D26\u53F7\n");
        resolve(0);
    });
}
