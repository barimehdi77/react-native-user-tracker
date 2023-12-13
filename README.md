# react-native-user-tracker

Effortlessly track user interactions in React Native with 'react-native-user-tracker,' sending customizable data to your specified host and endpoint.

## Installation

```sh
npm install react-native-user-tracker
```

## Usage

```js
import Tracker from 'react-native-user-tracker';
import type {
  AppTrackerConfiguration,
  NetworkConfiguration,
  TrackedUserConfiguration,
} from '../../src/types';

// ...

export default function App() {
  const nework: NetworkConfiguration = {
    host: 'localhost:8080/',
    endpoint: '/collector',
    method: 'post',
  };
  const appTracker: AppTrackerConfiguration = {
    appId: 'example app',
    appLanguage: 'en',
    devicePlatform: Platform.OS,
  };
  const trackedUser: TrackedUserConfiguration = {
    userId: '77',
  };

  const tracker = new Tracker(nework, appTracker, trackedUser);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
