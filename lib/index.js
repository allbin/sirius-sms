"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = __importDefault(require("query-string"));
var axios_1 = __importDefault(require("axios"));
var SiriusSMS = function (opts) {
    var defaults = {
        User: opts.user,
        Pass: opts.password,
        From: opts.from,
        FromType: opts.from.startsWith('+') ? 'I' : 'A',
        CharSet: 'UTF-8',
    };
    return {
        send: function (recipients, message, from) {
            var params = __assign(__assign({}, defaults), { From: from ? from : defaults.From, Msg: message, To: recipients.join(';') });
            var qstr = query_string_1.default.stringify(params);
            return axios_1.default.get("https://get.spiricom.spirius.com:55001/cgi-bin/sendsms?" + qstr);
        },
    };
};
exports.default = SiriusSMS;
//# sourceMappingURL=index.js.map