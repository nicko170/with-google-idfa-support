import {ConfigPlugin, withDangerousMod} from '@expo/config-plugins';
import {mergeContents, MergeResults} from "@expo/config-plugins/build/utils/generateCode";
import fs from 'fs/promises';
import path from 'path';

const withGoogleIDFASupportPlugin: ConfigPlugin = config => {
    return withDangerousMod(config, [
        'ios',
        async config => {
            const filePath = path.join(config.modRequest.platformProjectRoot, 'Podfile');
            const contents = await fs.readFile(filePath, 'utf-8');
            let results: MergeResults;
            try {
                results = addGoogleIDFASupport(contents)
            } catch (e) {
                if (e.code == 'ERR_NO_MATCH') {
                    throw new Error(
                        `Cannot add GoogleIDFASupport to the project's ios/Podfile because it's malformed. Please report this with a copy of your project Podfile.`
                    );
                }
                throw e;
            }

            if (results.didMerge) {
                await fs.writeFile(filePath, results.contents);
            }

            return config
        }
    ]);
};


const addGoogleIDFASupport = (src: string): MergeResults => {
    return mergeContents({
        tag: 'google-idfa-support',
        src,
        newSrc: `  pod 'GoogleIDFASupport'`,
        anchor: /use_native_modules/,
        offset: 0,
        comment: '#',
    });
}


export {addGoogleIDFASupport};
export default withGoogleIDFASupportPlugin;
