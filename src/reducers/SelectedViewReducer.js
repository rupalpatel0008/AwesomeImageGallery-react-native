import{
  CURRENT_VIEW
} from '../actions/types';

export default function SelectedViewReducer(state = 1, action) {
  switch (action.type) {
    case CURRENT_VIEW:
      return action.payload;
    default:
      return state;
  }
};
