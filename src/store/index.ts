import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import planeteReducer from '../features/planete/planeteSclice';
import planeteSaga from '../features/planete/planeteSaga';

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    planetes: planeteReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
  },
});

SagaMiddleware.run(planeteSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
