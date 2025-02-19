"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils/utils"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = require("express");
const database_1 = require("./utils/database");
const bookings_1 = __importDefault(require("./routes/bookings"));
const campground_1 = __importDefault(require("./routes/campground"));
const dashboard_1 = __importDefault(require("./routes/dashboard"));
const listings_1 = __importDefault(require("./routes/listings"));
const user_1 = __importDefault(require("./routes/user"));
// Connect database
(0, database_1.databaseConnection)();
utils_1.default.use((0, morgan_1.default)("dev"));
utils_1.default.use((0, express_1.json)());
utils_1.default.use((0, express_1.urlencoded)({ extended: true }));
utils_1.default.use("/user", user_1.default);
utils_1.default.use("/bookings", bookings_1.default);
utils_1.default.use("/campgrounds", campground_1.default);
utils_1.default.use("/dashboard", dashboard_1.default);
utils_1.default.use("/listings", listings_1.default);
utils_1.default.listen(3000, () => {
    console.log("Listening in PORT 3000");
});
