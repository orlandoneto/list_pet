import 'react-native-gesture-handler';
import {LogBox} from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Remote debugger']);

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
