"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Controllers
const routeController_1 = require("../controllers/routeController");
router.get('/', (req, res) => res.json({ title: 'Welcome to NextJS and TS!!' }));
router.get('/items', routeController_1.getItem);
router.post('/items/newitem', routeController_1.newItem);
exports.default = router;
//# sourceMappingURL=router.js.map