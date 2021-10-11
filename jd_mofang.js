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
var cookie = '', res = '', UserName, index;
var shareCodeSelf = [];
var DEBUG = false;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, sign, _a, _b, t, signDay, type, _c, _d, proInfo, e_1_1, _e, _f, proInfo, e_2_1, _g, _h, proInfo, e_3_1, _j, _k, proInfo, e_4_1, e_5_1, shareCodeSelf_1, shareCodeSelf_1_1, code_1, e_6_1, code;
    var e_5, _l, e_1, _m, e_2, _o, e_3, _p, e_4, _q, e_6, _r;
    var _s, _t, _u, _v, _w;
    return __generator(this, function (_x) {
        switch (_x.label) {
            case 0: return [4 /*yield*/, (0, TS_USER_AGENTS_1.requireConfig)()];
            case 1:
                cookiesArr = _x.sent();
                i = 0;
                _x.label = 2;
            case 2:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 45];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + UserName + "\n");
                return [4 /*yield*/, api("functionId=getInteractionHomeInfo&body=%7B%22sign%22%3A%22u6vtLQ7ztxgykLEr%22%7D&appid=content_ecology&client=wh5&clientVersion=1.0.0")];
            case 3:
                res = _x.sent();
                sign = res.result.taskConfig.projectId;
                DEBUG ? console.log(JSON.stringify(res)) : '';
                console.log('sing:', sign);
                return [4 /*yield*/, api("functionId=queryInteractiveInfo&body=%7B%22encryptProjectId%22%3A%22" + sign + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 4:
                res = _x.sent();
                DEBUG ? console.log(JSON.stringify(res)) : '';
                _x.label = 5;
            case 5:
                _x.trys.push([5, 42, 43, 44]);
                _a = (e_5 = void 0, __values(res.assignmentList)), _b = _a.next();
                _x.label = 6;
            case 6:
                if (!!_b.done) return [3 /*break*/, 41];
                t = _b.value;
                if (!(t.completionCnt < t.assignmentTimesLimit)) return [3 /*break*/, 40];
                if (!t.ext) return [3 /*break*/, 40];
                if (t.ext.extraType === 'assistTaskDetail') {
                    console.log('助力码:', t.ext.assistTaskDetail.itemId);
                    shareCodeSelf.push({
                        encryptProjectId: sign,
                        encryptAssignmentId: t.encryptAssignmentId,
                        itemId: t.ext.assistTaskDetail.itemId
                    });
                }
                if (t.assignmentName === '每日签到') {
                    signDay = ((_s = t.ext.sign1.signList) === null || _s === void 0 ? void 0 : _s.length) || 0, type = t.rewards[signDay].rewardType;
                    console.log(signDay, type);
                    // TODO 签到
                }
                _x.label = 7;
            case 7:
                _x.trys.push([7, 12, 13, 14]);
                _c = (e_1 = void 0, __values((_t = t.ext.productsInfo) !== null && _t !== void 0 ? _t : [])), _d = _c.next();
                _x.label = 8;
            case 8:
                if (!!_d.done) return [3 /*break*/, 11];
                proInfo = _d.value;
                if (!(proInfo.status === 1)) return [3 /*break*/, 10];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22" + sign + "%22%2C%22encryptAssignmentId%22%3A%22" + t.encryptAssignmentId + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22" + proInfo.itemId + "%22%2C%22actionType%22%3A0%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 9:
                res = _x.sent();
                console.log(res);
                _x.label = 10;
            case 10:
                _d = _c.next();
                return [3 /*break*/, 8];
            case 11: return [3 /*break*/, 14];
            case 12:
                e_1_1 = _x.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 14];
            case 13:
                try {
                    if (_d && !_d.done && (_m = _c["return"])) _m.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 14:
                _x.trys.push([14, 21, 22, 23]);
                _e = (e_2 = void 0, __values((_u = t.ext.shoppingActivity) !== null && _u !== void 0 ? _u : [])), _f = _e.next();
                _x.label = 15;
            case 15:
                if (!!_f.done) return [3 /*break*/, 20];
                proInfo = _f.value;
                if (!(proInfo.status === 1)) return [3 /*break*/, 19];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22" + sign + "%22%2C%22encryptAssignmentId%22%3A%22" + t.encryptAssignmentId + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22" + proInfo.advId + "%22%2C%22actionType%22%3A1%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 16:
                res = _x.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.ext.waitDuration * 1000)];
            case 17:
                _x.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22" + sign + "%22%2C%22encryptAssignmentId%22%3A%22" + t.encryptAssignmentId + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22" + proInfo.advId + "%22%2C%22actionType%22%3A0%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 18:
                res = _x.sent();
                console.log(res);
                _x.label = 19;
            case 19:
                _f = _e.next();
                return [3 /*break*/, 15];
            case 20: return [3 /*break*/, 23];
            case 21:
                e_2_1 = _x.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 23];
            case 22:
                try {
                    if (_f && !_f.done && (_o = _e["return"])) _o.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 23:
                _x.trys.push([23, 30, 31, 32]);
                _g = (e_3 = void 0, __values((_v = t.ext.browseShop) !== null && _v !== void 0 ? _v : [])), _h = _g.next();
                _x.label = 24;
            case 24:
                if (!!_h.done) return [3 /*break*/, 29];
                proInfo = _h.value;
                if (!(proInfo.status === 1)) return [3 /*break*/, 28];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22" + sign + "%22%2C%22encryptAssignmentId%22%3A%22" + t.encryptAssignmentId + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22" + proInfo.itemId + "%22%2C%22actionType%22%3A1%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 25:
                res = _x.sent();
                console.log(res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(t.ext.waitDuration * 1000)];
            case 26:
                _x.sent();
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22" + sign + "%22%2C%22encryptAssignmentId%22%3A%22" + t.encryptAssignmentId + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22" + proInfo.itemId + "%22%2C%22actionType%22%3A0%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 27:
                res = _x.sent();
                console.log(res);
                _x.label = 28;
            case 28:
                _h = _g.next();
                return [3 /*break*/, 24];
            case 29: return [3 /*break*/, 32];
            case 30:
                e_3_1 = _x.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 32];
            case 31:
                try {
                    if (_h && !_h.done && (_p = _g["return"])) _p.call(_g);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 32:
                _x.trys.push([32, 38, 39, 40]);
                _j = (e_4 = void 0, __values((_w = t.ext.addCart) !== null && _w !== void 0 ? _w : [])), _k = _j.next();
                _x.label = 33;
            case 33:
                if (!!_k.done) return [3 /*break*/, 37];
                proInfo = _k.value;
                if (!(proInfo.status === 1)) return [3 /*break*/, 36];
                console.log(t.assignmentName);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22" + sign + "%22%2C%22encryptAssignmentId%22%3A%22" + t.encryptAssignmentId + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22" + proInfo.itemId + "%22%2C%22actionType%22%3A1%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 34:
                res = _x.sent();
                console.log('加购:', res);
                if (res.msg === '任务已完成')
                    return [3 /*break*/, 37];
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 35:
                _x.sent();
                _x.label = 36;
            case 36:
                _k = _j.next();
                return [3 /*break*/, 33];
            case 37: return [3 /*break*/, 40];
            case 38:
                e_4_1 = _x.sent();
                e_4 = { error: e_4_1 };
                return [3 /*break*/, 40];
            case 39:
                try {
                    if (_k && !_k.done && (_q = _j["return"])) _q.call(_j);
                }
                finally { if (e_4) throw e_4.error; }
                return [7 /*endfinally*/];
            case 40:
                _b = _a.next();
                return [3 /*break*/, 6];
            case 41: return [3 /*break*/, 44];
            case 42:
                e_5_1 = _x.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 44];
            case 43:
                try {
                    if (_b && !_b.done && (_l = _a["return"])) _l.call(_a);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 44:
                i++;
                return [3 /*break*/, 2];
            case 45:
                console.log('助力排队:', shareCodeSelf);
                cookie = cookiesArr[0];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                _x.label = 46;
            case 46:
                _x.trys.push([46, 52, 53, 54]);
                shareCodeSelf_1 = __values(shareCodeSelf), shareCodeSelf_1_1 = shareCodeSelf_1.next();
                _x.label = 47;
            case 47:
                if (!!shareCodeSelf_1_1.done) return [3 /*break*/, 51];
                code_1 = shareCodeSelf_1_1.value;
                console.log("\u8D26\u53F71 " + UserName + " \u53BB\u52A9\u529B " + code_1.itemId);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22" + code_1.encryptProjectId + "%22%2C%22encryptAssignmentId%22%3A%22" + code_1.encryptAssignmentId + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22" + code_1.itemId + "%22%2C%22actionType%22%3A%22%22%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 48:
                res = _x.sent();
                console.log('助力结果:', res);
                return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(2000)];
            case 49:
                _x.sent();
                _x.label = 50;
            case 50:
                shareCodeSelf_1_1 = shareCodeSelf_1.next();
                return [3 /*break*/, 47];
            case 51: return [3 /*break*/, 54];
            case 52:
                e_6_1 = _x.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 54];
            case 53:
                try {
                    if (shareCodeSelf_1_1 && !shareCodeSelf_1_1.done && (_r = shareCodeSelf_1["return"])) _r.call(shareCodeSelf_1);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 54:
                cookie = cookiesArr[1];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                code = shareCodeSelf[0];
                console.log("\u8D26\u53F72 " + UserName + " \u53BB\u52A9\u529B " + code.itemId);
                return [4 /*yield*/, api("functionId=doInteractiveAssignment&body=%7B%22encryptProjectId%22%3A%22" + code.encryptProjectId + "%22%2C%22encryptAssignmentId%22%3A%22" + code.encryptAssignmentId + "%22%2C%22sourceCode%22%3A%22acexinpin0823%22%2C%22itemId%22%3A%22" + code.itemId + "%22%2C%22actionType%22%3A%22%22%2C%22completionFlag%22%3A%22%22%2C%22ext%22%3A%7B%7D%7D&client=wh5&clientVersion=1.0.0&appid=content_ecology")];
            case 55:
                res = _x.sent();
                console.log('助力结果:', res);
                return [2 /*return*/];
        }
    });
}); })();
function api(params) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1["default"].post("https://api.m.jd.com/client.action", params, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'User-Agent': TS_USER_AGENTS_1["default"],
                            'Referer': 'https://h5.m.jd.com/babelDiy/Zeus/2bf3XEEyWG11pQzPGkKpKX2GxJz2/index.html',
                            'Origin': 'https://h5.m.jd.com',
                            'Host': 'api.m.jd.com',
                            'Cookie': cookie
                        }
                    })];
                case 1:
                    data = (_a.sent()).data;
                    return [4 /*yield*/, (0, TS_USER_AGENTS_1.wait)(1000)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
