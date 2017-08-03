import {
  CURRENT_VIEW
} from './types';

export const currentView = (viewNumber) => {
  return {
    type: 'current_view',
    payload: viewNumber
  };
};
