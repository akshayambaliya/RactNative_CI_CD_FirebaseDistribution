import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // imports from redux-persist

import rootReducer from './rootReducer'; // Root reducer


const store = createStore(rootReducer);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
