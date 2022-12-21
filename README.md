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

### Additional steps for Android on Mac

1. Create file "local.properties" in "apps/mobile/android/".
2. Add inside "sdk.dir = /Users/<your_computer_name>/Library/Android/sdk". I.
   ****\***** MacOS ****\*****

   1. Open terminal and write "open .bash_profile"
   2. Add following lines: export
      ANDROID_SDK=/Users/<your_computer_name>/Library/Android/sdk export
      PATH=/Users/<your_computer_name>/Library/Android/sdk/platform-tools:$PATH
      export ANDROID_HOME=~/Library/Android/sdk/
      export PATH=$PATH:~/android-sdks/platform-tools/
      export PATH=$PATH:~/android-sdks/tools/

   3. Save and quit.
   4. Write in terminal "source ~/.bash_profile".
   5. Turn off terminals. ****\***** End ****\*****

II. ****\***** As ZSH User ****\*****

1.  Open terminal and write "open ~/.zshrc".
2.  Add following lines: export JAVA_HOME=/Applications/Android\
    Studio.app/Contents/jre/Contents/Home export
    ANDROID_HOME=/Users/<your_computer_name>/Library/Android/sdk export
    PATH=$ANDROID_HOME/emulator:$PATH export
    PATH=$ANDROID_HOME/platform-tools:$PATH export
    PATH=$ANDROID_HOME/tools:$PATH export PATH=$ANDROID_HOME/tools/bin:$PATH

3.  Save and quit.
4.  Write in terminal "source ~/.zshrc".
5.  Turn off terminals. ****\***** End ****\*****

### Sync your project via Android Studio:

1. Go File->Reload all from Disk.

### ios on mac

1. Run command in main project directory "inheartive.io" via terminal:
   - "bundle init"
   - "gem update --system"
   - "bundle install"
2. Go to directory "apps/mobile/ios/" and run command:

- "pod install"
- "bundle install"

3. Restart all terminals

## Run inHEARTive

### on first terminal

```shell
$ yarn install --frozen-lockfile
$ docker compose up --detach
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

### Login to application

Backend application have integration to external user provider. Locally it's
[Keycloak](https://www.keycloak.org/) which is preconfigured with `my-app`
realm. Available users:

- `admin` (or by email `admin@inheartive.io`) with `Password1` password,

* `user` (or by email `user@inheartive.io`) with `Password1` password.

_Notice that users are named like admin/user, but actually we don't fetch any
roles data from OAuth2 token._

### Keycloak admin console

Keycloak have admin console via WebUI available at http://localhost:8080/. Admin
account is predefined with environments in docker-compose file.

Hit `admin` with `admin` password to login to console.

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

### Troubleshoots

1. The keyboard does not work on the IOS emulator.

- The solution to this problem is to press cmd + shift + k.

2. No bundle URL present.
   - Close emulator,
   - Close all terminal,
   - Use this command: "rm -rf ios/build/; kill $(lsof -t -i:8081);"
   - Run again application

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
