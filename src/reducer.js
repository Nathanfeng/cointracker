import formReducer from './components/Form/formReducer';
import {assetListReducer} from './components/AssetList/assetListReducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
  formReducer,
  assetListReducer,
});

export default reducer;
