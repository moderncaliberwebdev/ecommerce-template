"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// DB
const db_1 = __importDefault(require("./config/db"));
// Routes
const router_1 = __importDefault(require("./routes/router"));
// server setup
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.use(express_1.default.json());
dotenv_1.default.config();
(0, db_1.default)();
app.use('/api', router_1.default);
app.listen(PORT, () => console.log('Server is running on the port ', PORT));
//# sourceMappingURL=server.js.map