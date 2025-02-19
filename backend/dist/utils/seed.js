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
exports.seed = void 0;
const user_1 = __importDefault(require("../models/user"));
// TODO: Create seed for models
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    // Seed Users
    const users = [
        {
            name: "John Doe",
            password: "password123",
            emailAddress: "johndoe@example.com",
            profileImage: "https://example.com/profile.jpg",
            role: "user",
            provider: "local",
        },
        {
            name: "Jane Smith",
            password: "securepass456",
            emailAddress: "janesmith@example.com",
            profileImage: "https://example.com/profile2.jpg",
            role: "owner",
            provider: "google",
        },
        {
            name: "Alice Johnson",
            password: "mypassword789",
            emailAddress: "alicejohnson@example.com",
            profileImage: "https://example.com/profile3.jpg",
            role: "user",
            provider: "facebook",
        },
    ];
    yield user_1.default.insertMany(users);
    console.log("Database user seeded successfully.");
});
exports.seed = seed;
