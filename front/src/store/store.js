import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import AppReducer from "./reducers/AppReducer/App.reducer";
import CountryReducer from "./reducers/CountryReducer/Country.reducer";

const rootReducer = combineReducers({
  country: CountryReducer,
  app: AppReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
