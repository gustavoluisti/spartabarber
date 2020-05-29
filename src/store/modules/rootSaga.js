import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';

export default function* rooSaga() {
  return yield all([auth, user]);
}
