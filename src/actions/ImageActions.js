import {
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
} from './types';

export const fetchImages = (page, noOfImages) => {
  const url = `https://randomuser.me/api/?page=${page}&results=18`;
  return (dispatch) => {
    dispatch({
      type: FETCH_IMAGES,
      payload: page
    });
    fetch(url)
      .then(response => response.json())
      .then(response => {
        fetchImagesSuccess(dispatch, response.results);
      })
      .catch(error => {
        fetchImagesFilure(dispatch, error);
      });
	}
};

export const fetchImagesSuccess = (dispatch, images) => {
  dispatch({
    type: FETCH_IMAGES_SUCCESS,
    payload: images
  });
};

export const fetchImagesFilure = (dispatch, error) => {
  dispatch({
    type: FETCH_IMAGES_FAILURE,
    payload: error
  });
};
