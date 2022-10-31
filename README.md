# inHEARTive

## Run Storybook for React Native

### on first terminal

- `yarn install`
- `yarn start`

### on second terminal

- `yarn nx run-ios`
- `yarn nx storybook mobile`

on iOS simulator press `command + control + z`, select on context menu
`toogle storybook`

## Graph

- `yarn graph`

## Installation

Prerequisites:

- [Node.js](https://nodejs.org/) >= 16,
- [Yarn v1](https://classic.yarnpkg.com/)
- [Android Studio](https://developer.android.com/studio) _(to run Android
  emulator)_
- [XCode](https://developer.apple.com/xcode/) _(to run iOS simulator)_

```shell
$ yarn install --frozen-lockfile
$ yarn start
# in new terminal
$ yarn start:android # or start:ios
```

## Usage

### Detox for React Native

#### pre requirements

```
$ brew tap wix/brew
$ brew install applesimutils
$ npm install -g jest
```

### How to run E2E test

`yarn nx run-ios` `yarn nx test-ios mobile-e2e`

### Storybook for React Native

Run as described in **Installation** and in 2nd terminal run additional command:

```shell
yarn nx storybook mobile
```

on iOS simulator press `CMD` + `CTRL` + `Z` select on context menu
`toogle storybook`.

### Troubleshoots

`1. The keyboard does not work on the IOS emulator.`

- The solution to this problem is to press cmd + shift + k.

## Support

_will be added in future_

## Roadmap

Check our
[jira tracker](https://tracker.intive.com/jira/projects/INHEART/summary).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
