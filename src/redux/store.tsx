import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from '../slice/ProductSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export type RootState = {
  product: ReturnType<typeof ProductReducer>; // Assuming 'product' is your slice name
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, ProductReducer);

export const store = configureStore({
  reducer: {
    product: persistedReducer, // Use the persisted reducer
  },
});

export const persistor = persistStore(store);