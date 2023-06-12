import { AppRegistry } from 'react-native';
import AppRoot from './app/App';
import { name } from '../app.json';

AppRegistry.registerComponent(name, () => AppRoot);
