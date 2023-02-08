import { combineReducers } from 'redux';
import tagsReducer from './tagsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import { languageSwitcherReducer } from './languageSwitcherReducer';
import { themeReducer } from './themeReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  tags: tagsReducer,
  auth: authReducer,
  languages: languageSwitcherReducer,
  themes:themeReducer
});

export default rootReducer;
