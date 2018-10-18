import formReducer from './Form/formReducer';
import assetListReducer from './AssetList/assetListReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
  form: formReducer,
  assetlist: assetListReducer,
});

export default reducer;
