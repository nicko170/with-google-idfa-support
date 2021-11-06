# Expo - `with-google-idfa-support`

An [Expo Config Plugin](https://docs.expo.io/guides/config-plugins) to add the GoogleIDFASupport pod to your ios Podfile without ejecting or touching native code.

This basically links the AdSupport framework in your project, which in turn lets Google Analytics track conversions!

You can learn more about it here:
- [Googles documentation on GoogleIDFASupport](https://developers.google.com/analytics/devguides/collection/ios/v3/optional-features)
- [Config Plugins - Expo docs](https://docs.expo.io/guides/config-plugins)
- Expo Managed Workflow in 2021: [part 1](https://blog.expo.io/expo-managed-workflow-in-2021-5b887bbf7dbb), [part 2](https://blog.expo.io/expo-managed-workflow-in-2021-d1c9b68aa10)

## Getting started

Some points you need to be aware of before use this plugin
- **This plugin only works on iOS, and does nothing for Android**

## Installation

#### Prerequisites:

- App project using Expo SDK 41+.
- Installed `expo-cli@4.4.4` or later.

#### With `expo install`

```
expo install with-google-idfa-support
```

#### Without `expo install`

```sh
# using yarn
yarn add with-google-idfa-support

# using npm
npm install with-google-idfa-support
```

Open your `app.json` or `app.config.js` and update your `plugins` section (`expo install` would do it for you):

```json
{
  "plugins": ["with-google-idfa-support"]
}
```


## Building and running

You can either:

- Use `expo prebuild` and `expo run:android`/`expo run:ios` to update your native projects,
- Use _[EAS Build](https://docs.expo.io/build/introduction/)_ to build your development client and release versions.

## Credits

- Expo

## License

GNU GPL v3
