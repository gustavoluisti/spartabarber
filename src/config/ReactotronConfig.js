import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.0.13'})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga());

  tron.clear();

  console.tron = tron;
}
