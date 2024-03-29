import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/index';
import ReduxSaga from 'redux-saga';
import rootSaga from './sagas/counter/index';
import logger from 'redux-logger';

const sagaMiddleware = (ReduxSaga as any).default();

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware: any) => [...getDefaultMiddleware({ thunk: false }).concat(logger.default), sagaMiddleware],
    devTools: true,
});

sagaMiddleware.run(rootSaga);
