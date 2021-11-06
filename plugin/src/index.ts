import { ConfigPlugin, withPlugins } from '@expo/config-plugins';

import withGoogleIDFASupportPlugin from './withGoogleIDFASupportPlugin';

const withGoogleIDFASupport: ConfigPlugin = (config) => {
  return withPlugins(config, [withGoogleIDFASupportPlugin]);
};

export default withGoogleIDFASupport;
