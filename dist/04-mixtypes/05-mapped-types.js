"use strict";
// Маппинг типов
Object.defineProperty(exports, "__esModule", { value: true });
const brandRecord = {
    apple: {
        country: 'usa',
        name: 'Apple',
        createdAt: new Date(),
    },
};
function printPcCatalog(pcCatalog) {
    var _a;
    console.log((_a = pcCatalog.apple) === null || _a === void 0 ? void 0 : _a.country);
}
const p = { document: window.document };
