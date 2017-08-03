import { combineReducers } from 'redux';
import ImagesReducer from './ImagesReducer';
import SelectedViewReducer from './SelectedViewReducer';

export default combineReducers({
	imageReducer: ImagesReducer,
	selectedView: SelectedViewReducer,
});
