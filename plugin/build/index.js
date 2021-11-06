"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const withGoogleIDFASupportPlugin_1 = __importDefault(require("./withGoogleIDFASupportPlugin"));
const withGoogleIDFASupport = (config) => {
    return config_plugins_1.withPlugins(config, [withGoogleIDFASupportPlugin_1.default]);
};
exports.default = withGoogleIDFASupport;
