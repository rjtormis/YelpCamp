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
const utils_1 = __importDefault(require("../utils/utils"));
const supertest_1 = __importDefault(require("supertest"));
const mongoose_1 = __importDefault(require("mongoose"));
/**
 * Mock database connection
 */
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    const db = (process.env.DB_CONNECTION = "mongodb://localhost:27017/test");
    yield mongoose_1.default.connect(db);
}));
describe("User Controller", () => {
    let userId = "";
    it("It should create a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(utils_1.default).post("/user").send({
            name: "John Doe",
            password: "password",
            emailAddress: "johnedoe@example.com",
            profileImage: "https://example.com/image.jpg",
            role: "user",
            provider: "local",
        });
        userId = res.body.user._id;
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("message", "User created successfully");
        expect(res.body.user).toHaveProperty("name", "John Doe");
    }));
    it("It should update a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(utils_1.default).patch(`/user/${userId}`).send({
            _id: userId,
            name: "John Dope",
            password: "password",
            emailAddress: "johnedoe@example.com",
            profileImage: "https://example.com/image.jpg",
            role: "user",
        });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("message", "User updated successfully");
        expect(res.body.user).toHaveProperty("name", "John Dope");
    }));
    it("It should delete a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(utils_1.default).delete(`/user/${userId}`).send({
            _id: userId,
        });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("message", "User deleted successfully");
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connection.close();
}));
