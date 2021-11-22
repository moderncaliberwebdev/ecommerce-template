"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const modelSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
const Item = (0, mongoose_1.model)('Item', modelSchema);
exports.default = Item;
//# sourceMappingURL=model.js.map