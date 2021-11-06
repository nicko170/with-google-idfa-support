"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGoogleIDFASupport = void 0;
const config_plugins_1 = require("@expo/config-plugins");
const generateCode_1 = require("@expo/config-plugins/build/utils/generateCode");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const withGoogleIDFASupportPlugin = config => {
    return config_plugins_1.withDangerousMod(config, [
        'ios',
        async (config) => {
            const filePath = path_1.default.join(config.modRequest.platformProjectRoot, 'Podfile');
            const contents = await promises_1.default.readFile(filePath, 'utf-8');
            let results;
            try {
                results = addGoogleIDFASupport(contents);
            }
            catch (e) {
                if (e.code == 'ERR_NO_MATCH') {
                    throw new Error(`Cannot add GoogleIDFASupport to the project's ios/Podfile because it's malformed. Please report this with a copy of your project Podfile.`);
                }
                throw e;
            }
            if (results.didMerge) {
                await promises_1.default.writeFile(filePath, results.contents);
            }
            return config;
        }
    ]);
};
const addGoogleIDFASupport = (src) => {
    return generateCode_1.mergeContents({
        tag: 'google-idfa-support',
        src,
        newSrc: `  pod 'GoogleIDFASupport'`,
        anchor: /use_native_modules/,
        offset: 0,
        comment: '#',
    });
};
exports.addGoogleIDFASupport = addGoogleIDFASupport;
exports.default = withGoogleIDFASupportPlugin;
