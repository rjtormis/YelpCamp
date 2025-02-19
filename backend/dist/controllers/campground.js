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
exports.defaultCampground = exports.updateCampground = exports.createCampground = exports.getSpecificCampground = exports.getCampgrounds = void 0;
const campground_1 = __importDefault(require("../models/campground"));
/**
 * Get Campgrounds
 */
const getCampgrounds = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const campgrounds = yield campground_1.default.find();
    return res.status(200).json({ campgrounds });
});
exports.getCampgrounds = getCampgrounds;
/**
 * Get Specific Campground
 */
const getSpecificCampground = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const campground = yield campground_1.default.findById(id);
    if (!campground) {
        return res.status(404).json({ message: "Campground not found" });
    }
    return res.status(200).json({ campground });
});
exports.getSpecificCampground = getSpecificCampground;
/**
 * Create Campground
 */
const createCampground = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const queryCampground = yield campground_1.default.findOne({ name });
    if (queryCampground) {
        return res.status(400).json({ message: "Campground already exists" });
    }
    yield campground_1.default.create(req.body);
    return res.status(200).json({ message: `Campground ${name} successfully.` });
});
exports.createCampground = createCampground;
/**
 * Update Campground
 */
const updateCampground = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const campground = yield campground_1.default.findById(id);
    if (!campground) {
        return res.status(404).json({ message: "Campground not found" });
    }
    yield campground_1.default.findByIdAndUpdate(id, req.body);
    return res.status(200).json({ message: `Campground ${req.body.name} updated successfully` });
});
exports.updateCampground = updateCampground;
/**
 * Delete Campground
 */
const defaultCampground = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const campground = yield campground_1.default.findById(id);
    if (!campground) {
        return res.status(404).json({ message: "Campground not found" });
    }
    yield campground_1.default.findOneAndDelete(id);
});
exports.defaultCampground = defaultCampground;
