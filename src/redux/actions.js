import {
  CLEAR_CLOSED_CARDS,
  FETCH_DATA,
  HIDE_ERROR,
  HIDE_LOADER,
  SET_CLOSED_CARDS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  SHOW_ERROR,
  SHOW_LOADER,
} from './types';

import { BASE_URL } from './../config';
import { Http } from './../api/http';

const mapResponse = (response) => {
  return response.map((entry, i) => {
    return {
      id: i,
      header: entry.image
        .split('/')[1]
        .split('-')
        .map((word) => {
          return /^(\D+)/.test(word) ? word.replace(/^\w/, (c) => c.toUpperCase()) : '';
        })
        .join(' ')
        .trim(),
      subheader: entry.category.replace(/^\w/, (c) => c.toUpperCase()),
      image: `${BASE_URL}` + entry.image,
      filesize: entry.filesize,
      timestamp: entry.timestamp,
      date: new Date(entry.timestamp).toUTCString(),
      category: entry.category,
      filename: entry.image.split('/')[1],
    };
  });
};

export const fetchData = (params) => async (dispatch) => {
  dispatch({ type: SHOW_LOADER });
  dispatch({ type: HIDE_ERROR });
  try {
    const response = await Http.get(params);
    dispatch({ type: FETCH_DATA, payload: mapResponse(response) });
    dispatch({ type: SET_TOTAL_PAGES, payload: Math.ceil(response.length / 6) });
  } catch (error) {
    console.error('error: ', error);
    dispatch({ type: SHOW_ERROR, payload: error });
  } finally {
    dispatch({ type: HIDE_LOADER });
  }
};
export const closeCard = (card) => ({ type: SET_CLOSED_CARDS, payload: card });
export const resetCards = () => ({ type: CLEAR_CLOSED_CARDS });
export const setPage = (page) => ({ type: SET_CURRENT_PAGE, payload: page });
