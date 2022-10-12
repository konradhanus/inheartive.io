# inHEARTive

_description will be added in future_

## Installation

Prerequisites:

- [Docker](https://www.docker.com/) with
  [Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) >= 16
- [Yarn v1](https://classic.yarnpkg.com/)
- [Android Studio](https://developer.android.com/studio) _(to run Android
  emulator)_
- [XCode](https://developer.apple.com/xcode/) _(to run iOS simulator)_

```shell
$ yarn install --frozen-lockfile
$ docker compose up --detach
$ yarn start
# in new terminal
$ yarn start:android # or start:ios
```

## Usage

### Login to application

Backend application have integration to external user provider. Locally it's
[Authelia](https://www.authelia.com/) which is statically configured to serve
users from YAML file. Currently available users are `user1@inheartive.com` and
`user2@inheartive.com` with password `Password1`.

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
