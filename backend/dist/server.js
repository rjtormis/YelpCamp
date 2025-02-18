"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils/utils"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = require("express");
utils_1.default.use((0, morgan_1.default)("dev"));
utils_1.default.use((0, express_1.json)());
utils_1.default.use((0, express_1.urlencoded)({ extended: true }));
utils_1.default.listen(3000, () => {
    console.log("Listening in PORT 3000");
});
