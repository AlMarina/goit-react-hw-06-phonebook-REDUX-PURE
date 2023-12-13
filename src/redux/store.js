import { combineReducers, createStore } from 'redux';
import { contactsReducer } from './contactsReducer';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { filterReducer } from './filterReducer';

const rootReducer = combineReducers({
  contactStore: contactsReducer,
  filterStore: filterReducer,
});
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
