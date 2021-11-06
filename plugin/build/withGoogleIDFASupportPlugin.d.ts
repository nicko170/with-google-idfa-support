import { ConfigPlugin } from '@expo/config-plugins';
import { MergeResults } from "@expo/config-plugins/build/utils/generateCode";
declare const withGoogleIDFASupportPlugin: ConfigPlugin;
declare const addGoogleIDFASupport: (src: string) => MergeResults;
export { addGoogleIDFASupport };
export default withGoogleIDFASupportPlugin;
