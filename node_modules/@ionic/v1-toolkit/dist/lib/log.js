"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
exports.timestamp = () => chalk_1.default.dim(`[${new Date().toTimeString().slice(0, 8)}]`);
