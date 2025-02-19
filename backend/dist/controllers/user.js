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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.userHealthService = void 0;
const user_1 = __importDefault(require("../models/user"));
const utils_1 = require("../utils/utils");
/**
 * User service health checker
 */
exports.userHealthService = (0, utils_1.wrapper)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json({
        message: "User service is up and running",
    });
}));
/**
 * Create User
 * @body name, password, emailAddress, profileImage, role, provider
 */
exports.createUser = (0, utils_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password, emailAddress, profileImage, role, provider } = req.body;
    const queryUser = yield user_1.default.findOne({ emailAddress: emailAddress });
    if (queryUser) {
        return res.status(409).json({ message: "User already exists" });
    }
    // TODO: Handle Social logins
    // TODO: Handle Password Hashing
    const user = yield user_1.default.create(req.body);
    return res.status(200).json({ message: "User created successfully", user: user });
}));
/**
 *  Update specific user
 * @params id
 * @body name, password, emailAddress, profileImage, role, provider
 */
exports.updateUser = (0, utils_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, password, emailAddress, profileImage, role, provider } = req.body;
    const queryUser = yield user_1.default.findById(id);
    if (!queryUser) {
        return res.status(404).json({ message: "User not found" });
    }
    const updateUser = yield user_1.default.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: "User updated successfully", user: updateUser });
}));
/**
 * Delete Specific User
 * @params id
 */
exports.deleteUser = (0, utils_1.wrapper)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const queryUser = yield user_1.default.findByIdAndDelete(id);
    if (!queryUser) {
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User deleted successfully" });
}));
