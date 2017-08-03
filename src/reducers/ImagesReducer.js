import{
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  apiPage: 1,
  userImages: [],
	error: '',
	loading: true
};

export default function ImageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      return { ...state, apiPage: action.payload, loading: true, error: '' };
    case FETCH_IMAGES_SUCCESS:
      let tempData = [];
      if(state.apiPage == 1) {
        tempData = action.payload
      } else {
        tempData = state.userImages.concat(action.payload);
      }
      return { ...state, userImages: tempData, loading: false, error: '' };
    case FETCH_IMAGES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
