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

### Prerequisites:

- [Docker](https://www.docker.com/) with
  [Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) >= 16,
- [Yarn v1](https://classic.yarnpkg.com/)
- [Android Studio](https://developer.android.com/studio) _(to run Android
  emulator)_
- [XCode](https://developer.apple.com/xcode/) _(to run iOS simulator)_

### Setting up the development environment

https://reactnative.dev/docs/environment-setup

In development environment create file: local.properties with path for sdk:

![image](https://user-images.githubusercontent.com/101329582/196930246-106e6a46-4eb3-46e1-8ff4-13e06ec9fbf0.png)

## Run inHEARTive

### on first terminal

```shell
$ yarn install --frozen-lockfile
$ yarn start
```

### on second terminal (iOS)

```shell
$ yarn start:ios # or yarn nx run-ios
```

### on second terminal (android)

```shell
$ yarn start:android # or yarn nx run-android
```

### run docker (database)

```shell
$ docker compose --env-file ./.env.dev up
```

or

create .env file in root directory with DB_PASSWORD and run

```shell
$ docker compose up
```

### run storybook

#### iOS

- simulator press `command + control + z`, select on context menu
  `toogle storybook`

#### android

- simulator press `command + control + m`, select on context menu
  `toogle storybook`

or

Run storybook from command line

```shell
$ yarn nx storybook mobile
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

### Generate new files with Nx

There are at least 2 options:

1. Install <b>Nx Console</b> for Visual Studio Code or other development
   environment and choose properly options from menu
2. Write a command in <b>terminal</b>

#### Generate Library

1. Generate library in development environment:

Go to main menu: GENERATE & RU TARGET -> generate -> <b>
@nrwl/react-native:library </b> Write name and directory

2. Run in terminal a command:

```shell
 $ nx generate @nrwl/react-native:library exampleLibrary --directory=ui/example
```

All library files will be generated in <b>libs</b> directory

#### Generate Component

1. Go to main menu: GENERATE & RU TARGET -> generate -> <b>
   @nrwl/react-native:component </b> Fill in the selected options

2. In terminal run a command:

```shell
$ nx generate @nrwl/react-native:component ExampleComponent --project=mobile --directory=app --pascalCaseFiles
```

Two files will be generated: ExampleComponent.tsx file for component and
ExampleComponent.spec.tsx for tests in example-component directory

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
