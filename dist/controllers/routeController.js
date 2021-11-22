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
exports.newItem = exports.getItem = void 0;
// Imports
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// Import models
const model_1 = __importDefault(require("../models/model"));
exports.getItem = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield model_1.default.find({});
    if (items) {
        res.json(items);
    }
    else {
        throw new Error('No Items');
    }
}));
exports.newItem = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const item = new model_1.default({
        name: 'Caleb',
    });
    yield item.save();
    res.json(item);
}));
//# sourceMappingURL=routeController.js.map